import React, { useEffect } from 'react'
import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Template4 = () => {
    const { skills } = useSelector((state) => state.skillsTag);
    const { information } = useSelector((state) => state.personalInfo);
    const { professional } = useSelector((state) => state.personalInfo);
    const { workDetails } = useSelector((state) => state.workExp);
    const { qualificationDetails } = useSelector((state) => state.qualificationInfo);
    const { resumImgSrc } = useSelector((state) => state.commonInfo);
    const { projects } = useSelector((state) => state.projectList);
    const [initalLetter, setInitalLetter] = useState([])


    return (
        <>
            <div className="template4-layout">
                <div className="template4-header">
                    <div className="template4-flex mb-3">
                        <div className="template4-name">
                            <h3 className='mb-0 temp4-heading'>Amelia Miller</h3>
                            <p className="template4-primary-clr template4-designation">
                                Senior software engineer
                            </p>
                            <ul className='list-unstyled temlate4-details'>
                                <li>
                                    <span className="material-symbols-outlined template4-primary-clr">
                                        mail
                                    </span>
                                    Email
                                </li>
                                <li>
                                    <span className="material-symbols-outlined template4-primary-clr">
                                        location_on
                                    </span>
                                    Address
                                </li>
                                <li>
                                    <span className="material-symbols-outlined template4-primary-clr">
                                        call
                                    </span>
                                    Number
                                </li>
                            </ul>
                        </div>
                        <div className="template-img">
                            <img className='mb-0' src={'https://cdn.enhancv.com/images/648/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy9ZeXd6OVBpQWhBa29zVGlFN0F3ZnZOUHlQbk9zOGJTOHpETlA2cVF2L2ltYWdlLnBuZw~~.png'} alt="" />
                        </div>
                    </div>
                </div>
                <div className="temp4-body">
                    <div className="template4-sections">
                        <h4 className='temp4-heading'>Summary</h4>
                        <p className='temp4-muted'>
                            Frontend Developer with over 3.5 years of experience specializing in React.js.
                            Skilled in building responsive and high-performance web applications, utilizing
                            React to create dynamic user interfaces. Procient in Redux Toolkit for
                            eective state management, ensuring seamless data ow and enhanced
                            application performance. Proven ability to collaborate with design and
                            development teams to deliver user-friendly solutions that align with business
                            objectives. Commied to continuous learning and staying updated with the
                            latest industry trends to drive innovation and improve user experiences.
                        </p>
                    </div>
                    <div className="template4-sections">
                        <h4 className='temp4-heading'>Skills</h4>
                        <ul className="temp4-list list-unstyled mt-3">
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="template4-sections">
                        <h4 className='temp4-heading mb-3'>Experience</h4>
                        <div className="temp4-exp">
                            <div className="temp4-left-bar">
                                <div className="temp-left-list">
                                    <p className='mb-0'><strong>2019 - 2020</strong></p>
                                    <span className='temp4-muted'>New Delhi, India</span>
                                </div>
                            </div>
                            <div className="temp4-right-bar">
                                <div className="mb-3">
                                    <p className='mb-0 exp4-designaton'>Senior IT Manager</p>
                                    <span className='template4-primary-clr temp4-comp'>Chetu</span>
                                </div>

                            </div>
                        </div>
                        <div className="temp4-exp">
                            <div className="temp4-left-bar">
                                <div className="temp-left-list">
                                    <p className='mb-0'><strong>2019 - 2020</strong></p>
                                    <span className='temp4-muted'>New Delhi, India</span>
                                </div>
                            </div>
                            <div className="temp4-right-bar">
                                <div className="mb-3">
                                    <p className='mb-0 exp4-designaton'>Senior IT Manager</p>
                                    <span className='template4-primary-clr temp4-comp'>Chetu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="template4-sections">
                        <h4 className='temp4-heading mb-3'>Education</h4>
                        <div className="temp4-exp">
                            <div className="temp4-left-bar">
                                <div className="temp-left-list">
                                    <p className='mb-0'><strong>2019 - 2020</strong></p>
                                    <span className='temp4-muted'>New Delhi, India</span>
                                </div>
                            </div>
                            <div className="temp4-right-bar">
                                <div className="mb-3">
                                    <p className='mb-0 exp4-designaton'>Senior IT Manager</p>
                                    <span className='template4-primary-clr temp4-comp'>Chetu</span>
                                </div> 
                            </div>
                        </div> 
                    </div>
                    <div className="template4-sections">
                        <h4 className='temp4-heading'>Skills</h4>
                        <ul className="temp4-list list-unstyled mt-3">
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template4