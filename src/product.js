import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import Header from './header.js'

function Content(props)
{
    return(
        <tr className="bg-light row py-2">
            <td className="col-md-5"><img className="w-100" src={require(`${props.imgUrl}`)} alt="img_of_product"/></td>
            <td className="col-md-7 text-justify">
                <h2>{props.header}</h2>
                <p>{props.content}</p>
            </td>
        </tr>
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
                <table>
                    <tbody>
                        {productRender}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Product