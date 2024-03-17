import { Link} from "react-router-dom";
import { useState } from "react";
export const NamesPage = (prop) =>{
    const [named ,setname] = useState("");
    const savedetails = (players) =>{
        localStorage.setItem('details' , JSON.stringify(players));
        const playerscore = {};
        players.forEach(player => {
        playerscore[player] = JSON.parse(localStorage.getItem("score"));
        localStorage.setItem('playerscore' , JSON.stringify(playerscore));
    });
    }
    const validate = () =>{
        prop.players.push(named);
        setname("");
    }
    return (
        <div>
        { prop.players.length <prop.no ?  
            <div className="card-container">
            <form action="#" className="form">
                <label className="form-control">Enter player in order</label>
                <input className="form-control" type="text" value={named} onChange={(e) =>{setname(e.target.value)}}/>
                <button onClick={validate} className="btn btn-primary">Ok</button>
            </form>
            </div>
            :
                <div>
                    <h1>You have Entered all the names of the players </h1>
                    <h2>Click on next to calculate Score</h2>
                <Link className="btn btn-primary" to={"/calc"} onClick={savedetails(prop.players)}>Next</Link> 
                </div>}
                </div>
    );
}