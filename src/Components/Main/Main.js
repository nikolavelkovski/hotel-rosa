import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Main.modules.css'
import handsHoldingImage from './../../assets/images/hands-holding.jpg';
import  dockImage from './../../assets/images/dock.png';
import lampImage from './../../assets/images/lamp.png';
import logoOrange from './../../assets/images/logo2.png';
import wallpaper from './../../assets/images/slide1.jpg';
import strawberries from './../../assets/images/strawberries.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
export default function Main({mobileMenuShow}) {
  return (
    <main className={mobileMenuShow && 'mobile-menu-open'}>
        <section className='slider'>
            <Carousel showArrows={true} showThumbs= {false} showIndicators={false} showStatus={false}>
                <div className="content-slide">
                    <img src= {wallpaper} alt="wallpaper" />
                    <div className = "heading">
                        <h1 className='title'>EVERYONE'S DIFFERENT, OUR ROOMS TOO.</h1>
                        <hr className='slider-line' />
                        <p className='subtitle'>HOPE YOUR STILL AVAILABLE</p>
                        
                    </div>
                </div>
                <div className="content-slide">
                    <img src= {strawberries} alt="wallpaper" />
                    <div className = "heading">
                        <h1 className='title'>WHAT DOES SUMMER TASTE LIKE?</h1>
                        <hr className='slider-line' />
                        <p className='subtitle'>FIND OUT AT ROSA HOTEL</p>
                       
                    </div>
                </div>
            </Carousel>
        </section>
        <section>
            <Row className='no-gutters'>
                <Col md= "4">
                    <figure className='gallery-images-container'>
                        <img src={handsHoldingImage} alt="two hands holding each other" />
                        <figcaption>
                                WHERE THE MAGIC HAPPENS                             
                        </figcaption>     
                    </figure>
                </Col>
                <Col md= "4">
                    <figure className='gallery-images-container'>
                        <img src={dockImage} alt="two hands holding each other" />
                        <figcaption className='orange-box'>
                                HOLIDAYS AS THEY WANT                            
                        </figcaption>       
                    </figure>
                </Col>
                <Col md= "4">
                    <figure className='gallery-images-container'>
                        <img src={lampImage} alt="two hands holding each other" /> 
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
