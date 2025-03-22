import React from 'react'
import { Form } from 'react-bootstrap'
import { imageConst } from '../constraints';
import { useDispatch, useSelector } from 'react-redux';
import { userImgInfo } from '../app/Reducers/common';
import useUser from '../utils/useUser';
import toast from 'react-hot-toast';
import { auth } from '../auth/firebase';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';  

const Profile = () => {
  const dispatch = useDispatch();
  const { userImgSrc } = useSelector((state) => state.commonInfo);
  const user = useUser();

  // const updateProfilefun = async (url) => {
  //   try {
  //     await updateProfile(auth.currentUser, {
  //       photoURL: url // Replace 'username' with the variable holding the desired username
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error?.code?.split("/")[1].split('-').join(" "))
  //   }
  // }
 
  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const blob = new Blob([reader.result], { type: file.type });
        const blobUrl = URL.createObjectURL(blob);
        dispatch(userImgInfo(blobUrl));
        localStorage.setItem('userImg', blobUrl)
        // updateProfilefun(blobUrl) 
      };
      // reader.readAsDataURL(file);
      reader.readAsArrayBuffer(file);
    }
  } 
  return (
    <>
      <div className="container pt-3">
        <div className="card border-0">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="img-uploader">
                  <div className="img-preview">
                    <img src={userImgSrc ? userImgSrc : imageConst?.userImg} alt="user-img" className='img-fluid rounded-circle h-100 w-100' accept="image/png, image/jpeg" />
                    {/* <div className="btn camera-btn">
                      <input type="file" className='form-control' onChange={handleImageChange} />
                      <span className="material-symbols-outlined">
                        photo_camera
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className='form-label'>Name</Form.Label>
                      <div className='mb-3'>
                        <div className="bg-soft-light rounded-3 input-group mb-1">
                          <span className="input-group-text text-muted" id="basic-addon3">
                            <span className="material-symbols-outlined">
                              person
                            </span>
                          </span>
                          <Form.Control disabled type="text" placeholder="Enter name" value={user?.userName} name='name' />
                        </div>

                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className='form-label'>Email</Form.Label>
                      <div className='mb-3'>
                        <div className="bg-soft-light rounded-3 input-group mb-1">
                          <span className="input-group-text text-muted" id="basic-addon3">
                            <span className="material-symbols-outlined">
                              email
                            </span>
                          </span>
                          <Form.Control disabled type="text" placeholder="Enter email" value={user?.userEmail} name='email' />
                        </div>

                      </div>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile