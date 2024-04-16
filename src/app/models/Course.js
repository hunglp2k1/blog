const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', maxLength: 255 },
    image: { type: String, default: '', maxLength: 600 },
    description: { type: String, default: '', maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

// mongoose.model('ModelName', mySchema);
// ModelName được mongoose convert lowercase + 's': Course -> courses, DetailPage -> detail_pages
module.exports = mongoose.model('Course', Course);
