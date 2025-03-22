import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, removeSkill, updateSkill } from '../../app/Reducers/skillsSlice';

const Skill = () => {
    const dispatch = useDispatch();
    const { skills, error } = useSelector((state) => state.skills);

    const handleAddSkill = () => { 
        dispatch(addSkill());
    };

    const handleRemoveSkill = (index) => {
        dispatch(removeSkill(index));
    };

    const handleSkillChange = (index, value) => {
        dispatch(updateSkill({ index, value }));
    };
    return (
        <>
            <div className='skill-info mt-3'>
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className='mb-4'>Skill Information</h4>
                    <button className='btn primary-btn py-2' onClick={handleAddSkill}>Add Skills</button>
                </div>
                {skills.map((skill, index) => (
                    <div className="row" key={index}>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name={`skill-${index}`}
                                    className='form-control rounded-0'
                                    value={skill}
                                    onChange={(e) => handleSkillChange(index, e.target.value)}
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
                {error && <div className="text-danger">{error}</div>}
            </div>
        </>
    )
}

export default Skill