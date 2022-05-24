
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import { useEffect, useState } from 'react';

function App() {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [reservationShow, setReservationShow] = useState(false)
  const setMobileMenuTogglerHandler = (isShowed) => {
    setMobileMenuShow(isShowed);

    
  }
  useEffect(() => {
      if(mobileMenuShow){
        document.body.style.overflow = 'hidden';

      } else {
        document.body.style.overflow = '' 
      }
  },[mobileMenuShow])

  return (
    <div className={`App ${mobileMenuShow || reservationShow ? 'disable-scroll': ''}`}>
      <Header setMobileMenuToggler = {setMobileMenuTogglerHandler} setMobileReservationToggler= {() => setReservationShow(true)} />
      <Main mobileMenuShow= {mobileMenuShow} />
      <Footer />
   
    </div>
  );
}

export default App;
