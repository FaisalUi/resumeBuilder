import React, { useState } from 'react'
import WorkDetailsComp from './WorkDetailsComp';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkExperience } from '../../app/Reducers/workExpSlice';

const WorkExperiece = ({ onPrev, onNext }) => {
    const dispatch = useDispatch();
    const { workDetails } = useSelector((state) => state.workExp);
    const [errors, setErrors] = useState({});
    const validate = () => {
        const newErrors = workDetails.map((dtls, index) => { 
            const errors = {};
            if (!dtls?.name.trim()) errors.name = "Company Name is required.";
            if (!dtls?.role.trim()){
                errors.role = "Role is required."
            } else if (/^\d+$/.test(dtls?.role)) {
                errors.role = "Numbers is not allowed in Role";
            } 
            if (!dtls?.state?.trim()) errors.state = "State is required.";
            if (!dtls?.country?.trim()) errors.country = "Country is required.";
            if (!dtls?.startDate) {
                errors.startDate = "Start date is required.";
            } else if (dtls?.startDate > dtls?.endDate) {
                errors.endDate = "End date must be greater than start date.";
                errors.startDate = "Start date must be less than end date.";
            }
            if(dtls?.workhere == false) { 
                if (!dtls?.endDate) {
                    errors.endDate = "End date is required.";
                } else if (dtls?.startDate > dtls?.endDate) {
                    errors.endDate = "End date must be greater than start date.";
                    errors.startDate = "Start date must be less than end date.";
                }
            }
            if (!dtls?.professionalSummary?.trim()) errors.professionalSummary = "Professional Summary is required.";
            return { index, errors }; // Return the index and the errors for this entry
        });

        // Filter out entries that have errors
        const filteredErrors = newErrors.filter(entry => Object.keys(entry.errors).length > 0);

        // Set the errors in a way that associates them with their respective index
        const errorMap = {};
        filteredErrors.forEach(entry => {
            errorMap[entry.index] = entry.errors;
        });

        setErrors(errorMap); // Set the errors state with the error map
        return Object.keys(errorMap).length === 0; // Return true if no errors
    };

    const addDetails = () => {
        if (validate()) {
            dispatch(addWorkExperience());
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) { 
            onNext();
        }
        // onNext(); 
        // console.log(workDetails)
    };

    return (
        <>
            <div className='work-exp-info mt-3'>
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className='mb-4'>Work Experience</h4>
                </div>
                <WorkDetailsComp errors={errors} setErrors={setErrors} />
                <div>
                    <button className='btn primary-btn py-2' onClick={addDetails}>Add More</button>
                </div>
                <div className="d-flex justify-content-end">
                    <button className='btn secondary-btn py-2 me-2' onClick={onPrev}>Previous</button>
                    <button className='btn primary-btn py-2' onClick={handleSubmit}>Next</button>
                </div>
            </div>
        </>
    )
}

export default WorkExperiece