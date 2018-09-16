import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Welcome.css';

class Welcome extends Component
{
    render()
    {
        return(
            <div className='container py-2'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='w-75 rounded' src={require('./image/welcome-indexPage-1.jpg')} alt=''/>
                    </div>
                    <div id='my-welcome-content' className='col-md-6'>
                        <div className='text-justify'>
                            <h2>This is header of Welcome</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum nesciunt, perferendis reprehenderit libero nam corporis earum commodi alias perspiciatis consequatur deleniti cumque maxime, officia magnam, omnis similique tempora velit.</p>
                        </div>
                        <button className='btn btn-primary w-25'>LET US BEGIN</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;