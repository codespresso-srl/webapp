import React, {Component} from 'react';
// import Logo from ' ./logo.png.jpg';
import "./index.css"

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="sm-padding bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-logo">
                                {/*<Logo/>*/}
                                <a href="index.html"><img src="./logo.png.jpg" alt="index1"/></a>
                            </div>
                            <div className="footer-copyright">
                                <p>Copyright © 2019. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>



                    <div id="contact" class="section md-padding">

                        <div class="container">

                            <div class="row">

                                <div class="section-header text-center">
                                    <h2 class="title">Get in touch</h2>
                                </div>

                                <div class="col-sm-4">
                                    <div class="contact">
                                        <i class="fa fa-phone"></i>
                                        <h3>Phone</h3>
                                        <p>+40749-591-785</p>
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="contact">
                                        <i class="fa fa-envelope"></i>
                                        <h3>Email</h3>
                                        <p>office@codespresso.com</p>
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="contact">
                                        <i class="fa fa-map-marker"></i>
                                        <h3>Location</h3>
                                        <p>Cluj-Napoca, Romania</p>
                                    </div>
                                </div>

                                <div class="col-md-8 col-md-offset-2">
                                    <form class="contact-form">
                                        <input type="text" class="input" placeholder="Name">
                                            <input type="email" class="input" placeholder="Email">
                                                <input type="text" class="input" placeholder="Subject">
                                                    <textarea class="input" placeholder="Message"></textarea>
                                                    <button class="main-btn">Send message</button>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </footer>
        )
    }
}

export default Footer;
