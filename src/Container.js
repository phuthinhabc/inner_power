import React, { Component } from 'react';
import { Route, withRouter, HashRouter } from 'react-router-dom';
import {Provider} from 'mobx-react';
import Storage from './stores/Storage.js';

import './Container.css'

import Navbar from './Navbar.js';
import Carousel from './Carousel.js';
import Product from './product.js';
import Coach from './coach.js';
import Form from './contactform.js';
import Footer from './footer.js';
import DemoComponent from './demo.js';
import Welcome from './Welcome.js';
import OverViewProduct from './ProductOverView.js'
import ProductValue from './ProductValue.js'

class indexPage extends Component
{
  render()
  {
    return(
      <div>
        <Navbar active="Home"/>
        <Carousel id="my-homepage-carousel" value="homepage" srcImg='indexPage'/>
        <Welcome />
        <Product />
        <Coach />
        <Form />
        <Footer />
      </div>
    )
  }
}

class ProductPage extends Component
{
  render()
  {
    return(
      <div>
        <Navbar active="Products"/>
        <Carousel id="my-aboutpage-carousel" value="aboutpage" srcImg='productPage'/>
        <OverViewProduct />
        <ProductValue />
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
      </div>
    )
  }
}

class Demo extends Component
{
  render()
  {
    return(
      <div>
        <Navbar active="Demo"/>
        <DemoComponent />
      </div>
    )
  }
}

function Container()
{
    return(
      <Provider StorageStore={Storage}>
        <HashRouter>
          <div>
            <Route exact path="/" component={indexPage} />
            <Route path="/Home" component={indexPage} />
            <Route path="/Products" component={ProductPage} />
            <Route path="/Contact" component={ContactPage} />
            <Route path="/Demo" component={Demo} />
          </div>
        </HashRouter>
      </Provider>
    )
}

export default withRouter(Container);