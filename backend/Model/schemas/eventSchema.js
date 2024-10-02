const mongoose = require('mongoose');
const { Schema } = mongoose;



const eventSchema = new Schema({
    title: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: String, required: true},
    location: {type: String, required: false},
    description: {type: String, required: false},
    color: {type: String, default: '#0000FF'},
    repeat: {
        type: String,
        enum: ['never', 'daily', 'weekly', 'monthly', 'yearly'],    //repeatability options
        default: 'never'
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],    //visibility options
        default: 'private'
    },
    invitePeople: [{ type: String }],   //array of usernames of invited people
},
{
    collection:"Events",
    timestamps: true                    //adds createdAt field
});



module.exports = mongoose.model('Event', eventSchema);
