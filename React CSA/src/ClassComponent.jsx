import { Component, useState } from "react"; 
import WillMount from  './WillMount'
class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
        
    }
    componentDidMount(){
        console.log("Component did mount executed")
    }
    componentDidUpdate(){
        console.log("Component did update executed")
    }
    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        });
    }
    decrement=()=>{
        if (this.state.counter > 0){
        this.setState({
            counter:this.state.counter-1
        });
    }
    }
    resetClicked=()=>{
        this.setState({
            counter:0
        });
    }
    render() {
        return (
        <div>
            <h1>Class Component</h1>
            <h1>Count : {this.state.counter}</h1>
            <h1>{this.state.counter == 5?<WillMount/>:null}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.resetClicked}>Reset</button>
        </div>
        )

    }
        
}
export default Counter;