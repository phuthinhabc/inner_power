import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import './Container.css'

import Navbar from './Navbar.js';
import Carousel from './Carousel.js';
import Product from './product.js';
import Coach from './coach.js';
import Form from './contactform.js';
import Footer from './footer.js';
import DemoComponent from './demo.js';

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
        <Footer />
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

function Container({location})
{
    return(
        <Wrapper >
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames={'fade'}
            > 
              <section id="route-section">
                <Switch location={location}>
                    <Route exact path="/" component={indexPage} />
                    <Route path="/Home" component={indexPage} />
                    <Route path="/Features" component={FeaturePage} />
                    <Route path="/Contact" component={ContactPage} />
                    <Route path="/Demo" component={Demo} />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </Wrapper>
    )
}
const Wrapper = styled.div`
  .fade-enter 
  {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active 
  {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit 
  {
    opacity: 1;
  }

  .fade-exit.fade-exit-active 
  {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group 
  {
    position: relative;
  }
  section.route-section 
  {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`

export default withRouter(Container);