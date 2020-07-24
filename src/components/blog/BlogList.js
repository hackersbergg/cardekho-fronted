import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import Header from "../common/Header.js"
import Footer from "../common/Footer.js"


export default class BlogList extends Component{

	constructor(props) {
    super(props);


    this.state = {
      value: "1",
      response: "",
    };

  }

  componentDidMount() {
    this.fetchData();
  }

  pageClick = (page) => {
    this.setState({value: page}, this.fetchData);
  };


  fetchData = async () => {

    try {
      const response = await fetch(
        `http://3.128.190.113/api/blog_list?page=${this.state.value}`
      );
      const JsonResponse = await response.json();
      this.setState({ response: JsonResponse });
    } 
    catch (error) {
      console.log(error);
    }
  };



	render(){

		const { response } = this.state;

	     if (!response) {
	      return "Loading...";
	    }

		return(

		<div>
		<Header></Header>

	    <section class="blog spad">
	        <div class="container">
	            <div class="row">

	                <div class="col-lg-9">
	                
	                    <div class="row">
	                    {response.results.map((response) =>(

	                        <div class="col-lg-6 col-md-6 col-sm-6">
	                            <div class="blog__item">
	                                
	                                <Link to={{
				                      pathname: `/blogdetail/${response.slug}`,
				                      response:response
				                    	}}>
				                      <img src={response.image} alt="image"/>
				                    </Link>
		                         

	                                    <ul>
	                                        <li>By {response.author_name}</li>
	                                        <li>{response.date}</li>
	                                        
	                                    </ul>
	                               
	                                <div class="blog__item__text">
	                                   
	                                    <Link to={{
					                      pathname: `/blogdetail/${response.slug}`,
					                      response:response
					                    	}}>
					                       <h5>{response.title}</h5>
					                    </Link>
	                                    <p>{response.description}</p>
	                                </div>
	                            </div>
	                        </div>


	                        ))}
	                    </div>
	                    

	                    <div class="pagination__option">
	                        <a href="#" class="active">1</a>
	                        <a href="#">2</a>
	                        <a href="#">3</a>
	                        <a href="#"><span class="arrow_carrot-2right"></span></a>
	                    </div>
	                    
	                </div>
	                <div class="col-lg-3 col-md-6 col-sm-9">
	                    <div class="blog__sidebar">
	                        <form action="#" class="blog__sidebar__search">
	                            <input type="text" placeholder="Search..."/>
	                            <button type="submit"><i class="fa fa-search"></i></button>
	                        </form>
	                        <div class="blog__sidebar__feature">
	                            <h4>Feature News</h4>
	                            <div class="blog__sidebar__feature__item">
	                                <h6><a href="#">Where To Look For Cheap Brochure</a></h6>
	                                <ul>
	                                    <li>By Polly Williams</li>
	                                    <li>Dec 27, 2018</li>
	                                </ul>
	                            </div>

	                        </div>
	                        <div class="blog__sidebar__categories">
	                            <h4>Categories</h4>
	                            <ul>
	                                <li><a href="#">Creativity</a></li>
	                                <li><a href="#">Design</a></li>
	                                <li><a href="#">Inspiration</a></li>
	                                <li><a href="#">News</a></li>
	                            </ul>
	                        </div>
	                        <div class="blog__sidebar__newslatter">
	                            <h4>Newsletter</h4>
	                            <p>Subscribe our newsletter gor get</p>
	                            <form action="#">
	                                <input type="text" placeholder="Your email"/>
	                                <button type="submit">Subscribe</button>
	                            </form>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>

		</div>

		)
	}
}