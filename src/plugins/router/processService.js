import process from '@/apis/process';
import authService from '../auth/authService';

let user;
export default {
    async getTasks(param = {}) {
        const userInfo = await authService.getUserInfo() || {};
        user = userInfo.UserName;
        const { query } = param;
        const res = await process.getTasks({
            query: {
                ...query,
                user,
            },
        });
        return res;
    },
    async claimTask(param = {}) {
        const { path = {} } = param;
        const res = await process.claimTask({
            path: { ...path },
            body: {
                user,
            },
        });
        return res;
    },
    async getDestinationUrl(param = {}) {
        const { path: { id } } = param;
        const res = await process.getDestinationUrl({
            path: { id },
            query: {
                user,
            },
        });
        return res;
    },
};

export const porcessPorts = {
    async getProcessDefinitionList(query) {
        const res = await process.getProcessDefinitionList({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getProcessDefinition(query) {
        const res = await process.getProcessDefinition({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getProcessInstanceList(query) {
        const res = await process.getProcessInstanceList({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getProcessInstance(query) {
        const res = await process.getProcessInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskDefinitionList(query) {
        const res = await process.getTaskDefinitionList({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskDefinition(query) {
        const res = await process.getTaskDefinition({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskInstanceList(query) {
        const res = await process.getTaskInstanceList({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskInstance(query) {
        const res = await process.getTaskInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async claimTaskInstance(query) {
        const res = await process.claimTaskInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async unclaimTaskInstance(query) {
        const res = await process.unclaimTaskInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskDestinationUrl(query) {
        const res = await process.getTaskDestinationUrl({
            body: {
                ...query,
            },
        });
        return res;
    },
    async transferTaskInstance(query) {
        const res = await process.transferTaskInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async withdrawProcessInstance(query) {
        const res = await process.withdrawProcessInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async endProcessInstance(query) {
        const res = await process.endProcessInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getRejectableTaskDefinitionList(query) {
        const res = await process.getRejectableTaskDefinitionList({
            body: {
                ...query,
            },
        });
        return res;
    },
};
