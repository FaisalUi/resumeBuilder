import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../auth/firebase'; 

const useImg = () => {

    const [isUser, setIsUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsUser(user); 
            } else {
                console.log('User is signed out');
                setIsUser({});
            }
        }); 
    }, []);
    return isUser
}

export default useImg