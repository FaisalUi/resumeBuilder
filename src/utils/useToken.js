import { useEffect, useState } from "react";

const useToken = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Example: Check for a token in local storage
        const token = localStorage.getItem('userToken'); 
        setIsAuthenticated(!!token); // Set isAuthenticated to true if token exists, false otherwise.
   
      } catch (error) {
        console.error("Error checking authentication:", error);
      } 
    };
 
    checkAuth();
  }, []); 

  return { isAuthenticated, setIsAuthenticated, loading, setLoading };
}

export default useToken