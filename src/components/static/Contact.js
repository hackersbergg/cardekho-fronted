import React, {Component} from "react";
import {Form, notification} from 'antd';
import Header from "../common/Header.js"
import Footer from "../common/Footer.js"


export default class Contact extends Component{

	constructor(props) {
    super(props);

    this.state = {
        name: "",
        email: "",
        subject: "",
        description: "",
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  	}

    onFormSubmit(values){
      console.log(values);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("subject", values.subject);
      formData.append("description", values.description);

        const options = {
            method: 'POST',
            body: formData
        };

      fetch('http://3.128.190.113/api/contactus', options).then(() => {
        this.props.history.push('/thankyou');

        })
      .catch((error) => {
      console.log(this.props.state)
      })

    };


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

	                        <Form onFinish={this.onFormSubmit}>
	                            <div class="row">
	                                <div class="col-lg-6">
	                                	<Form.Item name="name">
	                                    	<input type="text" placeholder="Name" required />
	                                    </Form.Item>
	                                </div>
	                                <div class="col-lg-6">
	                                	<Form.Item name="email">
	                                    	<input type="email" placeholder="Email" required />
	                                    </Form.Item>
	                                </div>
	                            </div>
	                            <Form.Item name="subject">
	                            	<input type="text" placeholder="Subject" required />
	                            </Form.Item>

	                            <Form.Item name="description">
	                            	<textarea placeholder="Your Question" required ></textarea>
	                            </Form.Item>
	                            <button type="submit" class="site-btn">Submit Now</button>
	                        </Form>

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