import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Listing.css";
import Preload from "../common/PreLoad.js";

export default class Listing extends Component{

	constructor(props) {
    super(props);


    this.state = {
   	  response: "",
      filterResponse: "",
      searchValue: "",
      pageValue: "1",
      filterBrandValue : "",
      filterModelValue : "",
      filterColorValue : "",
      filterConditionValue : "",
      filterMileageValue : "",
      filterEngineValue : "",
      filterOrderValue : "",
      
    };

  }

  componentDidMount() {
    this.fetchData();
  }

  searchClick = (search) => {
    this.setState({searchValue: search}, this.fetchData);
  };

  pageClick = (page) => {
    this.setState({pageValue: page}, this.fetchData);
  };

  filterBrandClick = (filter) => {
    this.setState({filterBrandValue: filter}, this.fetchData);
  };

  filterModelClick = (filter) => {
    this.setState({filterModelValue: filter}, this.fetchData);
  };

  filterConditionClick = (filter) => {
    this.setState({filterConditionValue: filter}, this.fetchData);
  };

  filterMileageClick = (filter) => {
    this.setState({filterMileageValue: filter}, this.fetchData);
  };

  filterEngineClick = (filter) => {
    this.setState({filterEngineValue: filter}, this.fetchData);
  };

  filterColorClick = (filter) => {
    this.setState({filterColorValue: filter}, this.fetchData);
  };

  filterOrderClick = (filter) => {
    this.setState({filterOrderValue: filter}, this.fetchData);
  };

  fetchData = async () => {

    try {
      const response = await fetch(
        `http://localhost:8000/api/car/p_list?search=${this.state.searchValue}&page=${this.state.pageValue}&brand=${this.state.filterBrandValue}&model=${this.state.filterModelValue}&color=${this.state.filterColorValue}&condition=${this.state.filterConditionValue}&mileage=${this.state.filterMileageValue}&engine=${this.state.filterEngineValue}&ordering=${this.state.filterOrderValue}`
      );
      const filterResponse = await fetch(
        `http://localhost:8000/api/carlist/filter`
      );
      const JsonResponse = await response.json();
      const JsonFilterResponse = await filterResponse.json();
      this.setState({ response: JsonResponse });
      this.setState({ filterResponse: JsonFilterResponse });
    } 
    catch (error) {
      console.log(error);
    }
  };

 

	render(){

		const { response } = this.state;
		const { filterResponse } = this.state;

	    if (!response ) {
	      return (
	      		<Preload></Preload>
	      	);
	    }
	    if (!filterResponse ) {
	      return "Loading filterResponse...";
	    }

		return(

		<div>

		    <section class="car spad">
		        <div class="container">
		            <div class="row">
		                <div class="col-lg-3">
		                    <div class="car__sidebar">
		                        <div class="car__search">
		                            <h5>Car Search</h5>
		                            <form>
		                                <input type="text" placeholder="Search..." />
		                                <button type="submit"><i class="fa fa-search" onClick={() => this.searchClick('01')}></i></button>
		                            </form>
		                        </div>

		                         <div class="container col-md-4">

								    <div id="names">

								      <div class="card mt-4">

								      <div class="card-header">Brand</div>
								        {filterResponse.filter_BrandData.map((filterResponse) =>(
								        <div class="card-inner">
								          <p class="card-text"><a href="#" onClick={() => this.filterBrandClick(filterResponse.id)}>{filterResponse.brand}</a></p>
								        </div>
								        ))}
								      </div>

								      <div class="card">
								        <div class="card-header">Model</div>
								        {filterResponse.filter_ModelData.map((filterResponse) =>(
								        <div class="card-inner">
								          <p class="card-text"><a href="#" onClick={() => this.filterModelClick(filterResponse.id)}>{filterResponse.model}</a></p>
								        </div>
								        ))}
								      </div>

								      <div class="card">
								        <div class="card-header">Condition</div>
								        {filterResponse.filter_ConditionData.map((filterResponse) =>(
								        <div class="card-inner">
								          <p class="card-text"><a href="#" onClick={() => this.filterConditionClick(filterResponse.id)}>{filterResponse.condition}</a></p>
								        </div>
								        ))}
								      </div>

								      <div class="card">
								        <div class="card-header">Mileage</div>
								        {filterResponse.filter_MileageData.map((filterResponse) =>(
								        <div class="card-inner">
								          <p class="card-text"><a href="#" onClick={() => this.filterMileageClick(filterResponse.id)}>{filterResponse.mileage}</a></p>
								        </div>
								        ))}
								      </div>


								      <div class="card">
								        <div class="card-header">Color</div>
								        {filterResponse.filter_ColorData.map((filterResponse) =>(
								        <div class="card-inner">
								          <p class="card-text"><a href="#" onClick={() => this.filterColorClick(filterResponse.id)}>{filterResponse.color}</a></p>
								        </div>
								        ))}
								      </div>

								      <br/>

								    <div class="car__filter__btn">
                                    <a href="/list"><button type="submit" class="site-btn">Reset FIlter</button></a>
                                	</div>

								    </div>

								  </div>

		                    </div>
		                    	
		                </div>
		                <div class="col-lg-9">

				            <div class="car__filter__option">
		                        <div class="row">
		                           
		                            <div class="col-lg-12 col-md-6">
		                                <div class="car__filter__option__item car__filter__option__item--right">
		                               
		                                    <div class="dropdown show">
											  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											    Sort By
											  </a>

											  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
											    <a class="dropdown-item" href="#" onClick={() => this.filterOrderClick('id')}>Ascending</a>
											    <a class="dropdown-item" href="#" onClick={() => this.filterOrderClick('-id')}>Descending</a>
											
											  </div>
											</div>
		                                </div>
		                            </div>	                             

		                        </div>
		                    </div>

		                    <div class="row">

		                    {response.results.map((response) =>(

		                        <div class="col-lg-4 col-md-4">
		                            <div class="car__item">
		                                <div class="car__item__pic__slider">
		                                <Link to={{
                                          pathname: `/detail/${response.slug}`,
                                          response:response
                                        	}}>
		                                  <img src={response.product_image} alt="car"/>
		                                </Link>
		                                
		                                </div>
		                                <div class="car__item__text">
		                                    <div class="car__item__text__inner">
		                                        <div class="label-date">{response.year}</div>

		                                        <Link to={{
				                                  pathname: `/detail/${response.slug}`,
				                                  response:response
				                                }}>
				                                      <h5><a href="#">{response.title}</a></h5>
				                                </Link>

		                                        <ul>
		                                            <li>{response.model}</li>
		                                            <li>{response.mileage}<span>/ kmpl</span></li>

		                                        </ul>
		                                    </div>
		                                    <div class="car__item__price">
		                                        <span class="car-option sale">For Rent</span>
		                                        <h6>{response.brand}<span></span></h6>
		                                        
		                                    </div>
		                                </div>
		                            </div>
		                        </div>

		                        ))}
		                        
		                    </div>
		                    <div class="pagination__option">
		                        <a href="#" class="active" onClick={() => this.pageClick(1)}>1</a>
		                        <a href="#" class="active" onClick={() => this.pageClick(2)}>2</a>
		                        <a href="#" class="active" onClick={() => this.pageClick(3)}>3</a>
		                        <a href="#"><span class="arrow_carrot-2right"></span></a>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>


		</div>

			)
	}
}