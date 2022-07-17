require('dotenv').config();
const DatanestApi = require('./datanest-api');
const datanestApi = new DatanestApi();

(async () => {
    datanestApi.setProjectId(8176);
    await datanestApi.getGatherItems('Temperature Reading');
    console.log((await datanestApi.createGatherItems('Temperature Reading', [
        {
            'title': 'Test',
            'Lounge': {
                'Timestamp': datanestApi.getTimestamp(),
                'Reading': Math.round(Math.random() * 30),
            }
        }
    ])).items[0]);
    console.log((await datanestApi.deleteGatherItems('Temperature Reading', ['Test'], { allowMultiple: true })));
})();