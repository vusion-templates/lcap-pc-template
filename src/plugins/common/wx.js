/* 仅供小程序使用 */

/* 将路由带http */
const getUrl = (url) => url.startsWith('http') ? url : 'http://' + url;

/* 小程序环境 */
export const isMiniApp = () => window.__wxjs_environment === 'miniprogram';

/* 路由跳转 */
export const navigateTo = ({ url }) => {
    if (!isMiniApp)
        return;
    const origin = location.origin;
    const detailUrl = encodeURIComponent(`${origin}${url}`);
    const miniUrl = `/pages/index/index?detailUrl=${detailUrl}`;
    window.wx.miniProgram.navigateTo({ url: miniUrl });
};

/* 跳转到头像昵称页面*/
export const navigateToUserInfoPage = () => {
    if (!isMiniApp)
        return;
    const uri = location.href;
    window.wx.miniProgram.navigateTo({ url: `/pages/userinfo/index?redirect_uri=${uri}` });
};
