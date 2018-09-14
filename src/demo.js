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
    
    componentDidMount()
    {
        this.MyInterval = setInterval(()=>{document.getElementById('displayIDDemoh1').style.opacity = '1'; clearInterval(this.MyInterval)},0)
    }

    render()
    {
        window.onload = this.DemoforLoad;
        return(
            <div>
                <p id='positionX'></p>
                <div id="mother">
                    <div id="child1" onMouseMoveCapture={this.handleChange}></div>
                    <div id="child2" onMouseMoveCapture={this.handleChange}></div>
                </div>
                <div id="displayIDDemo">
                    <h1 id="displayIDDemoh1" className="">Hello</h1>
                </div>
            </div>
        )
    }
}

export default DemoComponent