import React, { Component } from 'react';
import Counter from './Counter';


class Product extends Component
{
    render()
    {
        const {product} = this.props
        return(
            <div className="product-wrapper">
                                <div className="product">
                                    <img src={product.image} alt="" className="product-image" />
                                    {product.name}
                                    {/* <div className="counter" role="group">
                                        <button type="button" onClick={this.decrementCount(product.name)} className="counter-btn">-</button>
                                        <div className="counter-text">{this.state.productsCount[product.name] || 0}</div>
                                        <button type="button" onClick={this.incrementCount(product.name)} className="counter-btn">+</button>
                                    </div> */}
                                    <Counter incrementFn={ this.props.incrementCount(product.name)}
                                             decerimentFn={ this.props.decrementCount(product.name)}
                                             count={this.props.count} />
                                </div>
                            </div>
        )
    }
}

export default Product;