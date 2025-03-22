import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lastStepInfo, resumeDownloadInfo, resumeImgInfo } from '../app/Reducers/common'
import { colours } from '../utils/common'
import Project from './forms/Project'
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const Preview = ({ onPrev }) => {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const { resumImgSrc, userImgSrc } = useSelector((state) => state.commonInfo);
    const [fileName, setFileName] = useState({})
    const [isUserImg, setIsUserImg] = useState(false)
        const params = useParams();

    useEffect(() => {
        dispatch(lastStepInfo(true))
    }, [])
    // useEffect(() => {
    //     console.log(isUserImg, 'isUserImg')
    // }, [isUserImg])
    const handlePrev = () => {
        dispatch(lastStepInfo(false))
        dispatch(resumeDownloadInfo(false))
        onPrev()
    }
    const getColor = (e) => {
        const color = e?.target?.children[0]?.innerHTML;
        document.documentElement.style.setProperty('--template1-primary', color);
        // Update print styles
        // Check if the print style already exists
        let printStyle = document.getElementById('dynamic-print-style');
        if (!printStyle) {
            printStyle = document.createElement('style');
            printStyle.id = 'dynamic-print-style';
            document.head.appendChild(printStyle);
        }
        // Update the print styles
        printStyle.innerHTML = `
        @media print {
            :root {
                --template1-primary: ${color};
            }
        }
    `;
    }
    // {"isTelephoneVerified":true,"telephone":"7060765262" "vishakha"}
    // {"isTelephoneVerified":true,"telephone":"8954253701" "yashvee"}

    const downloadResume = () => {
        dispatch(resumeDownloadInfo(true))
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const blob = new Blob([reader.result], { type: file.type });
                const blobUrl = URL.createObjectURL(blob);
                dispatch(resumeImgInfo(blobUrl));
                setFileName(event.target.files[0])
            };
            reader.readAsArrayBuffer(file);
        }
    };
    const removeResumeImg = () => {
        dispatch(resumeImgInfo(''));
        if (fileInputRef.current) {
            fileInputRef.current.value = null; // Set the input value to null
        }
    };

    const handleImg = (checked) => {
        if (checked) {
            dispatch(resumeImgInfo(userImgSrc));
            setIsUserImg(true);
        }
        else {
            dispatch(resumeImgInfo(''));
            setIsUserImg(false);
        }
        // console.log(e.target.checked)
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <h4 className='mb-4'>Preview</h4>
            </div>
            <Project />
            <div className="heading mb-4">
                <h5 className='mb-3'>Image uploader</h5>
                {/* <Form.Check // prettier-ignore
                    type="switch"
                    id='chooseProfile'
                    name='workhere'
                    checked={userImgSrc === resumImgSrc ? true : false}
                    label="Use profile image in resume"
                    onChange={(e) => handleImg(e.target.checked)}
                /> */}


                {/* <small className="my-4 d-block text-secondary">----------------------------OR---------------------------- </small> */}
                <div className="col-md-6">
                    <div className="d-flex gap-2 align-items-center mb-5">
                        <input ref={fileInputRef} type="file" className='form-control' onChange={handleImageChange} accept="image/png, image/jpeg" />
                        {resumImgSrc !== "" && <button className='btn btn-outline-danger d-flex align-items-center' onClick={removeResumeImg}>
                            <span className="material-symbols-outlined fs-5">
                                delete
                            </span>
                        </button>}

                    </div>
                </div>

            </div>
            {params?.id == "0" ? 
            <>
           
            <div className="heading">
                <h5 className=''>Customize the colour</h5>
            </div>
            <div className="color-picker d-flex gap-2">
                {
                    colours?.map((clr, index) => {
                        return (
                            <div key={index} className='circle-color' style={{ backgroundColor: clr }} onClick={(e) => getColor(e)}>
                                <span className='d-none'>{clr} </span>
                            </div>
                        )
                    })
                }
            </div>
           
            </> : ''}
            <div className="d-flex justify-content-end">
                <button className='btn secondary-btn py-2 me-2' onClick={handlePrev}>Previous</button>
                <button className='btn primary-btn py-2' onClick={downloadResume}>Download</button>
            </div>
        </>
    )
}

export default Preview