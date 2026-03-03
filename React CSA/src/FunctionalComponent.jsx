import { Component } from "react";
import { useEffect } from 'react'
import { useState,setStates } from "react";
import PropsComponent from "./PropsComponent";
function CounterApp() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("did mount executed");
    });
    return(
        <div>
            <h1>Functional Component</h1>
            <h1>Count : {count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increment</button>
            <button onClick={()=>{
                if (count>0) {
                setCount(count-1)
                }
            }}>Decrement</button>
            <button onClick={()=>{
                setCount(0)
            }}>Reset</button>
            {count>=5?<PropsComponent/>:null}
        </div>
    )
}
export default CounterApp;