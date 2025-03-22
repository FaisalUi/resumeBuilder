import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePDF } from 'react-to-pdf';
import Template1 from './Template1';
import Template2 from './Template2';
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { resumeDownloadInfo } from '../../app/Reducers/common';
import Template3 from './Template3';
import Template4 from './Template4';

const ResumeTemplate = ({id}) => {
    const { information } = useSelector((state) => state.personalInfo);
    const { isLastStep } = useSelector((state) => state.commonInfo);
    const { resumeDownload } = useSelector((state) => state.commonInfo);
    const { toPDF, targetRef } = usePDF({ filename: `${information?.name}.pdf` });
    const [height, setHeight] = useState(false);
    const dispatch = useDispatch(); 

    const pdfConvert = () => {
        setHeight(true)
        toPDF();
        setHeight(false)
    }
    const contentRef = useRef(null);

    const reactToPrintFn = useReactToPrint({ contentRef, documentTitle: information?.name || 'Resume' });
    useEffect(() => { 
        if (resumeDownload) {
            reactToPrintFn();
            dispatch(resumeDownloadInfo(false)); // Resetting the state after download
        }
    }, [resumeDownload, dispatch])
    // const print = () => {
    //     reactToPrintFn()
    // }
    return (
        <>
            {/* {isLastStep && <button className='btn primary-btn position-absolute' onClick={() => pdfConvert()}>Download PDF</button> }  */}
            {/* {isLastStep && <button className='btn primary-btn position-absolute' onClick={print}>Download PDF</button>} */}
            <div className="resume-template-bg">
                <div className="resume-wrapper" ref={contentRef} >
                    <div className={`resume-height ${!height && 'height-manage'}`}>
                        {/* <Template2 /> */}
                        {id === "0" ? <Template1 /> : id === "1" ? <Template3 /> : id === "2" ? <Template4/> : ''}                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumeTemplate