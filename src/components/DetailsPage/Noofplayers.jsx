import { useState } from "react";

import { NamesPage } from "./NamesPage";

export const Noofplayers = (prop) =>{
    const [val ,setval] = useState(prop.no);
    const sendData = () =>{
        prop.handle(val);
    }
    const [players] =useState([]);

   
  
    return (
        <div className="App-header" >
        
            { prop.no===0 ?
            <div>
            <form className="card" >
                <label className="form-control">Number of players</label>
                <input className="form-control" name="noofplayers"
                    type="number" onChange={(e)=>{setval(e.target.value)}}/>
                <button className="btn btn-primary" onClick={sendData}>Ok</button>
            </form>
        </div>
            : <NamesPage no={prop.no} players= {players}/>}
        </div>
    );
}