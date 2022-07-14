
const axios = require('axios');
const moment = require('moment');

class DatanestApi {
    constructor(apiKey = null) {
        this.http = axios.create({
            baseURL: (process.env.DATANEST_API_BASE_URL || 'https://app.datanest.earth/public-api').trimEnd('/') + '/',
            params: { api_key: apiKey }
        });
        this.apiKey = apiKey;
    }
    setAPIKey(newApiKey) {
        this.apiKey = newApiKey;
        this.http.defaults.params.api_key = newApiKey;
    }
    setBaseUrl(newBaseUrl) {
        http.defaults.baseURL = newBaseUrl;
    }
    getTimestamp() {
        return moment().format('YYYY-MM-DD HH:mm:ss');
    }
    formatTimestamp(dateTime) {
        return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
    }
    async getGatherItems(projectId, appName, latestItems = true) {
        const response = await this.http.get(`gather-app/${appName}/list`, {
            params: {
                project_id: projectId,
                latest_items: latestItems,
            }
        });

        return response.data;
    }
    async createGatherItems(projectId, appName, items) {
        const response = await this.http.post(`gather-app/${appName}/create`, {
            project_id: projectId,
            items
        });

        return response.data;
    }
    async updateGatherItems(projectId, appName, items) {
        const response = await this.http.post(`gather-app/${appName}/update`, {
            project_id: projectId,
            items
        });

        return response.data;
    }
    async deleteGatherItems(projectId, appName, titles, allowMultiple = false) {
        const response = await this.http.post(`gather-app/${appName}/delete`, {
            project_id: projectId,
            titles,
            allow_multiple: allowMultiple,
        });

        return response.data;
    }
}

module.exports = DatanestApi;

