require('dotenv').config();
const DatanestApi = require('./datanest-api');
const datanestApi = new DatanestApi();

(async () => {
    datanestApi.setProjectId(1667);
    const temperatureApp = datanestApi.getGatherApp('Temperature Readings');
    await temperatureApp.getGatherItems().catch(console.error);
    console.log((await temperatureApp.createGatherItems([
        {
            'title': 'Test',
            'Lounge': {
                'Timestamp': datanestApi.getTimestamp(),
                'Temperature': Math.round(Math.random() * 30),
            }
        }
    ]).catch(console.error)).items[0]);
    console.log((await temperatureApp.deleteGatherItems(['Test'], { allowMultiple: true }).catch(console.error)));
})();