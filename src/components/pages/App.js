import React, {useEffect, useState} from "react";
import Navigation from "../layout/Navigation";
import Home from "../pages/Home"
import Modal from "../UI/Modal";
import useScript from "../../hooks/useScript";
import { useDispatch, useSelector } from "react-redux";
import { userDataActions, weatherDataActions } from "../../store";
import SignOrLogInForm from "../UI/Forms/SignOrLogInForm";
import useAxios from "../../hooks/useAxios";

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { res, loading, error, operation} = useAxios()

  const toggleDialog = () => setDialogOpen(bool => !bool);
  const closeDialog = () => setDialogOpen(false);
  
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  console.log(user);

  const API = process.env.REACT_APP_GOOGLE_PLACES_API

  const status = useScript(`https://maps.googleapis.com/maps/api/js?key=${API}&libraries=places`)
  
  const token = (document.cookie) ? document.cookie.split('; ') : [];
  
  const checkToken = async () => {
    operation({
      method: 'GET',
      url: '/users/login',
      data: token[0]?.slice(6),
      headers: { 'token': token[0]?.slice(6)},
      resKey: 'user'

    })
    getUserCities()
  }

  const getUserCities = () => {
    operation({
      method: 'GET',
      url: '/cities',
      headers: { 'Authorization': token[0]?.slice(6)},
      resKey: 'userCities'
  })
  console.log(res);
} 

  useEffect(() => {
    // console.log(res.user, res.userCities)
    if (res !== null) {
      if (res.user) {
        dispatch(userDataActions.currentUserData(res.user))
      } 
      else if (res.userCities) {
        dispatch(userDataActions.currentUserCitiesData(res.userCities))
      }
    }
  }, [res])
  
  useEffect(() =>{
      if (status === "ready") {
      dispatch(weatherDataActions.mountWeatherScript())
      checkToken()
    }
  }, [status])

  const clearToken = () => {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  }

  return (
  <>
    <Navigation toggleDialog={toggleDialog}/>
    <button onClick={clearToken}><h1>clear token</h1></button>
    <Home />
    <Modal open={dialogOpen} onRequestClose={closeDialog} closeOnOutsideClick>
      <h2>Sign In</h2>
      <SignOrLogInForm/>
    </Modal>
  </>    
  );

}

export default App;
