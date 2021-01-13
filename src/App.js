import './App.css';
import Card from './components/card'
import {useState,useEffect} from 'react';



function App() {
  const [crossTurn,setCrossTurn] = useState();
  const [win,setWin] = useState("");
  const [filled,setFilled] = useState(false);

  const items = new Array(9).fill("");
  const [array,setArray] = useState(items);

  useEffect(()=>{
    isWin();
  },[array,win,filled]);


  const changeItem = (itemNumber) =>{
    console.log(win);
    if(win){
      return;
    }
    console.log(itemNumber);
    if(array[itemNumber] === ""){
      let data = crossTurn ? 'cross' : 'circle';
      setArray({...array,[itemNumber]:data});
      setCrossTurn(!crossTurn);
    }else{
      setFilled(true);
      setTimeout(()=>{
        setFilled(false);
      },4000);
    }
    console.log(array);
  }

  const isWin = () =>{
    console.log("in iswin")
     if(
       array[0] === array[1] &&
       array[0] === array[2] &&
       array[0] !== ""
       ){
         setWin(`${array[0]} wins the game !! `);
         console.log(win);
       }else if(
        array[3] === array[4] &&
        array[4] === array[5] &&
        array[3] !== ""
       ){
        setWin(`${array[3]} wins the game !! `);
       }else if(
        array[6] === array[7] &&
        array[7] === array[8] &&
        array[6] !== ""
       ){
        setWin(`${array[6]} wins the game !! `);
       }else if(
        array[0] === array[3] &&
        array[3] === array[6] &&
        array[0] !== ""
       ){
        setWin(`${array[0]} wins the game !! `);
       }else if(
        array[1] === array[4] &&
        array[4] === array[7] &&
        array[1] !== ""
       ){
        setWin(`${array[1]} wins the game !! `);
       }else if(
        array[2] === array[5] &&
        array[5] === array[8] &&
        array[2] !== ""
       ){
        setWin(`${array[2]} wins the game !! `);
       }else if(
        array[0] === array[4] &&
        array[4] === array[8] &&
        array[0] !== ""
       ){
        setWin(`${array[0]} wins the game !! `);
       }else if(
        array[2] === array[4] &&
        array[4] === array[6] &&
        array[2] !== ""
       ){
        setWin(`${array[2]} wins the game !! `);
       }
  }

  const createCard =(arrayIndex) =>(
    <Card input={arrayIndex}/>
  )

  const filledMessage = () =>{
    if(filled){
      return (
        <div className="border border-warning mb-3">
          <h2>Already filled, Try another place!!</h2>
        </div>
      )
    }
  }
  const winMessage = () =>{
    if(win){
      return (
        <div className="border border-success mb-3">
          <h2>{win}</h2>
        </div>
      )
    }
  }

  return (
    <div className="mx-auto container">
      <div className="text-center">
        <h1>The Tic-Tac-Toe</h1>
      </div>
      {filledMessage()}
      {winMessage()}
      <div className="mx-auto">
        <div className="row">
          {items.map((item,index)=>{
            return (
              <div className="col-4 border border-warning shadow" aria-disabled={win} onClick={()=>changeItem(index)} key={index} >
                {createCard(array[index])}
              </div>
            )
          })} 
        </div>
      </div>
    </div>
  );
}

export default App;
