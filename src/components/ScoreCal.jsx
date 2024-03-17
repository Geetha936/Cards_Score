import { useEffect, useState } from "react";

export const ScoreCal = (prop) => {
    const [currscore,setcurrscore] = useState(0); 
    const [subbol ,setsubbool] = useState(true)
    const handlesubmitscore = () => {
        setsubbool(true)
        setcurrscore(0)
        prop.fun();
        prop.score(prop.player,currscore);
    }
    const [playerscore,setplayerscore] = useState(JSON.parse(localStorage.getItem('playerscore')));
    useEffect( () => {
        setplayerscore(JSON.parse(localStorage.getItem('playerscore')));    
    },[subbol,handlesubmitscore]);
    return(
        <div className="m-3" >
            { subbol ?
            <div className="card" >
            <p className="card-header">{prop.player} : {playerscore[prop.player]}</p>
            <input onChange={(e) => setcurrscore(e.target.value)}  type="number" value={currscore} />
            <button className="mt-2 btn btn-primary" onClick={handlesubmitscore} >Ok</button>
            </div> :
            <div className="card" >
            <p className="card-header">{prop.player} : {playerscore[prop.player]}</p>
            </div>}
        </div>
    );
}