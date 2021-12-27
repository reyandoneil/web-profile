import {useState, useEffect,} from 'react'
import './translation/i18n'
import GlobalStyle from './globalStyle'
import Navbar from './Components/Navbar/Navbar'
import Modal from './Components/Modal/Modal'
import Hero from './Components/Hero/Hero'
import Portfolio from './Components/Portofolio/Portfolio'
import Scroll from './Components/ScrollButton/ScrollButton'
import SideNavbar from './Components/SideNavbar/SideNavbar'
import Footer from './Components/Footer/Footer.js'
import PopUp from './Components/PopupModal/PopupModal'
import {useSelector} from 'react-redux'


function App() {
  const OpenPopUpReducer = useSelector((state) => state.PopupReducer.PopupStatus)
  const [isPopup, setIsPopup] = useState()
  useEffect(() => {
    setIsPopup(OpenPopUpReducer)
  }, [OpenPopUpReducer])

  const [navbar, setNavbar] = useState(false)
  const [scrollTo, setScrollTo] = useState(false) 

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
        setModalMessage({
          status: "Connection Lost",
          Message: e.type
        })
      } 
    },[statusInternet])

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  return (
    <>
      <GlobalStyle/>
      {isPopup && (<PopUp/>)}
      {isOpen && (<SideNavbar isOpen={isOpen} toggle={toggle} active={ navbar}/>) }
      <Scroll orientation={scrollTo}/>
      <Navbar active={navbar} toggle={toggle}/>
      {statusInternet ? null : <Modal text={modalMassage}/>}
      <Hero/>
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default App;
