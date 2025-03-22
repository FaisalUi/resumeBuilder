import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { BaseURl } from '../config';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../assets/img/logo.png'
import useToken from '../utils/useToken';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { imageConst } from '../constraints';

const Login = () => {

  const initialValue = {
    email: '',
    password: '',
  }





  const [formInput, setFormInput] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
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
      // successful submission, handle the data here
      // for node js
      // try {
      //   const response = await axios.post(`${BaseURl}/login`, formInput);
      //   if (response?.data?.statusCode === 200) {
      //     const { data } = response?.data
      //     toast.success(response?.data?.message);
      //     localStorage.setItem('userToken', data?.accessToken)
      //     localStorage.setItem('userDetails', JSON.stringify(data?.userinfo));
      //     setTimeout(() => { 
      //       navigate('/landing')
      //     }, 2000);
      //     setLoading(false); 
      //   }
      //   else {
      //     toast.error(response?.data?.message);
      //     setLoading(false);
      //   }
      // } catch (error) {
      //   console.log(error);
      //   toast.error(error?.response?.data?.message)
      //   setLoading(false);
      // }

      // for firebase
      const { email, password } = formInput;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userInfo = {
          userName: user?.displayName,
          userEmail: user?.email,
        }
        toast.success('Logged in Successfully');
        localStorage.setItem('userToken', user?.accessToken)
        localStorage.setItem('userDetails', JSON.stringify(userInfo));
        setLoading(false);
        setTimeout(() => {
          navigate('/landing')
        }, 1000);
      } catch (error) {
        console.log(error);
        toast.error(error?.code.split("/")[1].split('-').join(" "))
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
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="login-form">
                  <div className="logo text-center">
                    <img src={imageConst?.logoimg} alt="logo" />
                    <button className='btn'>Count</button>
                  </div>
                  <div className="login-heading">
                    <h4>Sign in</h4>
                    <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <div className="card border-0">
                      <div className="card-body">
                        <div className="p-4">
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='form-label'>Email</Form.Label>
                            <div className='mb-3'>
                              <div className="bg-soft-light rounded-3 input-group mb-1">
                                <span className="input-group-text text-muted" id="basic-addon3">
                                  <span className="material-symbols-outlined">
                                    person
                                  </span>
                                </span>
                                <Form.Control type="text" placeholder="Enter email" name='email' onChange={handleChange} />
                              </div>

                              {errors.email && <span className="error text-danger">{errors.email}</span>}
                            </div>
                          </Form.Group>

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
                          <div className="d-flex justify-content-between">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Link to='/forget-password'>Forget Password</Link>
                          </div>
                          {
                            loading ?

                              <Button variant="primary" type="submit" disabled className="btn primary-btn d-block w-100 mt-4">Loading...</Button>
                              :
                              <Button variant="primary" type="submit" className="btn primary-btn d-block w-100 mt-4">Submit</Button>
                          }
                          <div className="mt-5 text-center">
                            <p>Don't have an account ? <Link to="/signup" className="font-weight-medium primary-text"> Signup now </Link> </p>

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

export default Login