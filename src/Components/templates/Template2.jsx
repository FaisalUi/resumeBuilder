import React from 'react'
import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePDF } from 'react-to-pdf';

const Template2 = () => {
    const { skills } = useSelector((state) => state.skillsTag);
    const { information } = useSelector((state) => state.personalInfo);
    const { professional } = useSelector((state) => state.personalInfo);
    const { workDetails } = useSelector((state) => state.workExp);
    return (
        <>
            <div className="custom-row">
                <div className="left-resume">
                    <div className="user-details">
                        <span className='fw-medium d-block'>{information?.email ? information?.email : 'Email'}</span>
                        <span className='fw-medium d-block'>{information?.number ? information?.number : 'Number'}</span>
                        <span className='fw-medium d-block'>{information?.state ? `${information?.state}, ${information?.country}-${information?.zipCode}` : 'Address'}</span>
                    </div>
                    <div className="skill-details mt-4">
                        <h4 className='resume-heading'>Skills</h4>
                        <ul className='list-bullets'>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill?.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="right-resume">
                    <h2 className='mb-1'>{information?.name ? information?.name : "Name"}</h2>
                    <p className='text-muted'>{information?.designation ? information?.designation : "Designation"}</p>

                    <div className="summary-details mt-4">
                        <h4 className='resume-heading'>Summary</h4>
                        <div className='text-muted' dangerouslySetInnerHTML={{ __html: professional }}></div>
                    </div>
                    <div className="exp-details mt-4">
                        <h4 className='resume-heading'>Experience</h4>
                        {
                            workDetails?.map(dtls => {

                                return (
                                    <>
                                        <h5>{dtls?.name} - <small className='text-muted fw-normal'>{dtls?.role}</small></h5>
                                        <small className='d-block text-muted'> <i>{dtls?.state ? `${dtls?.state} - ${dtls?.country}` : 'Address'}</i> </small>
                                        <small className='text-muted'>{dtls?.startDate && moment(dtls?.startDate).format("MMM YYYY")} - {dtls?.endDate && !dtls?.workhere && moment(dtls?.endDate).format("MMM YYYY")} {dtls?.workhere && 'Current'} </small>
                                        <div className='text-muted mt-3' dangerouslySetInnerHTML={{ __html: dtls?.professionalSummary }}></div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Template2