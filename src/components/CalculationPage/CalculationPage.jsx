import { useEffect, useState } from "react";
import { ScoreCal } from "../ScoreCal";
export const CalculatePage = () =>{
    const [round , setround] = useState(1);
    const [bool ,setbool] = useState(true);
    let players =JSON.parse( localStorage.getItem('details'));
    const totalScore = JSON.parse(localStorage.getItem("score"));
    const [shuffle , setshuffle] = useState(players[0]);
    const incroun = () =>{
        console.log(players.length ,round);
        let index = round % players.length;
        setshuffle(players[index]);
        setround(round+1);
    }
    const fun = () =>{
        setbool(true);
    }
    const score  = (player , sc) =>{
        const playerscore = JSON.parse(localStorage.getItem('playerscore'));
        if (playerscore[player]-sc<= 0){
            playerscore[player] = "eliminated";
            players=players.filter((e)=> e !== player);
        }
        else {
            playerscore[player] = playerscore[player] - sc;
        }
        localStorage.setItem("details", JSON.stringify(players));
        localStorage.setItem("playerscore",JSON.stringify(playerscore));
        }
        useEffect(()=>{

        },[incroun])
    return(
        <div id="player-card">
            <h3 style={{color :"white"}}>Round : <span>{round}</span></h3>
            <p style={{color :"white"}}>{shuffle} has to shuffle the cards</p>
            <div className="d-flex justify-content-center align-items-center">
                {players.map((player)   => {  
                    return <ScoreCal player={player} score={score} fun={fun} bool={bool}/>})}
            </div>
            <button className="btn btn-primary" onClick={incroun} > next round</button>
        </div>
    );
}