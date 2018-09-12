import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends Component
{
    render()
    {
        return(
            <div className="container py-2">
                <h2 id={this.props.HeaderId}>{this.props.header}</h2>
                <div id={this.props.ContentId}>{this.props.content}</div>
                <hr/>
            </div>
        )
    }
}

export default Header
