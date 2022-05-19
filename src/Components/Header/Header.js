import React, { useState,useEffect,useCallback } from 'react'
import './Header.modules.css'
import logo from './../../assets/images/Logo.png';
import mobileLogo from './../../assets/images/rose-logo.png'
import mobileMenuIcon from './../../assets/images/menu-icon.png';
export default function Header({setMobileMenuToggler}) {
  const [isMobile,setIsMobile] = useState(false)
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

  const handleResize =  useCallback(() => {
      if(window.innerWidth <= 769 &&  !isMobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false)
      }
    },[isMobile])
  
   
  
    useEffect(() => {
      
        if(window.innerWidth <= 769){
          setIsMobile(true)
        }
        window.addEventListener('resize',handleResize)
      return () => {
        window.removeEventListener('resize',handleResize)
      }
    }, [handleResize])
    const handleMenuClick = (isMobileShowed) => {
      setToggleMobileMenu(isMobileShowed);
      setMobileMenuToggler(isMobileShowed);
    }
  return (
    <header>
        <figure className={`logo-box ${toggleMobileMenu && "mobile-logo" }`}>
            <img src= {isMobile ? mobileLogo : logo} alt="white rose"/>
        </figure>
        <nav>
          {!isMobile && (
            <>
              <div className="dropdown link-item">
              <button className="dropdown-button">MEET US</button>
              <div className="dropdown-content">
                  <a href="#">A family business</a>
                  <a href="#">The good old way</a>
                  <a href="#">How to reach</a>
                  <a href="#">Contact</a>
                </div>

          </div>
          <div className='link-item'>
              <a href="#">SLEEP</a>
          </div>
          <div  className='link-item'>
              <a href="#">EAT</a>
          </div>
          <div  className='link-item'>
              <a href="#">SEE</a>
          </div>
          <div  className='link-item'>
              <a href="#">TO DO</a>
          </div>
          <div className= "diagonal-line-container ml-0 ">
              <hr />
          </div>
          <div className="link-item ml-0">
              <a href="#">ASK FOR RESERVATION</a>
          </div>
          </>
          )}
          {isMobile && !toggleMobileMenu && (
            <>
              

            
          <div className='link-item'>
              <a href="#" onClick= {() => handleMenuClick(true)}>MENU</a>
          </div>
          <div className= "diagonal-line-container ml-0 ">
              <hr />
          </div>
          
          <div className="link-item ml-0">
              <a href="#">RESERVATION</a>
          </div>
          </>
          ) }
            <div className={`mobile-menu ${toggleMobileMenu && 'show-menu'}`}>
              <img src= {mobileMenuIcon} alt="menu-icon" onClick= {() => handleMenuClick(false) } />
              <nav>
              <div className="dropdown link-item">
              <button className="dropdown-button">MEET US</button>
              <div className="dropdown-content">
                  <a href="#">A family business</a>
                  <a href="#">The good old way</a>
                  <a href="#">How to reach</a>
                  <a href="#">Contact</a>
                </div>

          </div>
          <div className='link-item'>
              <a href="#">SLEEP</a>
          </div>
          <div  className='link-item'>
              <a href="#">EAT</a>
          </div>
          <div  className='link-item'>
              <a href="#">SEE</a>
          </div>
              </nav>

            </div>
        </nav>
    </header>
  )
}
