
import React, { Component } from "react";

export default class Header extends Component{
  render(){
    return(

      <div>

		  
		    <div class="offcanvas-menu-overlay"></div>
		    <div class="offcanvas-menu-wrapper">
		        <div class="offcanvas__widget">
		            <a href="#"><i class="fa fa-cart-plus"></i></a>
		            <a href="#" class="search-switch"><i class="fa fa-search"></i></a>
		            <a href="#" class="primary-btn">Add Car</a>
		        </div>
		        <div class="offcanvas__logo">
		            <a href="/"><img src="assets/img/logo.png" alt=""/></a>
		        </div>
		        <div id="mobile-menu-wrap"></div>
		        <ul class="offcanvas__widget__add">
		            <li><i class="fa fa-clock-o"></i> Week day: 08:00 am to 18:00 pm</li>
		            <li><i class="fa fa-envelope-o"></i> Info.colorlib@gmail.com</li>
		        </ul>
		        <div class="offcanvas__phone__num">
		            <i class="fa fa-phone"></i>
		            <span>(+91) 9675331149</span>
		        </div>
		        <div class="offcanvas__social">
		            <a href="#"><i class="fa fa-facebook"></i></a>
		            <a href="#"><i class="fa fa-twitter"></i></a>
		            <a href="#"><i class="fa fa-google"></i></a>
		            <a href="#"><i class="fa fa-instagram"></i></a>
		        </div>
		    </div>
	
		    <header class="header">
		        <div class="header__top">
		            <div class="container">
		                <div class="row">
		                    <div class="col-lg-7">
		                        <ul class="header__top__widget">
		                            <li><i class="fa fa-clock-o"></i> Week day: 08:00 am to 18:00 pm</li>
		                            <li><i class="fa fa-envelope-o"></i> jaymataditourtravels@gmail.com</li>
		                        </ul>
		                    </div>
		                    <div class="col-lg-5">
		                        <div class="header__top__right">
		                            <div class="header__top__phone">
		                                <i class="fa fa-phone"></i>
		                                <span>(+91) 9675331149</span>
		                            </div>
		                            <div class="header__top__social">
		                                <a href="https://www.facebook.com/Jaymataditourtravel-115583619879060/"><i class="fa fa-facebook"></i></a>
		                                <a href="https://wa.me/9675331149?text=I%27m%20interested%20in%20your%20car%20for%20rent"><i class="fa fa-whatsapp"></i></a>
		                                <a href="https://www.instagram.com/jaymataditourtravel/"><i class="fa fa-instagram"></i></a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div class="container">
		            <div class="row">
		                <div class="col-lg-2">
		                    <div class="header__logo">
		                        <img src="https://i.stack.imgur.com/myCPk.png" alt="header-logo"/>
		                    </div>
		                </div>
		                <div class="col-lg-10">
		                    <div class="header__nav">
		                        <nav class="header__menu">
		                            <ul>
		                                <li class="active"><a href="/">Home</a></li>
		                                <li><a href="/list">Cars</a></li>
		                                <li><a href="/blog">Blog</a></li>
		                                <li><a href="/service">Services</a></li>
		                                <li><a href="/about">About</a></li>
		                                <li><a href="/contact">Contact</a></li>
		                            </ul>
		                        </nav>
		                    </div>
		                </div>
		            </div>
		            <div class="canvas__open">
		                <span class="fa fa-bars"></span>
		            </div>
		        </div>
		    </header>

      </div>

      )
  }
}