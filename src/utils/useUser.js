import useToken from './useToken'

const useUser = () => {
    const isAuthenticated = useToken();
    if(isAuthenticated) {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        return userDetails
    }
  return false
}

export default useUser