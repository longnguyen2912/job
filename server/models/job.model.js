const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minLength: [3, "title must be at least 3 characters long"]
    },
    company:{
        type: String,
        required: [true, "company is required"],
        minLength: [3, "company must be at least 3 characters long"]
    },
    salary:{
        type: Number,
        required: [true, "salary is required"],
        minLength: [1, "a dollar amount is required"]
    },
    isRemote:{
        type: Boolean,
        default: false
    },
    isApplied:{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const JobFromModel = mongoose.model('Job', JobSchema)
module.exports = JobFromModel