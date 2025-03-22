import React, { useState } from 'react'

const Skill = () => {
    const [skills, setSkills] = useState(['']); // Initialize with one empty skill field
    const [error, setError] = useState('')
    const handleAddSkill = () => {
        if (skills[skills.length - 1] === '') {
            setError('Please enter a skill before adding another.'); // Set error message
        }
        else {
            setError(''); // Clear error message
            setSkills([...skills, '']); // Add a new empty skill field
        }
    };

    const handleRemoveSkill = (index) => {
        const newSkills = skills.filter((_, i) => i !== index); // Remove skill at the specified index
        setSkills(newSkills);
        setError(''); // Clear error message when removing a skill
    };

    const handleSkillChange = (index, value) => {
        const newSkills = skills.map((skill, i) => (i === index ? value : skill)); // Update skill at the specified index
        setSkills(newSkills);
        setError(''); // Clear error message when removing a skill
    }; 
    return (
        <>
            <div className="skill-information">
                <h4 className='mb-4'>Skill Information</h4>
                {skills.map((skill, index) => (
                    <div className="row" key={index}>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name={`skill-${index}`}
                                    className='form-control rounded-0'
                                    value={skill}
                                    onChange={(e) => handleSkillChange(index, e.target.value)} // Update skill on change
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <button className='btn btn-danger' onClick={() => handleRemoveSkill(index)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
                 {error && <div className="text-danger">{error}</div>} {/* Display error message */}
                <div className="row">
                    <div className="col-3">
                        <div className="form-group">
                            <button className='btn btn-primary' onClick={handleAddSkill}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill