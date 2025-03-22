import React, { useEffect } from 'react'
import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux'; 

const Template3 = () => {
    const { skills } = useSelector((state) => state.skillsTag);
    const { information } = useSelector((state) => state.personalInfo);
    const { professional } = useSelector((state) => state.personalInfo);
    const { workDetails } = useSelector((state) => state.workExp);
    const { qualificationDetails } = useSelector((state) => state.qualificationInfo);
    const { resumImgSrc } = useSelector((state) => state.commonInfo);
    const { projects } = useSelector((state) => state.projectList);
    const [initalLetter, setInitalLetter] = useState([])


    useEffect(() => {
        const firstLetters = information?.name?.split(" ").map(name => name.charAt(0));
        setInitalLetter(firstLetters)
    }, [information?.name])
    return (
        <>
            <div className="template3-layout">
                <div className="template3-header">
                    <span>{information?.email ? information?.email : 'Email'}</span>
                    <span className='border-inline'>{information?.number ? '+91 ' + information?.number : 'Number'}</span>
                    <span>{information?.state ? `${information?.state}, ${information?.country}-${information?.zipCode}` : 'Address'}</span>
                </div>
                <div className="template3-body">
                    <div className="template3-devider">
                        <div className="template3-details">
                            <div className="teamplate3-left d-flex justify-content-center mb-4">
                                {
                                    resumImgSrc ?
                                        <div className="template-img">
                                            <img className='mb-0' src={resumImgSrc} alt="" />
                                        </div>
                                        :
                                        <div className={`box-initial ${initalLetter.length > 1 ? 'double' : ''}`}>
                                            <span className='first-letter'> {initalLetter[0]} </span>
                                            <span className='last-letter'>{initalLetter[1]}</span>
                                        </div>
                                }
                            </div>
                            <div className="teamplate3-right">
                                <h1 className="template1-name fw-medium mb-0">
                                    {information?.name ? information?.name : "Name"}
                                </h1>
                                <p className="template1-role">{information?.designation ? information?.designation : "Designation"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="template3-devider">
                        <div className="template3-details">
                            <div className="teamplate3-left">
                                <h4 className="tmplate3-heading">Professional Summary</h4>
                            </div>
                            <div className="teamplate3-right">
                                <p dangerouslySetInnerHTML={{ __html: professional }}></p>
                            </div>
                        </div>
                    </div>
                    <div className="template3-devider">
                        <div className="template3-details">
                            <div className="teamplate3-left">
                                <h4 className="tmplate3-heading">Skills</h4>
                            </div>
                            <div className="teamplate3-right">
                                <div className="template3-skills">
                                    <ul>
                                        {skills?.map((skill, index) => (
                                            <li key={index}>{skill?.text}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="template3-devider">
                        <div className="template3-details">
                            <div className="teamplate3-left">
                                <h4 className="tmplate3-heading">Work history</h4>
                            </div>
                            <div className="teamplate3-right">
                                <div className="template3-work">
                                    {
                                        workDetails?.map((dtls, index) => {
                                            return (
                                                <div key={index} className='template1-experience'>
                                                    <div className='experience-role'>
                                                        <h3>{dtls?.role} &nbsp;|&nbsp; <span>{dtls?.name}</span></h3>
                                                        <p> {dtls?.state ? `${dtls?.state}, ${dtls?.country}` : 'Address'}  ({dtls?.startDate && moment(dtls?.startDate).format("MMM YYYY")} - {dtls?.endDate && !dtls?.workhere && moment(dtls?.endDate).format("MMM YYYY")} {dtls?.workhere && 'Current'})</p>
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{ __html: dtls?.professionalSummary }}></div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="template3-devider">
                        <div className="template3-details">
                            <div className="teamplate3-left">
                                <h4 className="tmplate3-heading">Education</h4>
                            </div>
                            <div className="teamplate3-right">
                                <div className="template3-work">

                                    {
                                        qualificationDetails?.map((dtls, index) => {
                                            return (
                                                <div className="template1-experience" key={index}><strong className='degree-name'>{dtls?.degree}</strong> &nbsp;|&nbsp; {dtls?.startDate && moment(dtls?.startDate).format("YYYY")} - {dtls?.endDate && !dtls?.currentlyStudy && moment(dtls?.endDate).format("YYYY")} {dtls?.currentlyStudy && 'Current'}<br />
                                                    <em>{dtls?.name}</em>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {projects[0] !== ''
                        &&
                        <div className="template3-devider">
                            <div className="template3-details">
                                <div className="teamplate3-left">
                                    <h4 className="tmplate3-heading">Projects</h4>
                                </div>
                                <div className="teamplate3-right">
                                    <div className="template3-project">
                                        <ul>
                                            {
                                                projects?.map((link, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <a target='_blank' href={'https://' + link}>{link}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Template3