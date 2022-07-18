
class GatherApp {
    constructor(datanestApi, appName) {
        this.datanestApi = datanestApi.clone();
        this.gatherAppName = appName;
    }

    async getGatherItems(args) {
        return await this.datanestApi.getGatherItems(this.gatherAppName, args);
    }
    async createGatherItems(items, args) {
        return await this.datanestApi.createGatherItems(this.gatherAppName, items, args);
    }
    async updateGatherItems(items, args) {
        return await this.datanestApi.updateGatherItems(this.gatherAppName, items, args);
    }
    async deleteGatherItems(titles, args) {
        return await this.datanestApi.deleteGatherItems(this.gatherAppName, titles, args);
    }
}

module.exports = GatherApp;
