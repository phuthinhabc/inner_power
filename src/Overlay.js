import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Overlay extends Component
{
    render()
    {
        return(
            <div className='position-absolute w-100 h-100'></div>
        )
    }
}
export default Overlay