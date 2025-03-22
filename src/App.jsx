import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './Template.css'
import Routing from './Routing/Routing';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useImg from './utils/useImg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userImgInfo } from './app/Reducers/common';

const App = () => {
  const isUser = useImg();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isUser) {
      localStorage.removeItem('userToken')
      localStorage.removeItem('userDetails');
    }
  }, [isUser])

  useEffect(() => {
    const userImg = localStorage.getItem('userImg');
    if (userImg) {
      dispatch(userImgInfo(userImg));
    } 
  }, []);
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  )
}

export default App
