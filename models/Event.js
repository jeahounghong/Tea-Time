const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EventSchema = new Schema({
    ownerId: {
        type: ObjectId,
        required: true
    },
    courseId: {
        type: ObjectId,
        required: true 
    },
    groupId: {
        type: ObjectId,
        required: true 
    },
    public: {
        type: Boolean,
        default: true
    },
    eventTime: {
        type: Date,
        required: true
    },
    eventSize: {
        type: Number,
        required: true
    },
    users: {
        type: Array
    },
    description: {
        type: String
    }
})

module.exports = Event = mongoose.model('Event', EventSchema)