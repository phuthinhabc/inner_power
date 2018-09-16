import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js'
import ScrollAnimation from 'react-animate-on-scroll'; 
import "animate.css/animate.min.css";
import {observer, inject} from 'mobx-react';

function Bindcoach(props)
{
    const animateOnce = true;
    return(
        <div className="col-md-4">
            <ScrollAnimation animateIn="fadeIn" animateOnce={animateOnce}>
                <img className="w-75" src={require(`${props.imgUrl}`)} alt="coach"/>
                <p>{props.content}</p>
            </ScrollAnimation>
        </div>
    )
}

function HeaderContent()
{
    return(
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
    )
}

@inject('StorageStore')
@observer
class Coach extends Component
{
    render()
    {
        const CoachStore = this.props.StorageStore;
        const renderCoach = CoachStore.Coach.map((obj) => {return(<Bindcoach key={obj.key} content={obj.content} imgUrl={obj.imgUrl}/>)});
        return(
            <div className="container">
                <Header header="OUR COACHES" content={<HeaderContent />}/>
                <div className="row">
                    {renderCoach}
                </div>
            </div>
        )
    }
}

export default Coach

