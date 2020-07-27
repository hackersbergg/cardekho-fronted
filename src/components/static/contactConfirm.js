import React, {Component} from "react";

import Header from "../common/Header.js"
import Footer from "../common/Footer.js"


export default class ContactConfirmed extends Component{
	render(){
		return(

		<div>
		<Header></Header>
		<br/>

		<div class='container'>
		<div class="card">
		  <div class="card-body">
		    <blockquote class="blockquote mb-0">
		      <p> We've recieved your contact information.<br/>
		      Thank you for contacting us.</p>

		      <footer class="blockquote-footer"> We'll get back to you soon!!</footer>
		      <br/>
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