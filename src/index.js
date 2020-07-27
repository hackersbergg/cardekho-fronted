import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from "./components/home/App.js";
import Listing from "./components/listing/ListingApp.js";
import ListingDetail from "./components/listing/ListDetail.js";

import BlogList from "./components/blog/BlogList.js";
import BlogDetail from "./components/blog/BlogDetail.js";

import ProductBook from "./components/listing/productBook.js";

import AboutUs from "./components/static/About.js";
import ContactUs from "./components/static/Contact.js";
import Services from "./components/static/Service.js";
import BookConfirmed from "./components/static/bookingConfirm.js";
import ContactConfirmed from "./components/static/contactConfirm.js";
import NotFound from "./components/static/404.js";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
      
        <Route exact path="/" component={Home} />
        <Route path="/list" component={Listing} />
        <Route path="/detail/:slug" component={ListingDetail} />
        <Route path="/blog" component={BlogList} />
        <Route path="/blogdetail/:slug" component={BlogDetail} />
        <Route path="/productbook" component={ProductBook} />

        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/service" component={Services} />
        <Route path="/bookconfirmed" component={BookConfirmed} />
        <Route path="/thankyou" component={ContactConfirmed} />
        <Route path="*" component={NotFound} status={404} />

      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));


