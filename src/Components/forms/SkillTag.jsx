import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";
import { addSkill, dragSkill, removeSkill, updateSkill } from '../../app/Reducers/skillsTagSlice';
import { skillSuggestion } from '../../utils/common';

const SkillTag = ({ onNext, onPrev }) => {
  const { skills } = useSelector((state) => state.skillsTag);

  const dispatch = useDispatch();
  const suggestions = skillSuggestion.map((skill) => {
    return {
      id: skill.name,
      text: skill.name,
      className: '',
    };
  });
  const [error, setError] = useState('');

  const handleAddition = (tag) => {
    dispatch(addSkill(tag));
    setError('')
  };

  const handleDelete = (index) => {
    dispatch(removeSkill(index));
  };


  const onTagUpdate = (index, value) => {
    dispatch(updateSkill({ index, value }));
  };
  const handleDrag = (tag, currPos, newPos) => {
    dispatch(dragSkill({ tag, currPos, newPos }));
  }


  // const onClearAll = () => {
  //   setTags([]);
  // };


  const handleSubmit = () => {
    if (skills.length !== 0) {
      onNext();
    }
    else {
      setError('Add Atleast one skill');
    }
  };
  return (
    <>
      <div className='skill-info mt-3'>
        <h4 className="mb-4">Skill Information</h4>
        <div className="row">
          <div className="col-md-12">
            <ReactTags
              tags={skills}
              inputFieldPosition="top"
              suggestions={suggestions}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              onTagUpdate={onTagUpdate}
              editable
              handleDrag={handleDrag}
              // clearAll
              // onClearAll={onClearAll}
              maxTags={14}
              allowAdditionFromPaste
            />
            {error && <small className="text-danger">{error}</small>}
          </div>
          <div className="col-md-12">
            <div className="d-flex justify-content-end">
            <button className='btn secondary-btn py-2 me-2' onClick={onPrev}>Previous</button>
            <button className='btn primary-btn py-2' onClick={handleSubmit}>Next</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SkillTag