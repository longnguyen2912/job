const Job = require("../models/job.model")

module.exports.apiTest =(req, res) =>{
    res.json({message: "Connected"})
}

module.exports.allJob = (req, res) =>{
    Job.find()
    .then(JobList => res.json(JobList))
    .catch(err=>res.status(400).json(err))
}

module.exports.oneJob = (req, res) =>{
    Job.findOne({_id: req.params.id})
    .then(oneJo => res.json(oneJo))
    .catch(err=>res.status(400).json(err))
}

module.exports.createJob = (req,res) =>{
    const newJob = req.body
    Job.create(newJob)
    .then(addedJob => res.json(addedJob))
    .catch(err=>res.status(400).json(err))
}

module.exports.updateJob = (req,res) =>{
    Job.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedJob => res.json(updatedJob))
    .catch(err=>res.status(400).json(err))
}

module.exports.deleteJob = (req,res) =>{
    Job.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err=>res.status(400).json(err))
}