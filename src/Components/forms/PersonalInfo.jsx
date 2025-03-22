import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo, updateprofessionalSummary } from '../../app/Reducers/personalInfo';
import ReactQuill from 'react-quill';
import useUser from '../../utils/useUser';

const PersonalInfo = ({ onNext }) => {
    const dispatch = useDispatch();
    const { information } = useSelector((state) => state.personalInfo);
    const { professional } = useSelector((state) => state.personalInfo);
    const [errors, setErrors] = useState({});
    const user = useUser();

    useEffect(() => {
        if (user) { 
            const name = 'userDetails'
            const value = user
            dispatch(updatePersonalInfo({ name, value }));
        }
    }, [])
    const handleChange = (e) => {
        const { name, value } = e?.target;
        dispatch(updatePersonalInfo({ name, value }));
        setErrors({ ...errors, [name]: '' });
    }
    const handleQuill = (e) => {
        dispatch(updateprofessionalSummary(e));
    };

    const validate = () => {
        const newErrors = {};
        if (!information?.name.trim() || !information?.name) newErrors.name = "Name is required.";
        if (!information?.designation || !information?.designation.trim()) {
            newErrors.designation = "Designation is required."
        } else if (/^\d+$/.test(information?.designation)) {
            newErrors.designation = "Numbers is not allowed in designation";
        }
        if (!information?.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(information?.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!information?.number) {
            newErrors.number = "Number is required.";
        } else if (!/^\d+$/.test(information?.number)) {
            newErrors.number = "Character is not allowed in number";
        } else if (information?.number.length < 10 || information?.number.length > 10) {
            newErrors.number = "Number should be 10 digits";
        }
        if (!information?.zipCode || !information?.zipCode.trim()) {
            newErrors.zipCode = "Zip Code is required."
        } else if (!/^\d+$/.test(information?.zipCode)) {
            newErrors.zipCode = "Character is not allowed in zip code";
        }
        if (!information?.address || !information?.address.trim()) newErrors.address = "Address is required.";
        if (!information?.state || !information?.state.trim()) newErrors.state = "State is required.";
        if (!information?.city || !information?.city.trim()) newErrors.city = "City is required.";
        if (!information?.country || !information?.country.trim()) newErrors.country = "Country is required.";
        if (!professional || !professional.trim()) newErrors.professional = "Professional is required.";
        // Add more validations as needed  
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onNext();
            // Proceed with form submission or further actions
        }
    };


    return (
        <>
            <div className='personal-info mt-3'>
                <h4 className='mb-4'>Personal Information</h4>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={information?.name && information?.name} name='name' className='form-control rounded-0' onChange={(e) => handleChange(e)} />
                            {errors.name && <small className="text-danger">{errors.name}</small>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" name='designation' value={information?.designation && information?.designation} className='form-control rounded-0' onChange={(e) => handleChange(e)} />
                            {errors.designation && <small className="text-danger">{errors.designation}</small>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' value={information?.email && information?.email} className='form-control rounded-0' onChange={(e) => handleChange(e)} />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="number">Number</label>
                            <input type="text" name='number' value={information?.number && information?.number} className='form-control rounded-0' maxLength={10} onChange={(e) => handleChange(e)} />
                            {errors.number && <small className="text-danger">{errors.number}</small>}
                        </div>
                    </div>

                </div>
                <h4 className='mb-4'>Address Information</h4>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" name='address' value={information?.address && information?.address} className='form-control rounded-0' onChange={(e) => handleChange(e)} />
                            {errors.address && <small className="text-danger">{errors.address}</small>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input type="text" name='state' value={information?.state && information?.state} className='form-control rounded-0' onChange={(e) => handleChange(e)} />
                            {errors.state && <small className="text-danger">{errors.state}</small>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" name='city' value={information?.city && information?.city} className='form-control rounded-0' onChange={(e) => handleChange(e)} />
                            {errors.city && <small className="text-danger">{errors.city}</small>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input type="text" name='country' value={information?.country && information?.country} className='form-control rounded-0' onChange={(e) => handleChange(e)} />
                            {errors.country && <small className="text-danger">{errors.country}</small>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="zipCode">Zip Code</label>
                            <input type="text" name='zipCode' value={information?.zipCode && information?.zipCode} className='form-control rounded-0' onChange={(e) => handleChange(e)} />
                            {errors.zipCode && <small className="text-danger">{errors.zipCode}</small>}
                        </div>
                    </div>
                </div>

                <h4 className='mb-4'>Professional Summary</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <ReactQuill theme="snow" name="professionalSummary" value={professional && professional} onChange={handleQuill} height="300" />
                            {errors.professional && <small className="text-danger">{errors.professional}</small>}

                        </div>
                    </div>
                </div>
                <div className="text-end">
                    <button className='btn primary-btn py-2' onClick={handleSubmit}>Next</button>

                </div>
            </div>
        </>
    )
}

export default PersonalInfo