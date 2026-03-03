import { Component } from "react";
class WillMount extends Component{
    componentWillUnmount(){
        console.log("Component will unmount executed")
    }
    render(){
        return (
        <div>
            <p>Will Unmount executed</p>
        </div>
        )
    }
}
export default WillMount