import React, { useState } from 'react'
import PersonalInfo from './forms/PersonalInfo';
import SkillTag from './forms/SkillTag';
import WorkExperiece from './forms/WorkExperiece';
import QualificationsInfo from './forms/QualificationsInfo';
import Preview from './Preview';

const steps = [
    { label: 'Personal Details', component: Step1, steps: 'Step 1', icons: 'badge' },
    { label: 'Skill Details', component: Step2, steps: 'Step 2', icons: 'checklist' },
    { label: 'Work Experience', component: Step3, steps: 'Step 3', icons: 'work' },
    { label: 'Qualification Details', component: Step4, steps: 'Step 4', icons: 'school' },
    { label: 'Preview', component: Step5, steps: 'Step 5', icons: 'preview' },
];
const FormStep = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const handlePrev = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const CurrentStepComponent = steps[currentStep].component;

    return (
        <>
            <div className="step-header">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`step position-relative mb-4 ${index === currentStep ? 'active' : index < currentStep ? 'completed' : ''}`}
                    >
                        <div className="step-icon-panel">
                            <div className="step-icon">
                                <span className="material-symbols-outlined">
                                    {index < currentStep ? 'check' : step.icons}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h5 className='mb-0'>{step.label}</h5>
                            {/* <small className="step-count text-muted">{step.steps}</small> */}
                        </div>
                    </div>
                ))}
            </div>
            <CurrentStepComponent
                onNext={handleNext}
                onPrev={handlePrev}
                isLastStep={currentStep === steps.length - 1}
            />
        </>
    )
}

function Step1({ onNext }) {
    return <PersonalInfo onNext={onNext} />
}
function Step2({ onNext, onPrev }) {
    return <SkillTag onNext={onNext} onPrev={onPrev} />
}
function Step3({ onPrev, onNext }) {
    return <WorkExperiece onNext={onNext} onPrev={onPrev} />
}
function Step4({ onPrev, onNext }) {
    return <QualificationsInfo onNext={onNext} onPrev={onPrev} />
}
function Step5({ onPrev }) {
    return <Preview onPrev={onPrev} />
}

export default FormStep