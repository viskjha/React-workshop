import React from 'react';
import { products } from './mockData/products';
import Counter from './components/Counter';
import Product from './components/Product';

class App extends React.Component {
    state = {
        productsCount: {},
        displayCart: false
    }

    incrementCount = (productName) => () => {
        const oldProductsCount = this.state.productsCount;
        const desiredProductCount = (oldProductsCount[productName] || 0) + 1;
        this.setState({
            productsCount: {
                ...oldProductsCount, 
                [productName]: desiredProductCount
            }
        });
    }

    decrementCount = (productName) => () => {
        const oldProductsCount = this.state.productsCount;
        const desiredProductCount = Math.max(oldProductsCount[productName] - 1, 0);
        this.setState({productsCount: {
            ...oldProductsCount, 
            [productName]: desiredProductCount
        }});
    }

    showCart = () => {
        this.setState({displayCart: true});
    }

    hideCart = () => {
        this.setState({displayCart: false});
    }

    render = () => {
        const cartClass = this.state.displayCart ? "cart cart-active" : "cart";
        return (

            // <div className="counter">
            //     <button className="counter-btn" onClick={this.decrementCounter}>-</button>
            //     <div className="counter-text">{this.state.counter}</div>
            //     <button className="counter-btn" onClick={this.incrementCounter}>+</button>
            // </div>
            <div className="app">
                {/* <header className="app-header">
                    <div className="logo">React Shopping</div>
                    <button className="show-cart-btn" onClick={this.showCart}>Cart</button>
                </header> */}
                <div className="product-grid">
                    {products.map((product) => {
                        return (
                            <Product 
                              key={product.name}
                              product={product}
                              incrementCount={this.incrementCount}
                              decrementCount={this.decrementCount}
                              count={this.state.productsCount[product.name] || 0}
                            />
                        )
                    })}
                </div>
                <div className={cartClass}>
                    
                </div>
            </div>
        );
    }
}

export default App;