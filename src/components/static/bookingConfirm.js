import React, {Component} from "react";

import Header from "../common/Header.js"
import Footer from "../common/Footer.js"


export default class BookConfirmed extends Component{
	render(){
		return(

		<div>
		<Header></Header>
		<br/>

		<div class='container'>
		<div class="card">
		  <div class="card-header">
		    Your booking confirmed
		  </div>
		  <div class="card-body">
		    <blockquote class="blockquote mb-0">
		      <p> We've recieved your booking appointment date.<br/>
		      Thank you for your booking confirmation.</p>

		      <footer class="blockquote-footer"> We'll get back to you soon!!</footer>
		      <br/>
		      <a href="/list" class="btn btn-primary">continue book again</a>
		    </blockquote>
		  </div>
		</div>
		</div>
		<br/>

		<Footer></Footer>
		</div>

			)
	}
}