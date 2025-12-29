const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    filePath: { type: String, required: true },
    skills: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', ResumeSchema);
