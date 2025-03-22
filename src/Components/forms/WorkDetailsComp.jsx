import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkExperience, removeWorkExperience, updateWorkExperience } from '../../app/Reducers/workExpSlice';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';

const WorkDetailsComp = ({ errors, setErrors }) => {
    const dispatch = useDispatch();
    const [disableDate, setDisableDate] = useState(Date)
    const { workDetails } = useSelector((state) => state.workExp);

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
    // const worklabel = [
    //     {
    //         title: 'Company Name', key: 'name'
    //     },
    //     {
    //         title: 'Role', key: 'role'
    //     },
    //     {
    //         title: 'State', key: 'state'
    //     },
    //     {
    //         title: 'Country', key: 'country'
    //     },
    //     {
    //         title: 'Start Date', key: 'startDate'
    //     },
    //     {
    //         title: 'End Date', key: 'endDate'
    //     }, 
    // ]

    const handleChange = (event, index, quilName) => {
        const { name, value, checked } = event?.target || {}; // Destructure safely 
        const data = {
            index,
            name: quilName || name, // Use quilName if it exists, otherwise use name
            value: quilName ? event : value, // Use event if quilName exists, otherwise use value
            checked: checked ? checked : false
        };
        setErrors({
            ...errors,
            [index]: {
                ...errors[index],
                [name]: ''
            }
        });

        dispatch(updateWorkExperience(data));
    }

    const removeWorkExp = (index) => {
        dispatch(removeWorkExperience(index));
    };


    return (
        <>
            <div className="">
                {workDetails?.map((dtls, index) => {
                    // const{key, title} = worklabel[index];
                    return (
                        <div key={index} className={`${index > 0 ? 'row border-top py-4 mt-4' : ''}`}>
                            <div key={index} className={`row ${index > 0 ? 'col-md-11' : ''}`}>
                                <div className="col-md-12">
                                    {index == 1 && <h4 className='mb-4'>More Experiences</h4>}
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="companyName">Company Name</label>
                                        <input type="text" name="name" id="companyName" className="form-control rounded-0" value={dtls.name} onChange={(e) => handleChange(e, index)} />
                                        {errors[index]?.name && <small className="text-danger">{errors[index]?.name}</small>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="role">Role</label>
                                        <input type="text" name="role" id="role" className="form-control rounded-0" value={dtls.role} onChange={(e) => handleChange(e, index)} />
                                        {errors[index]?.role && <small className="text-danger">{errors[index]?.role}</small>}
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
                                        <input type="date" name="startDate" id="startDate" className="form-control rounded-0" value={dtls.startDate}  max={disableDate && disableDate} onChange={(e) => handleChange(e, index)} />
                                        {errors[index]?.startDate && <small className="text-danger">{errors[index]?.startDate}</small>}
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className="form-group">
                                        <label htmlFor="endDate">End Date</label>
                                        <input type="date" name="endDate" id="endDate" className="form-control rounded-0" disabled={dtls?.workhere && true} max={disableDate && disableDate} value={dtls.endDate} onChange={(e) => handleChange(e, index)} />
                                        {errors[index]?.endDate && <small className="text-danger">{errors[index]?.endDate}</small>}
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor=""> </label>
                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id={'custom-switch_' + index}
                                            name='workhere'
                                            label="Currently Work here"
                                            checked={dtls?.workhere ? true : false}
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Work Summary</label>
                                        <ReactQuill theme="snow" value={dtls.professionalSummary} onChange={(e) => handleChange(e, index, "professionalSummary")} height="300" />
                                        {errors[index]?.professionalSummary && <small className="text-danger">{errors[index]?.professionalSummary}</small>}
                                    </div>
                                </div>
                            </div>
                            {index > 0 &&
                                <div className='col-md-1'>
                                    <button className='btn btn-outline-danger d-flex align-items-center' onClick={() => removeWorkExp(index)} >
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>

                                </div>
                            }
                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default WorkDetailsComp