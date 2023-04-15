import React from 'react'
import './Game.css'
function Game() {
  return (
    // var board;
    // var score=0;
    // var rows=4;
    // var columns =4;
    // window.onload = function(){
    //     setGame();
    // }
    // function setGame(){
    //     board= [
    //         [0,0,0,0],
    //         [0,0,0,0],
    //         [0,0,0,0],
    //         [0,0,0,0]
    //     ]
    //     for (let r=0;r<rows;r++){
    //         for(let c=0;c<columns ;c++){
    //             let tile= document.createElement("div");
    //             tile.id = r.toString() + "-" + c.toString();
    //         }
    //     }
    // }
    <div>
        <div className="body">
     <h1> 2048 merge-game</h1>
    <hr />
    <h2>score: <span className="score">0</span></h2>
  </div>
   <div id="board">

   </div>
    </div>
  )
}

export default Game
