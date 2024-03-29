import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container" id={'contact'}>
            <div className="footer-contact">
                <h1>CONTACT</h1>
                <div class="footer-center">

                    <div class="mbl-icon">
                        <a href="https://www.linkedin.com/in/dennis-liang-shu/"><i class="fa fa-linkedin"></i></a>
                        <a href="https://www.linkedin.com/in/dennis-liang-shu/"><p>LinkedIn</p></a>
                    </div>

                    <div class="mbl-icon">
                        <a href="tel:+1215-858-4783"><i class="fa fa-phone"></i></a>
                        <a href="tel:+1215-858-4783"><p>+1 (215) 858 4783</p></a>
                    </div>

                    <div class="mbl-icon">
                        <a href="mailto:d.l.s6465@gmail.com"><i class="fa fa-envelope"></i></a>
                        <a href="mailto:d.l.s6465@gmail.com"><p>d.l.s6465@gmail.com</p></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer