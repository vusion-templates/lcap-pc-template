import processService from '@/global/services/process';
import $auth from './auth/index';

let assignee;
export default {
    async getTasks(param = {}) {
        const userInfo = await $auth.getUserInfo() || {};
        assignee = userInfo.UserName;
        const { query } = param;
        const res = await processService.getTasks({
            query: {
                ...query,
                assignee,
            },
        });
        return res;
    },
    async claimTask(param = {}) {
        const { path = {} } = param;
        const res = await processService.claimTask({
            path: { ...path },
            body: {
                assignee,
            },
        });
        return res;
    },
    async getDestinationUrl(param = {}) {
        const { path: { id } } = param;
        const res = await processService.getDestinationUrl({
            path: { id },
            query: {
                assignee,
            },
        });
        return res;
    },
};
