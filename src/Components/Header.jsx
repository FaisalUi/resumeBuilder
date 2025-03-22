import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { imageConst } from '../constraints';
import { NavLink, useNavigate } from 'react-router-dom';
import useUser from '../utils/useUser';
import { auth } from '../auth/firebase';
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useUser();
  const navigate = useNavigate();
  const { userImgSrc } = useSelector((state) => state.commonInfo);

  const logOut = async () => {
    try {
      toast.success('User Logout Successfully');
      await signOut(auth);
      localStorage.removeItem('userToken')
      localStorage.removeItem('userDetails');
      localStorage.removeItem('userImg');
      setTimeout(() => {
        navigate('/')
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error(error?.code.split("/")[1].split('-').join(" "))
    }
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img src={imageConst?.logoimg} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to='/landing' className='nav-link'>Resumes</NavLink>

              {/* <NavLink to='/saved' className='nav-link'>Saved</NavLink> */}
              <NavLink to='/profile' className='nav-link'>Profile</NavLink>

            </Nav>
            <Dropdown className='user-dropdown'>
              <Dropdown.Toggle id="dropdown-basic">
                <img src={userImgSrc ? userImgSrc : imageConst?.userImg} alt="" className='img-fluid rounded-circle h-100 w-100' />
                <span className='ms-2 text-dark fw-medium'>{user?.userName}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
                <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header