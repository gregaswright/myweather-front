import React, {useEffect, useState} from "react";
import Navigation from "../layout/Navigation";
import Home from "../pages/Home"
import Modal from "../UI/Modal";
import useScript from "../../hooks/useScript";
import { useDispatch } from "react-redux";
import { weatherDataActions } from "../../store";
import SignOrLogInForm from "../UI/Forms/SignOrLogInForm";
import useAxios from "../../hooks/useAxios";

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { res, loading, error, operation} = useAxios()

  const toggleDialog = () => setDialogOpen(bool => !bool);
  const closeDialog = () => setDialogOpen(false);
  
  const dispatch = useDispatch()
  const API = process.env.REACT_APP_GOOGLE_PLACES_API

  const status = useScript(`https://maps.googleapis.com/maps/api/js?key=${API}&libraries=places`)
  
  const checkToken = () => {
    operation({
        method: 'GET',
        url: '/users/login',
        data: {token: document.cookie}
    })
}
  useEffect(() =>{
    if (status === "ready") {
    dispatch(weatherDataActions.mountWeatherScript())
    checkToken()
    
    return status
  }
}, [status])

 
  return (
  <>
    <Navigation toggleDialog={toggleDialog}/>
    <Home />
    <Modal open={dialogOpen} onRequestClose={closeDialog} closeOnOutsideClick>
      <h2>Sign In</h2>
      <SignOrLogInForm/>
    </Modal>
  </>    
  );
}

export default App;
