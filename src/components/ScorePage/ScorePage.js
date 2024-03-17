import { useState } from "react";
import { Link } from "react-router-dom";

export const ScorePage = () =>{
    const [score,setScore ]= useState(0);
    const storeScore = () =>{
        localStorage.setItem('score', JSON.stringify(score));
    }
    return (
        <div className="App-header">
            <div>
                <h1>Enter Toral Score </h1>
                <input type="number" onChange={(e) => {setScore(e.target.value)}} ></input> 
            </div>
            <Link className="btn btn-primary" to={"/details"}
             onClick={storeScore} style={{padding:"10px" , width : "100px"}}>Ok</Link>
        </div>
    );
}