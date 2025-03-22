import React, { useEffect, useState } from 'react'
import QualificationsDetailsForm from './QualificationsDetailsForm'
import { useDispatch, useSelector } from 'react-redux';
import { addQualification } from '../../app/Reducers/qualificationInfo';


const QualificationsInfo = ({ onNext, onPrev }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const { qualificationDetails } = useSelector((state) => state.qualificationInfo);
    const [disableDate, setDisableDate] = useState(Date);
    useEffect(() => {
        let dtToday = new Date();

        let month = dtToday.getMonth() + 1;
        let day = dtToday.getDate();
        let year = dtToday.getFullYear();
        if (month < 10)
            month = '0' + month.toString();
        if (day < 10)
            day = '0' + day.toString();
        const maxDate = year + '-' + month + '-' + day;
        setDisableDate(maxDate);
    }, [])
    const validate = () => {
        const newErrors = qualificationDetails.map((dtls, index) => {
            const errors = {};
            if (!dtls?.name.trim()) errors.name = "School Name is required.";
            if (!dtls?.degree.trim()) {
                errors.degree = "Degree is required."
            } else if (/^\d+$/.test(dtls?.degree)) {
                errors.degree = "Degree is not allowed in degree";
            }
            if (!dtls?.state?.trim()) errors.state = "State is required.";
            if (!dtls?.country?.trim()) errors.country = "Country is required.";
            if (!dtls?.startDate) {
                errors.startDate = "Start date is required.";
            } else if (dtls?.startDate > dtls?.endDate) {
                errors.endDate = "End date must be greater than start date.";
                errors.startDate = "Start date must be less than end date.";
            } else if (dtls?.startDate > disableDate) { 
                errors.startDate = "Start date must less than today.";
            }
            if (dtls?.currentlyStudy == false) {
                if (!dtls?.endDate) {
                    errors.endDate = "End date is required.";
                } else if (dtls?.startDate > dtls?.endDate) {
                    errors.endDate = "End date must be greater than start date.";
                    errors.startDate = "Start date must be less than end date.";
                }
            }
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
            dispatch(addQualification());
        }
    }
    const nextStep = () => {
        if (validate()) { 
            onNext();
        }
    }


    return (
        <>
            <div className='work-exp-info mt-3'>
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className='mb-4'>Qualifications Information</h4>
                </div>
                <QualificationsDetailsForm errors={errors} setErrors={setErrors} disableDate={disableDate} />
                <div>
                    <button className='btn primary-btn py-2' onClick={addDetails}>Add More</button>
                </div>
                <div className="d-flex justify-content-end">
                    <button className='btn secondary-btn py-2 me-2' onClick={onPrev}>Previous</button>
                    <button className='btn primary-btn py-2' onClick={nextStep}>Next</button>
                </div>
            </div>
        </>
    )
}

export default QualificationsInfo