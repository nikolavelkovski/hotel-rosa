import React, { useState,useEffect,useCallback } from 'react'
import './Header.modules.css'
import logo from './../../assets/images/Logo.png';
import mobileLogo from './../../assets/images/rose-logo.png'
import mobileMenuIcon from './../../assets/images/menu-icon.png';
import selectArrow from './../../assets/images/selectArrow.png'
import { Col, Container, Row } from 'reactstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default function Header({setMobileMenuToggler,setMobileReservationToggler}) {
  const [isMobile,setIsMobile] = useState(false)
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
  const [toggleReservation, setToggleReservation] = useState(false)
  const [firstDatepickerDate, setFirstDatepickerDate] = useState(null);
  const [secondDatepickerDate, setSecondDatepickerDate] = useState(null);
  const [isOpenFirstSelect, setIsOpenFirstSelect] = useState(false)
  const [firstSelectValue, setFirstSelectValue] = useState(null);
  const [isOpenSecondSelect, setIsOpenSecondSelect] = useState(false)
  const [secondSelectValue, setSecondSelectValue] = useState(null);

  const handleResize =  useCallback(() => {
      if(window.innerWidth <= 769 &&  !isMobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false)
      }
    },[isMobile])
  
    useEffect(() => {
      if(toggleReservation){
        document.body.style.overflow = 'hidden';

      } else {
        document.body.style.overflow = '' 
      }
  },[toggleReservation])
  
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
        <figure className={`logo-box ${toggleMobileMenu ? "mobile-logo":'' }`}>
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
              <a href="#reservation-section">ASK FOR RESERVATION</a>
          </div>
          </>
          )}


          {isMobile && !toggleReservation && !toggleMobileMenu && (
            <>
              

            
          <div className='link-item'>
              <a href="#" onClick= {() => handleMenuClick(true)}>MENU</a>
          </div>
          <div className= "diagonal-line-container ml-0 ">
              <hr />
          </div>
          
          <div className="link-item ml-0">
              <a href="#" onClick={() => {setToggleReservation(true); setMobileReservationToggler(true)}}>RESERVATION</a>
          </div>
          </>
          ) }
            <div className={`mobile-menu ${toggleMobileMenu ? 'show-menu' :''}`}>
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
        {isMobile  && !toggleMobileMenu && (
            <div className={`reservation-mobile-section ${toggleReservation ? 'show-reservations' :''}`}>
                <img src= {mobileMenuIcon} alt="menu-icon" onClick= {() => {setToggleReservation(false); setMobileReservationToggler(false)} } />
                <section className='reservation-section' id="reservation-section">
            <Container>
                <h2>ASK FOR RESERVATION</h2>
                <p>AND FEEL FREE TO DROP US A LINE ABOUT EVERYTHING YOU NEED TO KNOW</p>
                <form className='info-form'>
                    <Row>
                        <Col xs="12" sm="12">
                           <div className='form-input mb-4'>
                               <label htmlFor='name'>Name:</label>
                               <input id="name" type="text" />
                           </div>
                        </Col>
                        <Col xs="12" sm="12">
                           <div className='form-input mb-4'>
                               <label htmlFor='email'>Email:</label>
                              
                               <input id="email" type="email" />
                           </div>
                        </Col>
                        <Col xs="6" sm="6">
                           <div className='form-input date-input '>
                               <label htmlFor='date-from'>From:</label>
                               <DatePicker dateFormat="dd/MM/yyyy" dateFormatCalendar='MMMM' useWeekdaysShort={true} selected={firstDatepickerDate} onChange={(date) => setFirstDatepickerDate(date)} />
                           </div>
                        </Col>
                        <Col xs="6" sm="6">
                           <div className='form-input date-input'>
                               <label htmlFor='date-to'>To:</label>
                               <DatePicker dateFormat="dd/MM/yyyy" dateFormatCalendar='MMMM' useWeekdaysShort={true} selected={secondDatepickerDate} onChange={(date) => setSecondDatepickerDate(date)} />
                           </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                    <Col xs="6" sm="6">
                           <div className='form-input form-select-boxes' >
                               <label htmlFor='name'>Adults: <span>{firstSelectValue}</span></label>
                               <img src= {selectArrow}  alt="down facing select arrow" onClick={()=> setIsOpenFirstSelect(true)}/>
                               {isOpenFirstSelect && (
                                      <div className="select-menu-display">
                                        <div className={`number ${firstSelectValue === 1 && 'selected'}` } onClick={(e) => {setFirstSelectValue(Number(e.target.textContent));setIsOpenFirstSelect(false) }}>1</div>
                                        <div className={`number ${firstSelectValue === 2 && 'selected'}` } onClick={(e) => {setFirstSelectValue(Number(e.target.textContent));setIsOpenFirstSelect(false) }}>2</div>
                                        <div className={`number ${firstSelectValue === 3 && 'selected'}` } onClick={(e) => {setFirstSelectValue(Number(e.target.textContent));setIsOpenFirstSelect(false) }}>3</div>
                                        <div className={`number ${firstSelectValue === 4 && 'selected'}` } onClick={(e) => {setFirstSelectValue(Number(e.target.textContent));setIsOpenFirstSelect(false) }}>4</div>
                                      </div>
                                  
                               )}
                               </div>
                                
                           </Col>
                           <Col xs="6" sm="6">
                           <div className='form-input form-select-boxes mb-4' >
                               <label htmlFor='name'>Children: <span>{secondSelectValue}</span></label>
                               <img src= {selectArrow}  alt="down facing select arrow" onClick={()=> setIsOpenSecondSelect(true)}/>
                               {isOpenSecondSelect && (
                                      <div className="select-menu-display">
                                        <div className={`number ${secondSelectValue === 1 && 'selected'}` } onClick={(e) => {setSecondSelectValue(Number(e.target.textContent));setIsOpenSecondSelect(false) }}>1</div>
                                        <div className={`number ${secondSelectValue === 2 && 'selected'}` } onClick={(e) => {setSecondSelectValue(Number(e.target.textContent));setIsOpenSecondSelect(false) }}>2</div>
                                        <div className={`number ${secondSelectValue === 3 && 'selected'}` } onClick={(e) => {setSecondSelectValue(Number(e.target.textContent));setIsOpenSecondSelect(false) }}>3</div>
                                        <div className={`number ${secondSelectValue === 4 && 'selected'}` } onClick={(e) => {setSecondSelectValue(Number(e.target.textContent));setIsOpenSecondSelect(false) }}>4</div>
                                      </div>
                                  
                               )}
                               </div>
                           </Col>
                           <Col xs="12" sm="12">

                           <div className='form-input text-field'>
                               <label htmlFor='text'>Ask everything:</label>
                               <input id="text" type="text" maxLength="53" />
                           </div>
                           
                            
                        </Col>
                        <Col xs="12" sm="12">
                        <div className='form-input w-100 mt-4'>
                               <input  type="text" />
                           </div>
                           </Col>
                           <Col xs="12" sm="12">
                           <div className='form-input w-100 mt-4'>
                               <input  type="text" />
                           </div>
                           </Col>
                        <Col xs="12" sm="12">
                            <button type="submit" className="w-100 form-submit-button text-center mt-5">
                                <span>SEND YOUR REQUEST</span>
                            </button>
                        </Col>
                        
                    </Row>
                </form>
            </Container>
        </section>
            </div>

          )}
    </header>
  )
}
