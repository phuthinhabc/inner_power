import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactform.css'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class Form extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            inputName: '',
            inputEmail: '',
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(event) 
    {
        this.setState({inputName: event.target.value});
    }

    handleChangeEmail(event) 
    {
        this.setState({inputEmail: event.target.value});
    }

    handleSubmit()
    {
        alert(`${this.state.inputName} + ${this.state.inputEmail}`)
    }

    render()
    {
        const animateOnce = true;
        return(
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={animateOnce}>
                <div id="my-form" className="container py-3">
                    <h2>SIGNUP NEWSLETTER</h2>
                    <p>Get discounts for you personal services right now</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input id="inputName" className="transparent-input" type="text" placeholder="Name" value={this.state.inputName} onChange={this.handleChangeName}/>
                        </label>
                        <br/>
                        <label>
                            <input id="inputEmail" className="transparent-input" type="email" placeholder="Email" value2={this.state.inputEmail} onChange={this.handleChangeEmail}/>
                        </label>
                        <br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </ScrollAnimation>
        )
    }
}

export default Form