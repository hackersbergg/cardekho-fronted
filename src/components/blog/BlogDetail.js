import React, {Component} from "react";
import './BlogDetail.css';
import Header from "../common/Header.js"
import Footer from "../common/Footer.js"

export default class BlogDetail extends Component{


	constructor(props) {
    super(props);

    this.state = {
      path: "",
      response: "",
    };
  	}

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const path = this.props.match.params.slug;
    try {
      const response = await fetch(
        `http://3.128.190.113/api/blog_detail/${path}`
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
	      return "Loading...";
	    }

		return(

		<div>
		<Header></Header>

		<section class="blog-details-hero spad set-bg">

    	</section>

	    <section class="blog-details spad">
	        <div class="container">
	            <div class="container-fluid">

			    <div class="row">
			        <div class="col-md-12">
			          
			            <img src={response.image} />

			          
			            <div class="carousel-caption vertical-center">
			              <h1>{response.title}</h1>
			              <div class="blog__details__hero__text">
              
	                        <ul>
	                            <li><img src="assets/img/blog/details/details-hero-avatar.png" alt=""/> <span>By Evelyn Lane</span>
	                            </li>
	                            <li><i class="fa fa-calendar-o"></i> <span>{response.date}</span></li>
	                            <li><i class="fa fa-edit"></i> <span>2 Comment</span></li>
	                        </ul>
	                    	</div>
			            </div>  
			          
					</div>
				</div>
				</div>

	               

	            <div class="row d-flex justify-content-center">
	                <div class="col-lg-8">

	                    <div class="blog__details__desc">
	                        <p>{response.description}</p>
	                    </div>

	                    <div class="blog__details__share">
	                        <a href="#" class="blog__details__share__item">
	                            <i class="fa fa-facebook"></i>
	                            <span>Share</span>
	                        </a>
	                        <a href="#" class="blog__details__share__item twitter">
	                            <i class="fa fa-twitter"></i>
	                            <span>Share</span>
	                        </a>
	                        <a href="#" class="blog__details__share__item google">
	                            <i class="fa fa-google"></i>
	                            <span>Share</span>
	                        </a>
	                        <a href="#" class="blog__details__share__item linkedin">
	                            <i class="fa fa-linkedin"></i>
	                            <span>Share</span>
	                        </a>
	                    </div>
	                    <div class="blog__details__author">
	                        <div class="blog__details__author__pic">
	                            <img src="assets/img/blog/details/author.png" alt=""/>
	                        </div>
	                        <div class="blog__details__author__text">
	                            <h5>Marry Jean</h5>
	                            <p>Another thing that I don’t really like about them is that they’re such sideline actors,
	                                lacking the abilities to participate actively.</p>
	                        </div>
	                    </div>

	                    <div class="blog__details__comment">
	                        <h4>12 Comment</h4>

	                    </div>
	                    
	                </div>
	            </div>
	        </div>
	    </section>

		

		</div>

		)
	}
}