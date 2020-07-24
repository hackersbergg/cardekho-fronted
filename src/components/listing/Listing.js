import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Listing extends Component{

	constructor(props) {
    super(props);


    this.state = {
      value: "1",
      filterValue : "",
      response: "",
      filterResponse: "",
    };

  }

  componentDidMount() {
    this.fetchData();
  }

  pageClick = (page) => {
    this.setState({value: page}, this.fetchData);
  };

  filterClick = (filter) => {
    this.setState({filterValue: filter}, this.fetchData);
  };


  fetchData = async () => {

    try {
      const response = await fetch(
        `http://3.128.190.113/api/car/p_list?page=${this.state.value}&min_price=${this.state.filterValue}&max_price=${this.state.filterValue}&color=${this.state.filterValue}&brand=${this.state.filterValue}&model=${this.state.filterValue}&condition=${this.state.filterValue}&mileage=${this.state.filterValue}&engine=${this.state.filterValue}`
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

		                        

		                        <div class="car__filter">
		                            <h5>Car Filter</h5>
		                            <form action="#">
		                            

		                                <select>
		                                    <option data-display="Brand">Select Brand</option>
		                                    {filterResponse.filter_BrandData.map((filterResponse) =>(
		                                    <option value="" onClick={() => this.filterClick(1)}>{filterResponse.brand}</option>
		                                    
		                                    ))}
		                                </select>
		                           

		                                <select>
		                                    <option data-display="Model">Select Model</option>
		                                    {filterResponse.filter_ModelData.map((filterResponse) =>(
		                                    <option value="">{filterResponse.model}</option>
		                                     ))}
		                                </select>
		
		                                <select>
		                                    <option value="">Condition</option>
		                                    {filterResponse.filter_ConditionData.map((filterResponse) =>(
		                                    <option value="">{filterResponse.condition}</option>
		                                    ))}
		                                </select><br/>
		                                <select>
		                                    <option value="">Mileage</option>
		                                    {filterResponse.filter_MileageData.map((filterResponse) =>(
		                                    <option value="">{filterResponse.mileage}</option>
		                                    ))}
		                                </select><br/>
		                                <select>
		                                    <option value="">Engine</option>
		                                    {filterResponse.filter_EngineData.map((filterResponse) =>(
		                                    <option value="">{filterResponse.engine}</option>
		                                    ))}
		                                </select><br/>
		                                <select>
		                                    <option value="">Colors</option>
		                                    {filterResponse.filter_ColorData.map((filterResponse) =>(
		                                    <option value="">{filterResponse.color}</option>
		                                    ))}
		                                </select>
		                                <div class="filter-price">
		                                    <p>Price:</p>
		                                    <div class="price-range-wrap">
		                                        <div class="filter-price-range"></div>
		                                        <div class="range-slider">
		                                            <div class="price-input">
		                                                <input type="text" id="filterAmount" />
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div class="car__filter__btn">
		                                    <button type="submit" class="site-btn">Reset FIlter</button>
		                                </div>
		                            </form>
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