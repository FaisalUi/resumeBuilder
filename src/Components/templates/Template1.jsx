import React from 'react'
import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Template1 = () => {
    const { skills } = useSelector((state) => state.skillsTag);
    const { information } = useSelector((state) => state.personalInfo);
    const { professional } = useSelector((state) => state.personalInfo);
    const { workDetails } = useSelector((state) => state.workExp);
    const { qualificationDetails } = useSelector((state) => state.qualificationInfo);
    const { resumImgSrc } = useSelector((state) => state.commonInfo);
    const { projects } = useSelector((state) => state.projectList);


    // function calculateDateDifference(startDate, endDate) {
    //     const start = new Date(startDate);
    //     const end = new Date(endDate);

    //     let years = end.getFullYear() - start.getFullYear();
    //     let months = end.getMonth() - start.getMonth();
    //     let days = end.getDate() - start.getDate();

    //     // Adjust for negative days
    //     if (days < 0) {
    //         months--;
    //         days += new Date(end.getFullYear(), end.getMonth(), 0).getDate(); // Get last day of the previous month
    //     }

    //     // Adjust for negative months
    //     if (months < 0) {
    //         years--;
    //         months += 12;
    //     }

    //     return { years, months, days };
    // }





    return (
        <>
            <div className='template-width template1'>
                <div className='template1-left'>
                    <div className='template1-section'>
                        <div className='template-img'>
                            {resumImgSrc !== "" && <img src={resumImgSrc} alt="" />}
                        </div>
                        <h1 className='template1-name'>
                            {information?.name ? information?.name : "Name"}
                        </h1>
                        <p className='template1-role'>{information?.designation ? information?.designation : "Designation"}</p>
                        <ul className='template1-address'>
                            <li>
                                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_0_62)">
                                        <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#77B3D4" />
                                        <g opacity="0.2">
                                            <path d="M11.375 7C11.375 4.83438 9.40625 3.0625 7 3.0625C4.59375 3.0625 2.625 4.83438 2.625 7C2.625 9.1 4.44062 10.8063 6.7375 10.9156C6.89062 11.725 7 12.25 7 12.25C7 12.25 8.09375 11.5938 9.1 10.4562C10.4562 9.77812 11.375 8.4875 11.375 7Z" fill="#231F20" />
                                        </g>
                                        <path d="M10.7188 6.3C10.7188 9.58125 7.00001 11.8125 7.00001 11.8125C7.00001 11.8125 4.94376 2.625 7.00001 2.625C9.05626 2.625 10.7188 4.26562 10.7188 6.3Z" fill="white" />
                                        <path d="M7 10.5C9.41625 10.5 11.375 8.73712 11.375 6.5625C11.375 4.38788 9.41625 2.625 7 2.625C4.58375 2.625 2.625 4.38788 2.625 6.5625C2.625 8.73712 4.58375 10.5 7 10.5Z" fill="white" />
                                        <path d="M7 7C7.24162 7 7.4375 6.80412 7.4375 6.5625C7.4375 6.32088 7.24162 6.125 7 6.125C6.75838 6.125 6.5625 6.32088 6.5625 6.5625C6.5625 6.80412 6.75838 7 7 7Z" fill="#4F5D73" />
                                        <path d="M8.75 7C8.99162 7 9.1875 6.80412 9.1875 6.5625C9.1875 6.32088 8.99162 6.125 8.75 6.125C8.50838 6.125 8.3125 6.32088 8.3125 6.5625C8.3125 6.80412 8.50838 7 8.75 7Z" fill="#4F5D73" />
                                        <path d="M5.25 7C5.49162 7 5.6875 6.80412 5.6875 6.5625C5.6875 6.32088 5.49162 6.125 5.25 6.125C5.00838 6.125 4.8125 6.32088 4.8125 6.5625C4.8125 6.80412 5.00838 7 5.25 7Z" fill="#4F5D73" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_62">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span>{information?.email ? information?.email : 'Email'}</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_0_80)">
                                        <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#88C0B0" />
                                        <g opacity="0.2">
                                            <path d="M6.29619 5.41152C6.20235 4.28542 5.02933 3.74583 4.98241 3.72237C4.91203 3.69891 4.86511 3.69891 4.81818 3.69891C3.45748 3.93352 3.2698 4.70771 3.24634 4.75463C3.24634 4.80155 3.24634 4.84847 3.24634 4.89539C4.8651 9.91592 8.21994 10.8309 9.32258 11.1359C9.41642 11.1593 9.4868 11.1828 9.53372 11.2062C9.55718 11.2062 9.58064 11.2297 9.6041 11.2297C9.65102 11.2297 9.67448 11.2297 9.72141 11.2062C9.74487 11.1828 10.5425 10.8074 10.7537 9.58748C10.7537 9.54056 10.7537 9.47018 10.7302 9.42325C10.7067 9.39979 10.2845 8.60214 9.1349 8.32061C9.06451 8.29715 8.97067 8.32062 8.90029 8.36754C8.52493 8.67252 8.03226 9.00097 7.82111 9.04789C6.36657 8.34408 5.54546 6.95991 5.522 6.70185C5.49854 6.56108 5.82698 6.04496 6.22581 5.62267C6.27273 5.57575 6.29619 5.4819 6.29619 5.41152Z" fill="#231F20" />
                                        </g>
                                        <path d="M6.29619 4.94232C6.20235 3.81622 5.02933 3.27663 4.98241 3.25317C4.91203 3.22971 4.86511 3.22971 4.81818 3.22971C3.45748 3.46431 3.2698 4.2385 3.24634 4.28542C3.24634 4.33235 3.24634 4.37927 3.24634 4.42619C4.8651 9.44671 8.21994 10.3617 9.32258 10.6667C9.41642 10.6901 9.4868 10.7136 9.53372 10.737C9.55718 10.737 9.58064 10.7605 9.6041 10.7605C9.65102 10.7605 9.67448 10.7605 9.72141 10.737C9.74487 10.7136 10.5425 10.3382 10.7537 9.11827C10.7537 9.07135 10.7537 9.00097 10.7302 8.95405C10.7067 8.93059 10.2845 8.13293 9.1349 7.85141C9.06451 7.82795 8.97067 7.85141 8.90029 7.89833C8.52493 8.20331 8.03226 8.53176 7.82111 8.57868C6.36657 7.87487 5.54546 6.4907 5.522 6.23264C5.49854 6.09188 5.82698 5.57575 6.22581 5.15346C6.27273 5.10654 6.29619 5.0127 6.29619 4.94232Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_80">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span>{information?.number ? '+91 ' + information?.number : 'Number'}</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_3)">
                                        <path d="M14 6.99998C14 3.13398 10.866 -3.05176e-05 7 -3.05176e-05C3.13401 -3.05176e-05 0 3.13398 0 6.99998C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 6.99998Z" fill="#4295CE" />
                                        <path d="M7.20001 5.12857C7.48417 5.12857 7.75669 5.24145 7.95763 5.44238C8.15856 5.64331 8.27144 5.91584 8.27144 6.2C8.27144 6.3407 8.24373 6.48002 8.18988 6.61001C8.13604 6.74001 8.05712 6.85812 7.95763 6.95761C7.85814 7.0571 7.74002 7.13602 7.61003 7.18987C7.48004 7.24371 7.34071 7.27143 7.20001 7.27143C6.91585 7.27143 6.64333 7.15854 6.4424 6.95761C6.24147 6.75668 6.12858 6.48416 6.12858 6.2C6.12858 5.91584 6.24147 5.64331 6.4424 5.44238C6.64333 5.24145 6.91585 5.12857 7.20001 5.12857ZM7.20001 3.2C7.99566 3.2 8.75872 3.51607 9.32133 4.07868C9.88394 4.64129 10.2 5.40435 10.2 6.2C10.2 8.45 7.20001 11.7714 7.20001 11.7714C7.20001 11.7714 4.20001 8.45 4.20001 6.2C4.20001 5.40435 4.51608 4.64129 5.07869 4.07868C5.6413 3.51607 6.40436 3.2 7.20001 3.2ZM7.20001 4.05714C6.63169 4.05714 6.08665 4.2829 5.68478 4.68477C5.28292 5.08663 5.05716 5.63168 5.05716 6.2C5.05716 6.62857 5.05716 7.48571 7.20001 10.3614C9.34287 7.48571 9.34287 6.62857 9.34287 6.2C9.34287 5.63168 9.1171 5.08663 8.71524 4.68477C8.31338 4.2829 7.76833 4.05714 7.20001 4.05714Z" fill="#1869A2" />
                                        <path d="M7 4.92857C7.28416 4.92857 7.55668 5.04145 7.75761 5.24239C7.95855 5.44332 8.07143 5.71584 8.07143 6C8.07143 6.1407 8.04372 6.28003 7.98987 6.41002C7.93603 6.54001 7.85711 6.65812 7.75761 6.75761C7.65812 6.85711 7.54001 6.93603 7.41002 6.98987C7.28003 7.04372 7.1407 7.07143 7 7.07143C6.71584 7.07143 6.44332 6.95855 6.24239 6.75761C6.04145 6.55668 5.92857 6.28416 5.92857 6C5.92857 5.71584 6.04145 5.44332 6.24239 5.24239C6.44332 5.04145 6.71584 4.92857 7 4.92857ZM7 3C7.79565 3 8.55871 3.31607 9.12132 3.87868C9.68393 4.44129 10 5.20435 10 6C10 8.25 7 11.5714 7 11.5714C7 11.5714 4 8.25 4 6C4 5.20435 4.31607 4.44129 4.87868 3.87868C5.44129 3.31607 6.20435 3 7 3ZM7 3.85714C6.43168 3.85714 5.88663 4.08291 5.48477 4.48477C5.08291 4.88663 4.85714 5.43168 4.85714 6C4.85714 6.42857 4.85714 7.28571 7 10.1614C9.14286 7.28571 9.14286 6.42857 9.14286 6C9.14286 5.43168 8.91709 4.88663 8.51523 4.48477C8.11337 4.08291 7.56832 3.85714 7 3.85714Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_3">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span>{information?.state ? `${information?.state}, ${information?.country}-${information?.zipCode}` : 'Address'}</span>
                            </li>
                        </ul>
                    </div>
                    <div className='template1-section'>
                        <h2 className='template1-heading'>Skills</h2>
                        <ul className='template1-skills'>
                            {skills?.map((skill, index) => (
                                <li key={index}>{skill?.text}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='template1-section'>
                        <h2 className='template1-heading'>Languages</h2>
                        <ul className='template1-skills flex-column'>
                            <li>English (Fluent)</li>
                            <li>Hindi (Native)</li>
                        </ul>
                    </div>
                    <div className='template1-section'>
                        <h2 className='template1-heading'>Qualification</h2>
                        <ul className='template1-skills flex-column gap-3'>
                            {
                                qualificationDetails?.map((dtls, index) => {
                                    return (
                                        <li key={index}><strong className='degree-name'>{dtls?.degree}</strong> &nbsp;|&nbsp; {dtls?.startDate && moment(dtls?.startDate).format("YYYY")} - {dtls?.endDate && !dtls?.currentlyStudy && moment(dtls?.endDate).format("YYYY")} {dtls?.currentlyStudy && 'Current'}<br />
                                            <em>{dtls?.name}</em>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    {projects[0] !== ''
                        &&
                        <div className='template1-section'>
                            <h2 className='template1-heading'>Project List</h2>
                            <ul className='template1-skills teamplate-project-list flex-column'>
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
                    }
                </div>
                <div className='template1-right'>
                    <div className='template1-section'>
                        <h2 className='template1-heading'>Objective</h2>
                        <p dangerouslySetInnerHTML={{ __html: professional }}></p>
                    </div>
                    <div className='template1-section'>
                        <h2 className='template1-heading'>Work Experiences</h2>
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
        </>
    )
}

export default Template1