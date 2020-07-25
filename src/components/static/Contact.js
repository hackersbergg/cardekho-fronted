import React, {Component} from "react";

import Header from "../common/Header.js"
import Footer from "../common/Footer.js"


export default class Contact extends Component{
	render(){
		return(

		<div>

		<Header></Header>

		<section class="contact spad">
	        <div class="container">
	            <div class="row">
	                <div class="col-lg-6 col-md-6">
	                    <div class="contact__text">
	                        <div class="section-title">
	                            <h2>Let’s Work Together</h2>
	                            <p>To make requests for further information, contact us via our social channels.</p>
	                        </div>
	                        <ul>
	                            <li><span>Weekday</span> 08:00 am to 18:00 pm</li>
	                            <li><span>Saturday:</span> 10:00 am to 16:00 pm</li>
	                            <li><span>Sunday:</span> Closed</li>
	                        </ul>
	                    </div>
	                </div>
	                <div class="col-lg-6 col-md-6">
	                    <div class="contact__form">
	                        <form action="#">
	                            <div class="row">
	                                <div class="col-lg-6">
	                                    <input type="text" placeholder="Name"/>
	                                </div>
	                                <div class="col-lg-6">
	                                    <input type="text" placeholder="Email"/>
	                                </div>
	                            </div>
	                            <input type="text" placeholder="Subject"/>
	                            <textarea placeholder="Your Question"></textarea>
	                            <button type="submit" class="site-btn">Submit Now</button>
	                        </form>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>

	    <div class="contact-address">
	        <div class="container">
	            <div class="contact__address__text">
	                <div class="row">
	                    <div class="col-lg-4 col-md-6 col-sm-6">
	                        <div class="contact__address__item">
	                            <h4>Mumbai Showroom</h4>
	                            <p>Sector 19, CBD Belapur, Mumbai, India  jaymataditourtravels@gmail.com</p>
	                            <span>(+91) 9675331149</span>
	                        </div>
	                    </div>
	                    <div class="col-lg-4 col-md-6 col-sm-6">
	                        <div class="contact__address__item">
	                            <h4>UttarPradesh Showroom</h4>
	                            <p>Bahrkheda, kalan, Pilibhit, UP, India  jaymataditourtravels@gmail.com</p>
	                            <span>(+91) 9675331149</span>
	                        </div>
	                    </div>
	                    <div class="col-lg-4 col-md-6 col-sm-6">
	                        <div class="contact__address__item">
	                            <h4>Gurgaon Showroom</h4>
	                            <p>Sector 30 Gurgaon, Haryana, India  jaymataditourtravels@gmail.com</p>
	                            <span>(+91) 9675331149</span>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>

	    <Footer></Footer>

		</div>

			)
	}
}