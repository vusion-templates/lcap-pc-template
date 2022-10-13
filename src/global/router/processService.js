import processService from '@/global/services/process';
import $auth from '../auth/index';

let user;
export default {
    async getTasks(param = {}) {
        const userInfo = await $auth.getUserInfo() || {};
        user = userInfo.UserName;
        const { query } = param;
        const res = await processService.getTasks({
            query: {
                ...query,
                user,
            },
        });
        return res;
    },
    async claimTask(param = {}) {
        const { path = {} } = param;
        const res = await processService.claimTask({
            path: { ...path },
            body: {
                user,
            },
        });
        return res;
    },
    async getDestinationUrl(param = {}) {
        const { path: { id } } = param;
        const res = await processService.getDestinationUrl({
            path: { id },
            query: {
                user,
            },
        });
        return res;
    },
};
