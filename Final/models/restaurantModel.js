const mongoose = require('mongoose');
const restaurantSchema = new mongoose.Schema({
    id: Number,
name: String,
imageURL: String,
type: String
});
const Finals = mongoose.model('Finals',restaurantSchema);
module.exports = Finals;