import processService from '@/global/services/process';

export default {
    async getProcessDefinitionList(query) {
        const res = await processService.getProcessDefinitionList({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getProcessDefinition(query) {
        const res = await processService.getProcessDefinition({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getProcessInstanceList(query) {
        const res = await processService.getProcessInstanceList({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getProcessInstance(query) {
        const res = await processService.getProcessInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskDefinitionList(query) {
        const res = await processService.getTaskDefinitionList({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskDefinition(query) {
        const res = await processService.getTaskDefinition({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskInstanceList(query) {
        const res = await processService.getTaskInstanceList({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskInstance(query) {
        const res = await processService.getTaskInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async claimTaskInstance(query) {
        const res = await processService.claimTaskInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async unclaimTaskInstance(query) {
        const res = await processService.unclaimTaskInstance({
            body: {
                ...query,
            },
        });
        return res;
    },
    async getTaskDestinationUrl(query) {
        const res = await processService.getTaskDestinationUrl({
            body: {
                ...query,
            },
        });
        return res;
    },
};
