import React, { Component } from 'react';


import Header from "../common/Header.js"
import Footer from "../common/Footer.js"

import Home from "../home/Home.js"



const App = (props) => (
  <div>
    <Header></Header>
    <Home {...props}></Home>
    <Footer></Footer>
  </div>
);

export default App;