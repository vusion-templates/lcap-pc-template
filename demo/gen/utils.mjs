import axios from 'axios';
import cryptoJS from 'crypto-js';

export const utils = {
    /**
     * 平台请求
     */
    getPlatformAxios(platform) {
        return new Promise((res, rej) => {
            res(axios.create({
                baseURL: platform,
                maxContentLength: 1024 * 1024 * 50,
            }));
        });
    },
    /**
    * 获取平台有效 authorization
    */
    async getAuthorization({
        platform,
        username,
        password,
    }) {
        let authorization;
        try {
            const TenantName = platform.match(/^https?:\/\/([^.]+)./)[1];
            const pfAxios = await this.getPlatformAxios(platform);
            const loginRes = await pfAxios.post('/proxy/nuims/gateway/nuims/nuims?Action=Login&Version=2020-06-01', {
                DomainName: 'Nuims',
                LoginType: 'Normal',
                UserName: username,
                Password: this.aesEcbEncrypt(password),
                TenantName,
            }) || {};
            const { headers = {} } = loginRes;
            authorization = headers.authorization;
        } catch (error) {
            console.error('getAuthorization error :', error);
        }
        return authorization;
    },
    async batchQuery({
        platform,
        username,
        password,
        appId,
    }) {
        const authorization = await this.getAuthorization({
            platform,
            username,
            password,
        });
        const pfAxios = await this.getPlatformAxios(platform);
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
