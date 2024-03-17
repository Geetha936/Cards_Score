import { useState } from "react";
import { Noofplayers } from "./Noofplayers";
export const DetailsPage =() =>{
    const [no,setno]= useState(0);
    const handleno = (data) =>{
        setno(data);
    };
    return(
        <div>
        <Noofplayers no={no} handle={handleno}/>
        </div>
    );
}