const Resume = require('../models/Resume');
const { extractSkills } = require('../utils/skillExtractor');

exports.uploadResume = async (req, res) => {
    try {
        const file = req.file;
        const skills = await extractSkills(file.path);
        const resume = await Resume.create({ filePath: file.path, skills });
        res.status(200).json({ message: 'Resume uploaded', resume });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getResumes = async (req, res) => {
    const resumes = await Resume.find();
    res.status(200).json(resumes);
};
