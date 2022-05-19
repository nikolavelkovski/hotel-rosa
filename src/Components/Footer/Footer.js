import React from 'react'
import { Container } from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import './Footer.modules.css'
export default function Footer() {
  return (
    <footer>
        <Container className='content'>
            <h2>
                ROSA HOTEL GARNI
            </h2>
            <p className='rating-stars'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />        
            </p>
            <p className='footer-contact-info'>VIA MAMELI, 25 - JESOLO LIDO, VENEZIA 30020 ITALIA +39 0421 380081 INFO@HOTELROSAJESOLO.IT <br/> <span>© ROSA HOTEL GARNI 2015 - P.IVA 02638140273</span></p>
           
            <hr className='footer-line' />
            <p className='links'>
                <a href="#">CONTATTI</a>
                <a href="#">CREDITS</a>
                <a href="#">PRIVACY</a>
                <a href="#">VERSIONE ITALIANA</a>
            </p>
            <p className='social-links'>
            <FontAwesomeIcon icon={faBook} />
            <FontAwesomeIcon icon={faBook} />
            <FontAwesomeIcon icon={faBook} />
            <FontAwesomeIcon icon={faBook} />
            <FontAwesomeIcon icon={faBook} />

            </p>
        </Container>
    </footer>
  )
}
