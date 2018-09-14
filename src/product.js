import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import Header from './header.js'
import ScrollAnimation from 'react-animate-on-scroll';

function Content(props)
{
    const animateOnce = true;
    return(
        <div className="rounded my-2 row pl-2 my-ProductElement">
            <ScrollAnimation animateOnce = {animateOnce} animateIn="slideInLeft" className="col-md-4"><img className="w-100" src={require(`${props.imgUrl}`)} alt="img_of_product"/></ScrollAnimation>
            <ScrollAnimation animateOnce={animateOnce} animateIn="slideInRight" id="childDemo" className="position-relative col-md-8">
                <div className="text-justify px-2">
                    <h2>{props.header}</h2>
                    <p>{props.content}</p>
                </div>
                <div className="rounded position-absolute"></div>
            </ScrollAnimation>
        </div>
    )
}

function HeaderContent()
{
    return(
        <div>
            <p>This is content of header</p>
        </div>
    )
}

class Product extends Component 
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            content:[
                {
                    key: 1,
                    name: 'Biometric fingerprints',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem corporis ullam, consequatur tempora dolorum architecto, laborum enim id sequi. Odio quos provident laboriosam!',
                    imgUrl: './image/img_1.jpg'
                },
                {
                    key: 2,
                    name: 'Yoga for kids',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem corporis ullam, consequatur tempora dolorum architecto, laborum enim id sequi. Odio quos provident laboriosam!',
                    imgUrl: './image/img_2.jpg'
                },
                {
                    key: 3,
                    name: 'Parenting Coach',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem corporis ullam, consequatur tempora dolorum architecto, laborum enim id sequi. Odio quos provident laboriosam!',
                    imgUrl: './image/img_3.jpg'
                },
                {
                    key: 4,
                    name: 'Right brain',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem corporis ullam, consequatur tempora dolorum architecto, laborum enim id sequi. Odio quos provident laboriosam!',                
                    imgUrl: './image/img_4.jpg'
                },
                    
            ],
        }
    }
    render()
    {
        const productRender = this.state.content.map((obj) => {return(<Content key={obj.key} header={obj.name} content={obj.content} imgUrl={obj.imgUrl}/>)});
        return(
            <div className="container py-3">
                <Header header="OUR PRODUCTS" content={<HeaderContent/>}/>
                <div className="">
                    <div>
                        {productRender}
                    </div>
                </div>
            </div>
        )
    }
}

export default Product