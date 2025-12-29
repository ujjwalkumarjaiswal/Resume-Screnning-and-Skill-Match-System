const Job = require('../models/Job');
const Resume = require('../models/Resume');
const { matchSkills } = require('../utils/matcher');

exports.addJob = async (req, res) => {
    try {
        const { title, description, skillsRequired } = req.body;
        const job = await Job.create({ title, description, skillsRequired });
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.matchResumes = async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId);
        const resumes = await Resume.find();
        const results = resumes.map(r => ({
            resumeId: r._id,
            matchPercentage: matchSkills(r.skills, job.skillsRequired)
        }));
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
