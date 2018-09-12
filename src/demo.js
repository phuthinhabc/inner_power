import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './demo.css'

class DemoComponent extends Component
{

    handleChange(event) 
    {
        var x=event.clientX;
        var Width = window.innerWidth;
        document.getElementById('positionX').innerHTML= x;
        x=Width - x
        document.getElementById('child1').style.width = `${x}px`;
    }

    render()
    {
        return(
            <div>
                <p id='positionX'></p>
                <p id='positionY'></p>
                <div id="mother">
                    <div id="child1" onMouseMoveCapture={this.handleChange}></div>
                    <div id="child2" onMouseMoveCapture={this.handleChange}></div>
                </div>
            </div>
        )
    }
}

export default DemoComponent