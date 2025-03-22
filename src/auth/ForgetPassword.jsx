import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'; 
import toast, { Toaster } from 'react-hot-toast'; 
import { auth } from './firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { imageConst } from '../constraints';

const ForgetPassword = () => {
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
      const navigate = useNavigate();

    const handleChange = (e) => {
        const { value } = e?.target
        setEmail(value)
    }

    const validate = () => {
        let validationErrors = {};

        if (!email) {
            validationErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = "Email address is invalid.";
        } 
        return validationErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
        } else {
            setErrors({}); 
            try {
                await sendPasswordResetEmail(auth, email);
                toast.success('Password reset link send to your Email');
                setLoading(false);
                setTimeout(() => {
                  navigate('/landing')
                }, 1000);
            } catch (error) {
                console.log(error);
                toast.error(error?.code.split("/")[1].split('-').join(" "))
                setLoading(true);
            }
        }
    }


    return (
        <>
            <div className="login-wrapper my-5 pt-sm-5">
                <div className="login-card">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5">
                                <div className="login-form">
                                    <div className="logo text-center">
                                     <img src={imageConst?.logoimg} alt="logo" /> 
                                    </div>
                                    <div className="login-heading">
                                        <h4>Forget Password</h4>
                                        <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="card border-0">
                                            <div className="card-body">
                                                <div className="p-4">
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className='form-label'>Email</Form.Label>
                                                        <div className='mb-5'>
                                                            <div className="bg-soft-light rounded-3 input-group mb-1">
                                                                <span className="input-group-text text-muted" id="basic-addon3">
                                                                    <span className="material-symbols-outlined">
                                                                        person
                                                                    </span>
                                                                </span>
                                                                <Form.Control type="text" placeholder="Enter email" name='email' onChange={(e) => handleChange(e)} />
                                                            </div>

                                                            {errors.email && <span className="error text-danger">{errors.email}</span>}
                                                        </div>
                                                    </Form.Group>
                                                    {
                                                        loading ?

                                                            <Button variant="primary" type="submit" disabled className="btn primary-btn d-block w-100 mt-4">Loading...</Button>
                                                            :
                                                            <Button variant="primary" type="submit" className="btn primary-btn d-block w-100 mt-4">Submit</Button>
                                                    }
                                                    <div className="mt-5 text-center">
                                                        <p>Back to <Link to="/" className="font-weight-medium primary-text"> Login </Link> </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword