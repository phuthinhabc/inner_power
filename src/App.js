import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js'
import Carousel from './Carousel.js'
import Product from './product.js'
import Coach from './coach.js'
import Form from './contactform.js'
import Footer from './footer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class indexPage extends Component
{
  render()
  {
    return(
      <div>
        <Navbar active="Home"/>
        <Carousel id="my-homepage-carousel" value="homepage"/>
        <Product />
        <Coach />
        <Form />
      </div>
    )
  }
}

class FeaturePage extends Component
{
  render()
  {
    return(
      <div>
        <Navbar active="Features"/>
        <Carousel id="my-aboutpage-carousel" value="aboutpage"/>
      </div>
    )
  }
}

class ContactPage extends Component
{
  render()
  {
    return(
      <div>
        <Navbar active="Contact"/>
        <Carousel id="" value="contactpage"/>
      </div>
    )
  }
}


class App extends Component {
  
  render() {  
    return (
      <Router>
        <div className="App">
          <Route exact path="" component={indexPage} />
          <Route path="/Home" component={indexPage} />
          <Route path="/Features" component={FeaturePage} />
          <Route path="/Contact" component={ContactPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
