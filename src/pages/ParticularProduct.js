import React, { Component, useEffect } from 'react'
import { AppContext } from '../contexts/AppContext'
import Product from '../components/Product'

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
                <h1>{product.title}</h1>
                <img src={product.img}></img>
                <small>${product.price}</small>
            </>
        )
    }
}
