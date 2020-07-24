import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Listing.css";

export default class Listing extends Component{

	constructor(props) {
    super(props);


    this.state = {
   	  response: "",
      filterResponse: "",
      pageValue: "1",
      filterBrandValue : "",
      filterModelValue : "",
      filterColorValue : "",
      filterConditionValue : "",
      filterMileageValue : "",
      filterEngineValue : "",
      filterOrderValue : "-price",
      
    };

  }

  componentDidMount() {
    this.fetchData();
  }

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
        `http://3.128.190.113/api/car/p_list?page=${this.state.pageValue}&brand=${this.state.filterBrandValue}&model=${this.state.filterModelValue}&color=${this.state.filterColorValue}&condition=${this.state.filterConditionValue}&mileage=${this.state.filterMileageValue}&engine=${this.state.filterEngineValue}&ordering=${this.state.filterOrderValue}`
      );
      const filterResponse = await fetch(
        `http://3.128.190.113/api/carlist/filter`
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
	      return "Loading response...";
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
		                            <form action="#">
		                                <input type="text" placeholder="Search..." />
		                                <button type="submit"><i class="fa fa-search"></i></button>
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
								        <div class="card-header">Engine</div>
								        {filterResponse.filter_EngineData.map((filterResponse) =>(
								        <div class="card-inner">
								          <p class="card-text"><a href="#" onClick={() => this.filterEngineClick(filterResponse.id)}>{filterResponse.engine}</a></p>
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
		                            <div class="col-lg-6 col-md-6">
		                                <div class="car__filter__option__item">
		                                    <h6>Show On Page</h6>
		                                    <select>
		                                        <option value="">9 Car</option>
		                                        <option value="">15 Car</option>
		                                        <option value="">20 Car</option>
		                                    </select>
		                                </div>
		                            </div>
		                            <div class="col-lg-6 col-md-6">
		                                <div class="car__filter__option__item car__filter__option__item--right">
		                                    <h6>Sort By</h6>
		                                    <select>
		                                        <option value="">Price: Highest Fist</option>
		                                        <option value="">Price: Lowest Fist</option>
		                                    </select>
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
		                                        <div class="label-date">2016</div>

		                                        <Link to={{
				                                  pathname: `/detail/${response.slug}`,
				                                  response:response
				                                }}>
				                                    <h5>{response.title}</h5>
				                                </Link>

		                                        <ul>
		                                            <li><span>35,000</span> mi</li>
		                                            <li>Auto</li>
		                                            <li><span>700</span> hp</li>
		                                        </ul>
		                                    </div>
		                                    <div class="car__item__price">
		                                        <span class="car-option">For Rent</span>
		                                        <h6>${response.price}<span>/Month</span></h6>
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