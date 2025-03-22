import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BaseURl } from '../config';
import toast, { Toaster } from 'react-hot-toast';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import { imageConst } from '../constraints';
const Signup = () => {
    const initialValue = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [formInput, setFormInput] = useState(initialValue);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e?.target
        setFormInput({ ...formInput, [name]: value, });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', // Clear the error message for the current field
        }));
    }

    const validate = () => {
        let validationErrors = {};
        if (!formInput.name) {
            validationErrors.name = "Name is required.";
        } else if (formInput.name.length < 2) {
            validationErrors.name = "Name must be greater than 2 letters";
        }
        if (!formInput.email) {
            validationErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formInput.email)) {
            validationErrors.email = "Email address is invalid.";
        }
        if (!formInput.password) {
            validationErrors.password = "Password is required.";
        } else if (formInput.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters.";
        }
        if (!formInput.confirmPassword) {
            validationErrors.confirmPassword = "Confirm Password is required.";
        } else if (formInput.confirmPassword !== formInput.password) {
            validationErrors.confirmPassword = "Confirm Password should be similar to the password";
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
            // try {
            //     const response = await axios.post(`${BaseURl}/users`, formInput);
            //     if (response?.data?.status === true) {
            //         toast.success(response?.data?.message);
            //         navigate('/')
            //         // console.log(response?.data?.data?.accessToken)
            //     }
            //     else {
            //         toast.error(response?.data?.message)
            //     }
            // } catch (error) {
            //     console.log(error);
            //     toast.error(error?.response?.data?.message)
            // } 
            const { email, password, name } = formInput;
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                if (user?.displayName == null) {
                    try {
                        await updateProfile(user, {
                            displayName: name // Replace 'username' with the variable holding the desired username
                        });
                    } catch (error) {
                        console.log(error);
                        toast.error(error?.code?.split("/")[1].split('-').join(" "))
                    }
                }
                setLoading(false);
                toast.success('User Create Successfully');
                setTimeout(() => {
                    navigate('/')
                }, 1000);
                // Do something with the user object
            } catch (error) {
                console.log(error);
                toast.error(error?.code?.split("/")[1].split('-').join(" "))
                setLoading(false);
            }
        }
    }
    return (
        <>
            <div className="login-wrapper my-5 pt-sm-5">
                <div className="login-card">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-8 col-xl-6">
                                <div className="login-form">
                                    <div className="logo text-center">
                                        <img src={imageConst?.logoimg} alt="logo" />
                                    </div>
                                    <div className="login-heading">
                                        <h4>Sign up</h4>
                                        <p className="text-muted mb-4">Register yourself to join us</p>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="card border-0">
                                            <div className="card-body">
                                                <div className="p-4">
                                                    <Form.Group className="mb-3" controlId="formBasicName">
                                                        <Form.Label className='form-label'>Name</Form.Label>
                                                        <div className='mb-3'>
                                                            <div className="bg-soft-light rounded-3 input-group mb-1">
                                                                <span className="input-group-text text-muted" id="basic-addon3">
                                                                    <span className="material-symbols-outlined">
                                                                        person
                                                                    </span>
                                                                </span>
                                                                <Form.Control type="text" placeholder="Enter your full name" name='name' onChange={handleChange} />
                                                            </div>

                                                            {errors.name && <span className="error text-danger">{errors.name}</span>}
                                                        </div>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className='form-label'>Email</Form.Label>
                                                        <div className='mb-3'>
                                                            <div className="bg-soft-light rounded-3 input-group mb-1">
                                                                <span className="input-group-text text-muted" id="basic-addon3">
                                                                    <span className="material-symbols-outlined">
                                                                        email
                                                                    </span>
                                                                </span>
                                                                <Form.Control type="text" placeholder="Enter email" name='email' onChange={handleChange} />
                                                            </div>

                                                            {errors.email && <span className="error text-danger">{errors.email}</span>}
                                                        </div>
                                                    </Form.Group>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                <Form.Label className='form-label'>Password</Form.Label>
                                                                <div className='mb-3'>
                                                                    <div className="bg-soft-light rounded-3 input-group mb-1">
                                                                        <span className="input-group-text text-muted" id="basic-addon3">
                                                                            <span className="material-symbols-outlined">
                                                                                lock
                                                                            </span>
                                                                        </span>
                                                                        <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
                                                                    </div>
                                                                    {errors.password && <span className="error text-danger">{errors.password}</span>}
                                                                </div>
                                                            </Form.Group>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                                                <Form.Label className='form-label'>Confirm Password</Form.Label>
                                                                <div className='mb-3'>
                                                                    <div className="bg-soft-light rounded-3 input-group mb-1">
                                                                        <span className="input-group-text text-muted" id="basic-addon3">
                                                                            <span className="material-symbols-outlined">
                                                                                lock
                                                                            </span>
                                                                        </span>
                                                                        <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' onChange={handleChange} />
                                                                    </div>
                                                                    {errors.confirmPassword && <span className="error text-danger">{errors.confirmPassword}</span>}
                                                                </div>
                                                            </Form.Group>
                                                        </div>
                                                    </div>
                                                    {
                                                        loading ?

                                                            <Button variant="primary" type="submit" disabled className="btn primary-btn d-block w-100 mt-4">Loading...</Button>
                                                            :
                                                            <Button variant="primary" type="submit" className="btn primary-btn d-block w-100 mt-4">Submit</Button>
                                                    }
                                                    <div className="mt-5 text-center">
                                                        <p>Already have an account ? <Link to="/" className="font-weight-medium primary-text"> Login now </Link> </p>
                                                        {/* <p>© 2024 Chatvia. Crafted with <i className="mdi mdi-heart text-danger"></i> by Faisal</p> */}
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

export default Signup