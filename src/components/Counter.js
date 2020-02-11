import React, { Component } from 'react';

class Counter extends Component
{
    render()
    {
        return(
            <div className="counter" role="group">
                <button type="button" onClick={this.props.decerimentFn} className="counter-btn">-</button>
                <div className="counter-text">{this.props.count}</div>
                <button type="button" onClick={this.props.incrementFn} className="counter-btn">+</button>
            </div>
        )
    }
}

export default Counter;