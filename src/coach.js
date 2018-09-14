import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js'
import ScrollAnimation from 'react-animate-on-scroll'; 
import "animate.css/animate.min.css";

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

class Coach extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            coachinfo:[
                {
                    key: 1,
                    imgUrl: './image/trainer-img1.jpg',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem'
                },
                {
                    key: 2,
                    imgUrl: './image/trainer-img2.jpg',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem'
                },
                {
                    key: 3,
                    imgUrl: './image/trainer-img3.jpg',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem'
                }
            ],
        }
    }
    render()
    {
        const renderCoach = this.state.coachinfo.map((obj) => {return(<Bindcoach key={obj.key} content={obj.content} imgUrl={obj.imgUrl}/>)});
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

