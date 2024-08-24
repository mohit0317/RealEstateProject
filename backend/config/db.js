const mongoose = require('mongoose');

const connection = () => {
    try {
        mongoose.connect(process.env.MongoDb_URL).then(() => {
            console.log('Mongodb connected');
        }).catch(() => {
            console.log('Error');
        })
    } catch (error) {

    }
}
module.exports = connection;