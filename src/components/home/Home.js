import React, { Component } from "react";
import {Link} from 'react-router-dom';


export default class Home extends Component{

  constructor(props) {
    super(props);


    this.state = {
      response: "",
    };

  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData = async () => {

    try {
      const response = await fetch(
        `http://3.128.190.113/api-2/`
      );
      const JsonResponse = await response.json();
      this.setState({ response: JsonResponse });
    } 
    catch (error) {
      console.log(error);
    }
  };


  render(){

    const {response} = this.state;

    if (!response) {
      return "Loading...";
    }


    return(

      <div>


 



        <section class="services spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <span>Our Services</span>
                            <h2>What We Offers</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="services__item">
                            <img src="assets/img/services/services-1.png" alt=""/>
                            <h5>Rental A Cars</h5>
                            <p>Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo
                                viverra maecenas.</p>
                            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="services__item">
                            <img src="assets/img/services/services-2.png" alt=""/>
                            <h5>Buying A Cars</h5>
                            <p>Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo
                                viverra maecenas.</p>
                            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="services__item">
                            <img src="assets/img/services/services-3.png" alt=""/>
                            <h5>Car Maintenance</h5>
                            <p>Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo
                                viverra maecenas.</p>
                            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="services__item">
                            <img src="assets/img/services/services-4.png" alt=""/>
                            <h5>Support 24/7</h5>
                            <p>Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo
                                viverra maecenas.</p>
                            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {response.homefeature_productData.map((response) =>(
  
        <section class="feature spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="feature__text">
                            <div class="section-title">
                                <span>Our Feature</span>
                                <h2>{response.title}</h2>
                            </div>
                            <div class="feature__text__desc">
                                <p>{response.description}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                            <div class="feature__text__btn">
                                <a href="#" class="primary-btn">About Us</a>
                                <a href="#" class="primary-btn partner-btn">Our Partners</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 offset-lg-4">
                        <div class="row">
                            <div class="col-lg-6 col-md-4 col-6">
                                <div class="feature__item">
                                    <div class="feature__item__icon">
                                        <img src="assets/img/feature/feature-1.png" alt=""/>
                                    </div>
                                    <h6>Engine</h6>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-4 col-6">
                                <div class="feature__item">
                                    <div class="feature__item__icon">
                                        <img src="assets/img/feature/feature-2.png" alt=""/>
                                    </div>
                                    <h6>Turbo</h6>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-4 col-6">
                                <div class="feature__item">
                                    <div class="feature__item__icon">
                                        <img src="assets/img/feature/feature-3.png" alt=""/>
                                    </div>
                                    <h6>Colling</h6>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-4 col-6">
                                <div class="feature__item">
                                    <div class="feature__item__icon">
                                        <img src="assets/img/feature/feature-4.png" alt=""/>
                                    </div>
                                    <h6>Suspension</h6>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-4 col-6">
                                <div class="feature__item">
                                    <div class="feature__item__icon">
                                        <img src="assets/img/feature/feature-5.png" alt=""/>
                                    </div>
                                    <h6>Electrical</h6>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-4 col-6">
                                <div class="feature__item">
                                    <div class="feature__item__icon">
                                        <img src="assets/img/feature/feature-6.png" alt=""/>
                                    </div>
                                    <h6>Brakes</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        ))}


        

        <section class="car spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <span>Our Car</span>
                            <h2>Best Vehicle Offers</h2>
                        </div>
                        <ul class="filter__controls">
                            <li class="active" data-filter="*">Most Researched</li>
                            <li data-filter=".sale">Latest on sale</li>
                        </ul>
                    </div>
                </div>
                <div class="row car-filter">

                {response.home_productData.map((response) =>(

                    <div class="col-lg-3 col-md-4 col-sm-6 mix">
                        <div class="car__item">
                            <div class="car__item__pic__slider">
                                  <Link to={{
                                          pathname: `/detail/${response.product_slug}`,
                                          response:response
                                        }}>
                                  <img src="assets/img/cars/car-1.jpg" alt="car"/>
                                 </Link>
                            </div>
                            <div class="car__item__text">
                                <div class="car__item__text__inner">
                                    <div class="label-date">2016</div>
                                    
                                    <Link to={{
                                          pathname: `/detail/${response.product_slug}`,
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
                                    <h6>${response.product_price}<span>/Month</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
  
                </div>
            </div>
        </section>

      



        {response.home_peoplechooseData.map((response) =>(

        <section class="chooseus spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="chooseus__text">
                            <div class="section-title">
                                <h2>Why People Choose Us</h2>
                                <p>Duis aute irure dolorin reprehenderits volupta velit dolore fugiat nulla pariatur
                                    excepteur sint occaecat cupidatat.</p>
                            </div>
                            <ul>
                                <li><i class="fa fa-check-circle"></i> Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.</li>
                                <li><i class="fa fa-check-circle"></i> Integer et nisl et massa tempor ornare vel id orci.
                                </li>
                                <li><i class="fa fa-check-circle"></i> Nunc consectetur ligula vitae nisl placerat tempus.
                                </li>
                                <li><i class="fa fa-check-circle"></i> Curabitur quis ante vitae lacus varius pretium.</li>
                            </ul>
                            <a href="#" class="primary-btn">About Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chooseus__video set-bg">
                <img src="assets/img/chooseus-video.png" alt=""/>
                <a href="https://www.youtube.com/watch?v=Xd0Ok-MkqoE"
                    class="play-btn video-popup"><i class="fa fa-play"></i></a>
            </div>
        </section>

        ))}




        <section class="latest spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <span>Our Blog</span>
                            <h2>Latest News Updates</h2>
                            <p>Sign up for the latest Automobile Industry information and more. Duis aute<br /> irure
                                dolorin reprehenderits volupta velit dolore fugiat.</p>
                        </div>
                    </div>
                </div>
                <div class="row">

                 {response.home_blogData.map((response) =>(

                    <div class="col-lg-4 col-md-6">
                        <div class="latest__blog__item">
                            <img src="assets/img/latest-blog/lb-3.jpg"/>
                                <ul>
                                    <li>By {response.author_name}</li>
                                    <li>{response.date}</li>
                                </ul>
                           
                            <div class="latest__blog__item__text">
                                <h5>{response.title}</h5>
                                <p>{response.description}</p>
                                <a href="#">View More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    ))}

                </div>
            </div>
        </section>

      </div>

      )
  }
}