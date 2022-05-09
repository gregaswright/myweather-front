import React, { Fragment, useEffect} from "react";
import Navigation from "../layout/Navigation";
import Home from "../pages/Home"
import Modal from "../UI/Modal";
import useScript from "../../hooks/useScript";


function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const toggleDialog = () => setDialogOpen(bool => !bool);
  const closeDialog = () => setDialogOpen(false);
  

  // const [scriptLoaded, setScriptLoaded] = useState(false)
  const API = process.env.REACT_APP_GOOGLE_PLACES_API

  
  const status = useScript(`https://maps.googleapis.com/maps/api/js?key=${API}&libraries=places&callback=initMap`)
  
  console.log(API)


  useEffect(() =>{
    if (status === "ready") {
    console.log("READY");
    return status
  }
}, [status])

  return (
  <>
    <Navigation toggleDialog={toggleDialog}/>
    <Home />
    <Modal open={dialogOpen} onRequestClose={closeDialog} closeOnOutsideClick/>
  </>    
  );
}

export default App;
