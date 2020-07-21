import React, {Component} from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';


export default class Listing extends Component{
	render(){
		return(

		<div>

		<Header></Header>

		    <div class="breadcrumb-option set-bg" data-setbg="img/breadcrumb-bg.jpg">
		        <div class="container">
		            <div class="row">
		                <div class="col-lg-12 text-center">
		                    <div class="breadcrumb__text">
		                        <h2>Car Listing</h2>
		                        <div class="breadcrumb__links">
		                            <a href="./index.html"><i class="fa fa-home"></i> Home</a>
		                            <span>About</span>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>

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
		                                    <option value="">Acura</option>
		                                    <option value="">Audi</option>
		                                    <option value="">Bentley</option>
		                                    <option value="">BMW</option>
		                                    <option value="">Bugatti</option>
		                                </select>
		                                <select>
		                                    <option data-display="Model">Select Model</option>
		                                    <option value="">Q3</option>
		                                    <option value="">A4 </option>
		                                    <option value="">AVENTADOR</option>
		                                </select>
		                                <select>
		                                    <option value="">Body Style</option>
		                                    <option value="">Option 1</option>
		                                    <option value="">Option 2</option>
		                                </select>
		                                <select>
		                                    <option value="">Condition</option>
		                                    <option value="">First Hand</option>
		                                    <option value="">Second Hand</option>
		                                </select>
		                                <select>
		                                    <option value="">Transmisson</option>
		                                    <option value="">Bluetooth</option>
		                                    <option value="">WiFi</option>
		                                </select>
		                                <select>
		                                    <option value="">Mileage</option>
		                                    <option value="">27</option>
		                                    <option value="">20</option>
		                                    <option value="">15</option>
		                                    <option value="">10</option>
		                                </select>
		                                <select>
		                                    <option value="">Engine</option>
		                                    <option value="">BS3</option>
		                                    <option value="">BS4</option>
		                                    <option value="">BS5</option>
		                                    <option value="">BS6</option>
		                                </select>
		                                <select>
		                                    <option value="">Colors</option>
		                                    <option value="">Red</option>
		                                    <option value="">Blue</option>
		                                    <option value="">Black</option>
		                                    <option value="">Yellow</option>
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
		                        <div class="col-lg-4 col-md-4">
		                            <div class="car__item">
		                                <div class="car__item__pic__slider owl-carousel">
		                                    <img src="assets/img/cars/car-1.jpg" alt=""/>
		                                    <img src="assets/img/cars/car-8.jpg" alt=""/>
		                                </div>
		                                <div class="car__item__text">
		                                    <div class="car__item__text__inner">
		                                        <div class="label-date">2016</div>
		                                        <h5><a href="#">Porsche cayenne turbo s</a></h5>
		                                        <ul>
		                                            <li><span>35,000</span> mi</li>
		                                            <li>Auto</li>
		                                            <li><span>700</span> hp</li>
		                                        </ul>
		                                    </div>
		                                    <div class="car__item__price">
		                                        <span class="car-option">For Rent</span>
		                                        <h6>$218<span>/Month</span></h6>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                        
		                    </div>
		                    <div class="pagination__option">
		                        <a href="#" class="active">1</a>
		                        <a href="#">2</a>
		                        <a href="#">3</a>
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