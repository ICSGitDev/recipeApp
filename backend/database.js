const mongoose = require('mongoose');
const URI = 'mongodb+srv://root:root@clusterignacioda.nuibzzq.mongodb.net/';

mongoose.connect(URI)
.then(db => console.log('DB connected'))
.catch(err => console.log(err));

module.exports = mongoose;