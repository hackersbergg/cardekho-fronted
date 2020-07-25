import React, {Component} from "react";

import Header from "../common/Header.js"
import Footer from "../common/Footer.js"


export default class Preload extends Component{
	render(){
		return(

		<div>

		<Header></Header>

		<section class="about spad">
	        <div class="container">
	            <div class="row">
	                <div class="col-lg-12">
	                    <div class="section-title about-title">
	                        <h2>Wellcome To JAYMATADITOURTRAVEL Auto Online <br />We Provide Everything You Need To A Car</h2>
	                        <p>First We will explain what contextual advertising is. Contextual advertising means the
	                            advertising of products on a website according to<br /> the content the page is displaying.
	                            For example if the content of a website was information on a Ford truck then the
	                            advertisements</p>
	                    </div>
	                </div>
	            </div>

	            <div class="row">
	                <div class="col-lg-12">
	                    <div class="about__pic">
	                        <img src="assets/img/about/about-pic.jpg" alt=""/>
	                    </div>
	                </div>
	                <div class="col-lg-6 col-md-6 col-sm-6">
	                    <div class="about__item">
	                        <h5>Our Mission</h5>
	                        <p>Now, We're not like Robin, that weirdo from us cultural anthropology class; IWe think that
	                            advertising is something that has its place in our society; which for better or worse is
	                            structured along a marketplace economy. But, simply because I feel advertising has a right
	                            to exist, doesn’t mean that I like or agree with it, in its</p>
	                    </div>
	                </div>
	                <div class="col-lg-6 col-md-6 col-sm-6">
	                    <div class="about__item">
	                        <h5>Our Vision</h5>
	                        <p>Where do you register your complaints? How can you protest in any form against companies
	                            whose advertising techniques you don’t agree with? You don’t. And on another point of
	                            difference between traditional products and their advertising and those of the internet
	                            nature, simply ignoring internet advertising is </p>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>


    	<div class="clients spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title client-title">
                        <span>Partner</span>
                        <h2>Our Clients</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="#" class="client__item">
                        <img src="assets/img/clients/client-1.png" alt=""/>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="#" class="client__item">
                        <img src="assets/img/clients/client-2.png" alt=""/>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="#" class="client__item">
                        <img src="assets/img/clients/client-3.png" alt=""/>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="#" class="client__item">
                        <img src="assets/img/clients/client-2.png" alt=""/>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="#" class="client__item">
                        <img src="assets/img/clients/client-4.png" alt=""/>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="#" class="client__item">
                        <img src="assets/img/clients/client-5.png" alt=""/>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="#" class="client__item">
                        <img src="assets/img/clients/client-6.png" alt=""/>
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="#" class="client__item">
                        <img src="assets/img/clients/client-7.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    	</div>

    	<Footer></Footer>
	    
		</div>

			)
	}
}