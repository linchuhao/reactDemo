import React, { Component } from 'react'
import Counter from '../Counter';
// import PropTypes from 'prop-types'

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, totalCount: 0  };
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0,
            totalCount: 0
        })
    }


    render() {
        const initArray = [...Array(this.state.size).keys()];

        return (
        <div>
            <label>
                Group size:
                <input defaultValue={0} onBlur={this.handleResize} ></input>
            </label>
            <br></br>
            <label>
                Total Value: {this.props.store.getState()}
            </label>
            {
                initArray.map(key => <Counter
                onIncrement={() => this.props.store.dispatch({type: 'INCREMENT'})}
                onDecrement={() => this.props.store.dispatch({type: 'DECREMENT'})}
                 key={key} />)
            }
        </div>
        )
    }
}

export default CounterGroup;