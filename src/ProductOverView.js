import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reveal from 'react-reveal/Reveal';

import Header from './header.js';
import './ProductOverView.css';

function OverViewProductContent()
{
    return(
        <div>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
        </div>
    )
}

class OverViewProduct extends Component
{
    render()
    {
        return(
                <div className='container py-2'>
                    <Reveal effect='shake'>
                        <div className='row mb-5'>
                            <div className='col-md-6'>
                                <img className='w-75' src={require('./image/OverView-productPage-1.jpg')} alt=''/>
                            </div>
                            <div id='my-overview-content' className='col-md-6 bg-light p-5 text-justify'>
                                <h2>OverView</h2>
                                <hr/>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </Reveal>
                    <Header header="OUR PRODUCTS" content={<OverViewProductContent />}/>
                </div>
        )
    }
}

export default OverViewProduct;