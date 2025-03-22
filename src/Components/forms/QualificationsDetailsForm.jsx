import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeQualification, updateQualification } from '../../app/Reducers/qualificationInfo';
import { Form } from 'react-bootstrap';
const QualificationsDetailsForm = ({ errors, setErrors, disableDate }) => {
    const dispatch = useDispatch(); 
    const { qualificationDetails } = useSelector((state) => state.qualificationInfo);
 
    const handleChange = (event, index) => {
        const { name, value, checked } = event?.target || {};

        const data = {
            index,
            name: name, // Use quilName if it exists, otherwise use name
            value: value, // Use event if quilName exists, otherwise use value 
            checked: checked ? checked : false
        };

        setErrors({
            ...errors,
            [index]: {
                ...errors[index],
                [name]: ''
            }
        });

        dispatch(updateQualification(data));
    }
    const removeQual = (index) => {
        dispatch(removeQualification(index));
    };


    return (
        <>
            {qualificationDetails?.map((dtls, index) => {
                // const{key, title} = worklabel[index];
                return (
                    <div key={index} className={`${index > 0 ? 'row border-top py-4 mt-4' : ''}`}>
                        <div className={`row mb-4 ${index > 0 ? 'other-fields col-md-11' : ''}`}>
                            <div className="col-md-12">
                                {index == 1 && <h4 className='mb-4'>Other Qualifications</h4>}
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="schoolName">School Name</label>
                                    <input type="text" name="name" id="schoolName" className="form-control rounded-0" value={dtls.name} onChange={(e) => handleChange(e, index)} />
                                    {errors[index]?.name && <small className="text-danger">{errors[index]?.name}</small>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="degree">Degree</label>
                                    <input type="text" name="degree" id="degree" className="form-control rounded-0" value={dtls.degree} onChange={(e) => handleChange(e, index)} />
                                    {errors[index]?.degree && <small className="text-danger">{errors[index]?.degree}</small>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <input type="text" name="state" id="state" className="form-control rounded-0" value={dtls.state} onChange={(e) => handleChange(e, index)} />
                                    {errors[index]?.state && <small className="text-danger">{errors[index]?.state}</small>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" id="country" className="form-control rounded-0" value={dtls.country} onChange={(e) => handleChange(e, index)} />
                                    {errors[index]?.country && <small className="text-danger">{errors[index]?.country}</small>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="startDate">Start Date</label>
                                    <input type="date" name="startDate" id="startDate" className="form-control rounded-0" value={dtls.startDate} max={disableDate && disableDate}  onChange={(e) => handleChange(e, index)} />
                                    {errors[index]?.startDate && <small className="text-danger">{errors[index]?.startDate}</small>}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="endDate">End Date</label>
                                    <input type="date" name="endDate" id="endDate" className="form-control rounded-0" disabled={dtls?.currentlyStudy && true} max={disableDate && disableDate} value={dtls.endDate} onChange={(e) => handleChange(e, index)} />
                                    {errors[index]?.endDate && <small className="text-danger">{errors[index]?.endDate}</small>}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor=""> </label>
                                    <Form.Check // prettier-ignore
                                        type="switch"
                                        id={'currentlyStudy_' + index}
                                        name='currentlyStudy'
                                        label="Still enrolled"
                                        checked={dtls?.currentlyStudy ? true : false}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                </div>
                            </div>
                        </div>
                        {index > 0 &&
                            <div className='col-md-1'>
                                <button className='btn btn-outline-danger d-flex align-items-center' onClick={() => removeQual(index)} >
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
                        }
                    </div>
                )
            })}
        </>
    )
}

export default QualificationsDetailsForm