import React from 'react'
import Counter from '../Counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {size : 0, totalCount : 0};
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        })
    }

    handleIncrease = () =>{
        this.setState((prevState) =>({
            totalCount: prevState.totalCount + 1
        }))
    }

    handleDecrease = () =>{
        this.setState((prevState) =>({
            totalCount: prevState.totalCount - 1
        }))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()]
        return <div>
            <label>
                Group size:
                <input defaultValue={0} onChange={this.handleResize} ></input>
            </label>
            <br></br>
            <label>
                Total Value: {this.state.totalCount}
            </label>
            {
                initArray.map(key => <Counter handleDecrease={this.handleDecrease} handleIncrease={this.handleIncrease} key={key}/>)
            }
        </div>
    }
}

export default CounterGroup;