require('dotenv').config();
const DatanestApi = require('./datanest-api');
const datanestApi = new DatanestApi();

(async () => {
    await datanestApi.getGatherItems(8176, 'Temperature Reading');
    console.log((await datanestApi.createGatherItems(8176, 'Temperature Reading', [
        {
            'title': 'Test',
            'Lounge': {
                'Timestamp': datanestApi.getTimestamp(),
                'Reading': Math.round(Math.random() * 30),
            }
        }
    ])).items[0]);
    console.log((await datanestApi.deleteGatherItems(8176, 'Temperature Reading', ['Test'], true)));
})();