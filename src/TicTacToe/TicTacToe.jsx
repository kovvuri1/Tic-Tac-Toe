import React, { useState } from 'react';
import circle from "../Asserts/circle.jpg";
import cross from "../Asserts/cross.jpg"
let Initialdata=["","","","","","","","",""];
const TicTacToe = () => {
    let [data, setData] = useState([...Initialdata]); 
    let [count,setcount]=useState(0)
    let[state,setstate]=useState(false);
    let[tit,settit]=useState("TIC TAC TOE")
    let[players,setplayers]=useState("")
    let game=(e,num)=>{
        if(state){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML=`<img src=${cross}>`;
            data[num]="x";
            setcount(++count)
            setplayers("player1")
        }
        else{
            e.target.innerHTML=`<img src=${circle}>`;
            data[num]="o";
            setcount(++count)
            setplayers("player2")
        }
        winner()
    }
     let wingame=(winner)=>{
            setstate(true)
            settit("congratulations 💐👏👏👏")
        }
    let winner=()=>{
       
        if(data[0]===data[1] && data[1]===data[2]&& data[2]!=="" ){
            wingame(data)
        }
        else if(data[3]===data[4] && data[4]===data[5]&& data[5]!=="" ){
            wingame(data)
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="" ){
            wingame(data)
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            wingame(data)
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="" ){
            wingame(data)
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="" ){
            wingame(data)
        }
        else if(data[0]===data[4] && data[4]===data[8]&& data[8]!=="" ){
            wingame(data)
        }
        else if(data[3]===data[4] && data[4]===data[6] && data[6]!==""){
            wingame(data)
        }    
       
    }
    let resetGame = () => {
        setcount(0);
        setstate(false);
        settit("TIC TAC TOE");
        setplayers("");
        setData([...Initialdata]);  // Reset board
        document.querySelectorAll('.rowbox').forEach(cell => (cell.innerHTML = ""));
    };
  return (
    <> 
        <div className='container'>
        <h1>{tit}   </h1>
        <p>{players}</p> 
            <div className='base'>
                <div className="row1" >
                    <div className="rowbox" onClick={(e)=>{game(e,0)}}>

                    </div>
                    <div className="rowbox" onClick={(e)=>{game(e,1)}}>
                        
                    </div>
                    <div className="rowbox" onClick={(e)=>{game(e,2)}}>  
                    </div>
                </div>
                <div className="row2">
                    <div className="rowbox" onClick={(e)=>{game(e,3)}}>

                    </div>
                    <div className="rowbox" onClick={(e)=>{game(e,4)}}>
                        
                    </div>
                    <div className="rowbox" onClick={(e)=>{game(e,5)}}>
                        
                    </div>
                </div>

                <div className="row3">
                    <div className="rowbox" onClick={(e)=>{game(e,6)}}>
                    </div>
                    <div className="rowbox" onClick={(e)=>{game(e,7)}}>
                    </div>
                    <div className="rowbox" onClick={(e)=>{game(e,8)}}> 
                    </div>
                </div>
            </div>
            <button onClick={resetGame} className='btn'>Reset</button>
           
        </div>
       
        
    </>
  );
}
export default TicTacToe;
