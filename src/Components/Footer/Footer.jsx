import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-container container">
            <h1 className='footer-title'>Rotimi Obabiyi-Nicol </h1>

            <ul className='footer-list'>
                <li>
                    <a href="#about"
                    className='footer-link'>About</a>
                </li>

                <li>
                    <a href="#portfolio"
                    className='footer-link'>Projects</a>
                </li>

                <li>
                    <a href="#testimonials"
                    className='footer-link'>Testimonials</a>
                </li>

                

            </ul>

            <div className="footer-social">
            <a 
            href="https://www.twitter.com/" 
            className='footer-social-link' 
            target='-blank'>
            <i class="bx bxl-twitter"></i>
           </a>
            <a
            href="https://www.instagram.com/" 
            className='footer-social-link' 
            target='-blank'>
            <i class="bx bxl-instagram"></i>
            </a>
            <a 
            href="https://www.whatsapp.com/" 
            className='footer-social-link' 
            target='-blank'>
            <i class="bx bxl-whatsapp"></i>
            </a>
            </div>

            <span className='footer-copy'>&#169; Crypticalcoder. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer