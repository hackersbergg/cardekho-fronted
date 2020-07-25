
import React, { Component } from "react";

export default class Footer extends Component{
  render(){
    return(

      <div>

	    <footer>
	        <div class="container">
	            <div class="row">
	                <div class="col-lg-4 col-md-4">
	                    <div class="footer__about">
	                        <div class="footer__logo">
	                            <a href="#"><img src="assets/img/main-logo.png" alt=""/></a>
	                        </div>
	                        <p>Any questions? Let us know in store at Bahrkheda, kalan, Pilibhit, UP, India or call us
	                            on (+91) 9675331149</p>
	                        <div class="footer__social">
	                            <a href="https://www.facebook.com/Jaymataditourtravel-115583619879060/" class="facebook"><i class="fa fa-facebook"></i></a>
	                            <a href="https://wa.me/8144258413?text=I%27m%20interested%20in%20your%20car%20for%20rent" class="twitter"><i class="fa fa-whatsapp"></i></a>
	                            <a href="https://www.instagram.com/jaymataditourtravel/" class="google"><i class="fa fa-instagram"></i></a>

	                        </div>
	                    </div>
	                </div>
	                <div class="col-lg-2 offset-lg-1 col-md-3">
	                    <div class="footer__widget">
	                        <h5>Infomation</h5>
	                        <ul>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Purchase</a></li>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Payemnt</a></li>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Shipping</a></li>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Return</a></li>
	                        </ul>
	                    </div>
	                </div>
	                <div class="col-lg-2 col-md-3">
	                    <div class="footer__widget">
	                        <h5>Infomation</h5>
	                        <ul>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Hatchback</a></li>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Sedan</a></li>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> SUV</a></li>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Crossover</a></li>
	                        </ul>
	                    </div>
	                </div>
	                <div class="col-lg-3 col-md-6">
	                    <div class="footer__brand">
	                        <h5>Top Brand</h5>
	                        <ul>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Features</a></li>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Maintenance</a></li>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Rental</a></li>
	                            <li><a href="#"><i class="fa fa-angle-right"></i> Support</a></li>
	                        </ul>
	                        <ul>
	                            <li><a href="/blog"><i class="fa fa-angle-right"></i> Blog</a></li>
	                            <li><a href="/service"><i class="fa fa-angle-right"></i> Services</a></li>
	                            <li><a href="/about"><i class="fa fa-angle-right"></i> About</a></li>
	                            <li><a href="/contact"><i class="fa fa-angle-right"></i> Contact</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </div>

	            <div class="footer__copyright__text">
	                <p>Copyright &copy; 2020 All rights reserved </p>
	            </div>
	            
	        </div>
	    </footer>


      </div>

      )
  }
}