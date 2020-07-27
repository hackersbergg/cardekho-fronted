import React, {Component} from "react";
import {Form, notification} from 'antd';
import Preload from "../common/PreLoad.js";
import productBook from "./productBook.js";

import Header from "../common/Header.js"
import Footer from "../common/Footer.js"


export default class Detail extends Component{

	constructor(props) {
    super(props);

    this.state = {
    	product: "",
        name: "",
        email: "",
        phone_number: "",
        subject: "",
        bookdate: "",
      	path: "",
      	response: "",
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  	}

    onFormSubmit(values){
      console.log(values);

      const formData = new FormData();
      formData.append("product", values.product);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone_number", values.phone_number);
      formData.append("subject", values.subject);
      formData.append("bookdate", values.bookdate);

        const options = {
            method: 'POST',
            body: formData
        };

      fetch('http://3.128.190.113/api/productbook', options).then(() => {
        this.props.history.push('/bookconfirmed');

        })
      .catch((error) => {
      console.log(this.props.state)
      })

    };


	componentDidMount() {
	    this.fetchData();
	  }

	  fetchData = async () => {
	    const path = this.props.match.params.slug;
	    try {
	      const response = await fetch(
	        `http://3.128.190.113/api/car/p_detail/${path}`
	      );
	      const JsonResponse = await response.json();
	      this.setState({ response: JsonResponse });
	    } catch (error) {
	      console.log(error);
	    }
	};


	render(){

		const { response } = this.state;

	    if (!response) {
	      return (
	      		<Preload></Preload>
	      	);
	    }

		return(

		<div>
		<Header></Header>

		    <section class="car-details spad">
		        <div class="container">
		            <div class="row">
		                <div class="col-lg-9">
		                    <div class="car__details__pic">
		                        <div class="car__details__pic__large">
		                            <img class="car-big-img" src={response.product_image} alt=""/>
		                        </div>
		                        <div class="car-thumbs">
		                            <div class="car-thumbs-track car__thumb__slider">
		                                <div class="ct" data-imgbigurl="assets/img/cars/details/cd-2.jpg">
		                                <img src="assets/img/cars/details/sm-1.jpg" alt=""/>
		                                <img src="assets/img/cars/details/sm-1.jpg" alt=""/>
		                                <img src="assets/img/cars/details/sm-1.jpg" alt=""/>
		                                <img src="assets/img/cars/details/sm-1.jpg" alt=""/>       

		                             </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="car__details__tab">

		                                <hr/>
		                                <div class="container">
		                                <div class="col-lg-12 col-md-12">

                                            <div class="car__details__tab__feature__item">
                                                <h5>Book an appointment: </h5>


							                <div class="contact__form">
							                    <Form onFinish={this.onFormSubmit}>
							                        <div class="row">
							                        	<div class="col-lg-6">
							                        	<Form.Item name="product" initialValue={response.id}>
							                        	<input type="number" disabled />
							                        	</Form.Item>
							                        		
							                            </div>
							                            <div class="col-lg-6">
							                            	<Form.Item name="name">
							                                <input type="text" placeholder="Name" required />
							                                </Form.Item>
							                            </div>
							                            <div class="col-lg-6">
							                            	<Form.Item name="email">
							                                <input type="email" placeholder="Email" required/>
							                                </Form.Item>
							                            </div>
							                            <div class="col-lg-6">
							                            	<Form.Item name="phone_number">
							                                <input type="number" placeholder="Phone number" required/>
							                                </Form.Item>
							                            </div>
							                        </div>
							                        <Form.Item name="bookdate">
							                        	<input type="datetime-local" placeholder="Bookdate" required/>
							                        </Form.Item>

							                        <Form.Item name="subject">
								                    	<textarea placeholder="Subject"></textarea>
								                    </Form.Item>

							                        <button type="submit" value="submit" class="site-btn">Book Now</button>
							                    </Form>
							                </div>

							                </div>
							          

		                            </div>  		                            
		                        </div>
		                    </div>
		                </div>

		                <div class="col-lg-3">
		                    <div class="car__details__sidebar">
		                        <div class="car__details__sidebar__model">
		                            <ul>
		                            	<li>Name <span>{response.title}</span></li>        
		                                <li>Location <span>{response.location}</span></li>
		                            </ul>
		
		                        </div>
		                        <div class="car__details__sidebar__model">
		                            <ul>
		                            	<li>Brand <span>{response.brand}</span></li>
		                                <li>Model <span>{response.model}</span></li>
		                                <li>Engine <span>{response.engine}</span></li>
		                                <li>Mileage <span>{response.mileage}</span></li>
		                                <li>HP <span>{response.hp}</span></li>
		                                <li>Gear <span>{response.gear}</span></li>
		                                <li>Color <span>{response.color}</span></li>
		                                <li>Condition <span>{response.condition}</span></li>
		                                <li>Year <span>{response.year}</span></li>
		                            </ul>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    <hr/>

		    <Footer></Footer>

		</div>

			)
	}
}