import React, {Component} from "react";
import {Form, notification} from 'antd';


export default class productBook extends Component{

	constructor(props) {
        super(props);
        this.state ={
        	product: "",
            name: "",
            email: "",
            subject: "",
            bookdate: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit(values){
      console.log(values);

      const formData = new FormData();
      formData.append("product", values.product);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("subject", values.subject);
      formData.append("bookdate", values.bookdate);

        const options = {
            method: 'POST',
            body: formData
        };

      fetch('http://localhost:8000/api/productbook', options).then(() => {
        // this.props.history.push('/hello');

        })
      .catch((error) => {
      console.log(this.props.state)
      })


    };


	render(){
		return(


			<div class='container'>
			<div class="col-lg-6 col-md-6">
                <div class="contact__form">
                    <Form onFinish={this.onFormSubmit}>
                        <div class="row">
                        	<div class="col-lg-6">
                        		<Form.Item name="product">
                                <input type="number" placeholder="Product ID" required />
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
                        </div>
                        <Form.Item name="bookdate">
                        	<input type="datetime-local" placeholder="Bookdate" required/>
                        </Form.Item>

                        <Form.Item name="subject">
	                    	<textarea placeholder="Subject"></textarea>
	                    </Form.Item>

                        <button type="submit" value="submit" class="site-btn">Submit Now</button>
                    </Form>
                </div>
            </div>
            </div>


			)
	}
}