
const axios = require('axios');
const moment = require('moment');

axios.defaults.baseURL = (process.env.DATANEST_API_BASE_URL || 'https://app.datanest.earth/public-api').trimEnd('/') + '/';
let apiKey = process.env.DATANEST_API_KEY;

module.exports.setAPIKey = function (newApiKey) {
    apiKey = newApiKey;
}
module.exports.setBaseUrl = function (newBaseUrl) {
    axios.defaults.baseURL = newBaseUrl;
}
module.exports.getTimestamp = function () {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}
module.exports.formatTimestamp = function (dateTime) {
    return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
}
module.exports.getGatherItems = async function (projectId, appName, latestItems = true) {
    const response = await axios.get(`gather-app/${appName}/list`, {
        params: {
            project_id: projectId,
            api_key: apiKey,
            latest_items: latestItems,
        }
    });

    return response.data;
}
module.exports.createGatherItems = async function (projectId, appName, items) {
    const response = await axios.post(`gather-app/${appName}/create`, {
        project_id: projectId,
        api_key: apiKey,
        items
    });

    return response.data;
}
module.exports.updateGatherItems = async function (projectId, appName, items) {
    const response = await axios.post(`gather-app/${appName}/update`, {
        project_id: projectId,
        api_key: apiKey,
        items
    });

    return response.data;
}
module.exports.deleteGatherItems = async function (projectId, appName, titles, allowMultiple = false) {
    const response = await axios.post(`gather-app/${appName}/delete`, {
        project_id: projectId,
        api_key: apiKey,
        titles,
        allow_multiple: allowMultiple,
    });

    return response.data;
}