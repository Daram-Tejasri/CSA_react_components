import { Component } from "react";
import { useEffect } from "react";
function PropsComponent(){
    
    useEffect(()=>{
            console.log("did mount executed");
            return()=>{
                console.log("This is clean up function in Props Component")
            };
        },[]);
    return(
        <h1>Props Component</h1>
    )
    
}
export default PropsComponent;