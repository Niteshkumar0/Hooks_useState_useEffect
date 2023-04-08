import React,{useEffect, useState} from 'react';
import "./count.css"


let Count = () => {
    let [Count,SetCount] = useState(0);
    let handle = () => {
        SetCount(Count + 1);
    }
    
    useEffect(()=>{
        console.log(`clicked ${Count}`)
    },[handle]);

    return(
        <>
        <button onClick={handle}>click me</button>
        <span>{Count}</span>
        </>
    );
}
export default Count;