import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Carousel.css';
import React, {Component} from 'react';
import Reveal from 'react-reveal';

function CarouselHomepageContent()
{
    return(
        <div>
            <p>Hello, You are welcome to</p>
            <h1>INNER POWER</h1>
            <p>trusted health advice centre</p>
        </div>
    )
}
function CarouselAboutpageContent()
{
    return(
        <div>
            <h1>INNER POWER</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
    )
}

class Carousel extends Component
{
    render()
    {
        let content;
        if (this.props.value === 'homepage')
        {
            content = <CarouselHomepageContent/>
        }
        else if (this.props.value === 'aboutpage')
        {
            content = <CarouselAboutpageContent/>
        }
        return(
            <Reveal effect="fadeInLeft">
                <div className="container">
                    <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={require("./image/home-bg-slider-img1.jpg")} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={require("./image/home-bg-slider-img2.jpg")} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={require("./image/home-bg-slider-img3.jpg")} alt="Third slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={require("./image/home-bg-slider-img4.jpg")} alt="Fourth slide"/>
                            </div>
                        </div>
                        <div id={this.props.id} className="text-center position-absolute">
                            {content}
                        </div>  
                    </div>
                </div>
            </Reveal>
        )
    }
}

export default Carousel;