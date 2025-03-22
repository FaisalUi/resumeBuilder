import React, { useState } from 'react'
import ResumeTemplate from '../Components/templates/ResumeTemplate'
import FormStep from '../Components/FormStep'
import { useParams } from 'react-router-dom';

const Resume = () => {
  const params = useParams();
 
  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline">
        <div className="resume-step">
          <FormStep />
        </div>
        <ResumeTemplate id={params?.id}  />
      </div>
    </>
  )
}

export default Resume