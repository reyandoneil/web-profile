import {useState, useEffect} from 'react'
import './translation/i18n'
import GlobalStyle from './globalStyle'
import Navbar from './Components/Navbar/Navbar'
import Modal from './Components/Modal/Modal'
import Hero from './Components/Hero/Hero'
import Portfolio from './Components/Portofolio/Portfolio'
import Scroll from './Components/ScrollButton/ScrollButton'


function App() {
  const [navbar, setNavbar]  =useState(false)
  const [scrollTo, setScrollTo] =useState(false) 

  const changeBackgroundNavbar = () => {
    if(window.scrollY > 120){
      setNavbar(true)
    } else {
      setNavbar(false)
    };
  }

  const scrollToOrientation = () => {
    if(window.scrollY > 500){
      setScrollTo(true)
    } else {
      setScrollTo(false)
    };
  }

  window.addEventListener('scroll', changeBackgroundNavbar)
  window.addEventListener('scroll', scrollToOrientation)

    //CONNECTION STATUS
    const [statusInternet, setStatusInternet] = useState(true)
    const [modalMassage, setModalMessage] = useState([])
  
  
    useEffect(() => {
      window.ononline = (e) => {
        setStatusInternet(true);
        setModalMessage({
          status: "You are online now",
          Message: e.type
        })
      }
      window.onoffline = (e) => {
        setStatusInternet(false);
        console.log(e);
        setModalMessage({
          status: "Connection Lost",
          Message: e.type
        })
      } 
    },[statusInternet])
  return (
    <>
      <GlobalStyle/>
      <Scroll orientation={scrollTo}/>
      <Navbar active={ navbar}/>
      {statusInternet ? '' : <Modal text={modalMassage}/>}
      <Hero/>
      <Portfolio/>
    </>
  );
}

export default App;
