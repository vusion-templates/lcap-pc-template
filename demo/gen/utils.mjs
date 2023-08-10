import axios from 'axios';
import cryptoJS from 'crypto-js';

export const utils = {
    platform: undefined,
    username: undefined,
    password: undefined,
    /**
     * 平台请求
     */
    getPlatformAxios() {
        return new Promise((res, rej) => {
            res(axios.create({
                baseURL: this.platform,
                maxContentLength: 1024 * 1024 * 50,
            }));
        });
    },
    /**
    * 获取平台有效 authorization
    */
    async getAuthorization() {
        let authorization;
        try {
            const TenantName = this.platform.match(/^https?:\/\/([^.]+)./)[1];
            const pfAxios = await this.getPlatformAxios(this.platform);
            const loginRes = await pfAxios.post('/proxy/nuims/gateway/nuims/nuims?Action=Login&Version=2020-06-01', {
                DomainName: 'Nuims',
                LoginType: 'Normal',
                UserName: this.username,
                Password: this.aesEcbEncrypt(this.password),
                TenantName,
            }) || {};
            const { headers = {} } = loginRes;
            authorization = headers.authorization;
        } catch (error) {
            console.error('getAuthorization error :', error);
        }
        return authorization;
    },
    async batchQuery(appId) {
        const authorization = await this.getAuthorization();
        const pfAxios = await this.getPlatformAxios(this.platform);
        const loginRes = await pfAxios.post('/proxy/nasl-storage/api/storage/batchQuery', [{
            path: 'app',
        }], {
            headers: {
                appid: appId,
                Cookie: `authorization=${authorization}`,
            },
            body: [
                {
                    path: 'app',
                },
            ],
        }) || {};
        return loginRes;
    },
    /**
     * 认证信息加密
     */
    aesEcbEncrypt(message, key = ';Z#^$;8+yhO!AhGo') {
        // utf8字符串—>WordArray对象，WordArray是一个保存32位整数的数组，相当于转成了二进制
        const keyHex = cryptoJS.enc.Utf8.parse(key);
        const messageHex = cryptoJS.enc.Utf8.parse(message);
        const encrypted = cryptoJS.AES.encrypt(messageHex, keyHex, {
            mode: cryptoJS.mode.ECB,
            padding: cryptoJS.pad.Pkcs7,
        });
        return encrypted.toString(); // base64结果
    },
};
