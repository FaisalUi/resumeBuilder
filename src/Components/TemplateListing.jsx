import React from 'react' 
import { Link } from 'react-router-dom'

const TemplateListing = (props) => {
    const {data} = props
    return (
        <>
            <div className="card shadow-sm border-0 template-card">
                <div className="card-img">
                    <img src={data?.img} alt="template" className='img-fluid' />
                </div>
                <div className="card-desc p-3 pb-4">
                    {/* <h5>{data?.name}</h5> */}
                    {/* <p className='text-muted'>{data?.description}</p> */}
                    {/* <button className='btn btn-primary primary-btn overlay-btn'>Choose Tempplate</button> */}
                    <Link to={`/landing/resume/${data?.id}`} className='btn btn-primary primary-btn overlay-btn'>Choose Template</Link>
                </div>
            </div>
        </>
    )
}

export default TemplateListing