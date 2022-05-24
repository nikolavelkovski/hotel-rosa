import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Main.modules.css'
import handsHoldingImage from './../../assets/images/hands-holding.jpg';
import  dockImage from './../../assets/images/dock.png';
import lampImage from './../../assets/images/lamp.png';
import logoOrange from './../../assets/images/logo2.png';
import wallpaper from './../../assets/images/slide1.jpg';
import strawberries from './../../assets/images/strawberries.png'
import selectArrow from './../../assets/images/selectArrow.png'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
export default function Main({mobileMenuShow}) {
    const [firstDatepickerDate, setFirstDatepickerDate] = useState(null);
    const [secondDatepickerDate, setSecondDatepickerDate] = useState(null);
    const [isOpenFirstSelect, setIsOpenFirstSelect] = useState(false)
    const [firstSelectValue, setFirstSelectValue] = useState(null);
    const [isOpenSecondSelect, setIsOpenSecondSelect] = useState(false)
    const [secondSelectValue, setSecondSelectValue] = useState(null);

  return (
    <main className={mobileMenuShow ? 'mobile-menu-open': ''}>
        <section className='slider'>
            <Carousel showArrows={true} showThumbs= {false} showIndicators={false} showStatus={false} swipeable = {true }autoPlay = {true} infiniteLoop = {true} >
                <div className="content-slide">
                    <img  src= {wallpaper} alt="wallpaper" />
                    <div className = "heading">
                        <h1 className='title'>EVERYONE'S DIFFERENT, OUR ROOMS TOO.</h1>
                        <hr className='slider-line' />
                        <p className='subtitle'>HOPE YOUR STILL AVAILABLE</p>
                        <a className='down-arrow' href="#gallery-section">	&#9660;</a>
                        
                    </div>
                </div>
                <div className="content-slide">
                    <img  src= {strawberries} alt="wallpaper" />
                    <div className = "heading">
                        <h1 className='title'>WHAT DOES SUMMER TASTE LIKE?</h1>
                        <hr className='slider-line' />
                        <p className='subtitle'>FIND OUT AT ROSA HOTEL</p>
                        <a className='down-arrow' href="#gallery-section">	&#9660;</a>
                    </div>
                </div>
            </Carousel>
        </section>
        <section id="gallery-section">
            <Row className='no-gutters'>
                <Col md= "4">
                    <figure className='gallery-images-container'>
                        <img loading= "lazy" src={handsHoldingImage} alt="two hands holding each other" />
                        <figcaption>
                                WHERE THE MAGIC HAPPENS                             
                        </figcaption>     
                    </figure>
                </Col>
                <Col md= "4">
                    <figure className='gallery-images-container'>
                        <img loading= "lazy" src={dockImage} alt="two hands holding each other" />
                        <figcaption className='orange-box'>
                                HOLIDAYS AS THEY WANT                            
                        </figcaption>       
                    </figure>
                </Col>
                <Col md= "4">
                    <figure className='gallery-images-container'>
                        <img loading= "lazy" src={lampImage} alt="two hands holding each other" /> 
                        <figcaption>
                                SEE SPIRIT EVERYWHERE                             
                        </figcaption>      
                    </figure>
                </Col>
            </Row>
        </section>
        <section className='aboutUs-section'> 
            <Container>
             <div className='aboutUs-content-container'>   
            <img src={logoOrange} alt="logo orange"  className='logo-orange'></img>
            <h2>THE PERFECT STAY, WHATEVER YOUR WANT</h2>
                        <div className='about-us-text-content'>
                        <p className="aboutUs-text">Situated at only <span className="text-black">100 meters from the beach</span>, the
                            hotelz
                            disposes of private beach <br/>
                            with sunshades and sunloungers that are <span className="text-green">exclusively reserved </span>
                            for the clients. <br/>
                            For the sun tan or for work, <br/>
                            for a concert or a journey through, <br/>
                            for a meeting or for running, <br/>
                            for a <span className="text-black">trip to Venice</span> or for shopping... <br/>

                         </p>
                         
                        <button className="aboutUs-button">come in and relax</button>
                        </div>
            </div>
            </Container>
        </section>
        <section className='reservation-section' id="reservation-section">
            <Container>
                <h2>ASK FOR RESERVATION</h2>
                <p>AND FEEL FREE TO DROP US A LINE ABOUT EVERYTHING YOU NEED TO KNOW</p>
                <form className='info-form'>
                    <Row>
                        <Col md="4">
                           <div className='form-input'>
                               <label htmlFor='name'>Name:</label>
                               <input id="name" type="text" />
                           </div>
                        </Col>
                        <Col md="4">
                           <div className='form-input'>
                               <label htmlFor='email'>Email:</label>
                              
                               <input id="email" type="email" />
                           </div>
                        </Col>
                        <Col md="2">
                           <div className='form-input date-input'>
                               <label htmlFor='date-from'>From:</label>
                               <DatePicker dateFormat="dd/MM/yyyy" dateFormatCalendar='MMMM' useWeekdaysShort={true} selected={firstDatepickerDate} onChange={(date) => setFirstDatepickerDate(date)} />
                           </div>
                        </Col>
                        <Col md="2">
                           <div className='form-input date-input'>
                               <label htmlFor='date-to'>To:</label>
                               <DatePicker dateFormat="dd/MM/yyyy" dateFormatCalendar='MMMM' useWeekdaysShort={true} selected={secondDatepickerDate} onChange={(date) => setSecondDatepickerDate(date)} />
                           </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                    <Col md="2">
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
                           <Col md="2">
                           <div className='form-input form-select-boxes' >
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
                           <Col md="8">

                           <div className='form-input'>
                               <label htmlFor='text'>Ask everything:</label>
                               <input id="text" type="text" maxLength="53" />
                           </div>
                           
                            
                        </Col>
                        <Col md='12'>
                        <div className='form-input w-100 mt-4'>
                               <input  type="text" />
                           </div>
                           </Col>
                           <Col md='12'>
                           <div className='form-input w-100 mt-4'>
                               <input  type="text" />
                           </div>
                           </Col>
                        <Col md="12">
                            <button type="submit" className="w-100 form-submit-button text-center mt-5">
                                <span>SEND YOUR REQUEST</span>
                            </button>
                        </Col>
                        
                    </Row>
                </form>
            </Container>
        </section>
        <section className='contact-section'> 
            <Container>
                <div className='form-container'>
                    <h2>STAY IN TOUCH</h2>
                    <p>RECEIVE THE LATEST NEWS AND PROMOTIONS,STRAIGHT TO YOUR MAILBOX</p>
                    <form>
                        <input type="email" placeholder='YOUR EMAIL HERE ' />
                        <button type="submit">REGISTER ME NOW</button>
                    </form>
                </div>
            </Container>
        </section>
       
    </main>
  )
}
