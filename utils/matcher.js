exports.matchSkills = (candidateSkills, jobSkills) => {
    let matchCount = candidateSkills.filter(skill => jobSkills.includes(skill)).length;
    let matchPercentage = (matchCount / jobSkills.length) * 100;
    return matchPercentage.toFixed(2);
};
