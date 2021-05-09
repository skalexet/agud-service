import React, { Component } from 'react'
import { AppContext } from '../contexts/AppContext'

export default class ParticularProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
        }
    }

    static contextType = AppContext;

    render() {
        const { products, getParticularProduct } = this.context;
        const product = getParticularProduct(products, this.state.id);

        return (
            <>
                <div className='particular-product'>
                    <strong>{product.title}</strong>
                    <img src={product.img}></img>
                    <small>${product.price}</small>
                </div>
            </>
        )
    }
}
