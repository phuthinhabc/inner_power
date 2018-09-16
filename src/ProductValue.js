import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer, inject} from 'mobx-react';
import Reveal from 'react-reveal';

@inject('StorageStore')
@observer
class ProductValue extends Component
{
    render()
    {
        const ProductStorage = this.props.StorageStore;
        const Render = ProductStorage['value_productPage'].map((obj)=>(
            <Reveal effect={obj.animation}>
                <div key={obj.key}>
                    <img className='w-100' src={require(`${obj['imgUrl']}`)} alt='' />
                    <p>{obj['content']}</p>
                </div>
            </Reveal>
        ))
        return(
            <div className='container py-2'>
                {Render}
            </div>
        )   
    }
}

export default ProductValue;