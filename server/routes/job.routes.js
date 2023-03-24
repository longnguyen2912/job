
const JobController = require("../controllers/job.controller")

module.exports=(app)=>{
    app.get("/api/testing", JobController.apiTest)
    app.get("/api/Job", JobController.allJob)
    app.get("/api/Job/:id", JobController.oneJob)
    app.post("/api/Job", JobController.createJob)
    app.put("/api/Job/:id", JobController.updateJob)
    app.delete("/api/Job/:id", JobController.deleteJob)
}