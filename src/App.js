import { useEffect, useState } from "react";
import Die from "./components/Die"
import {nanoid} from "nanoid";
import Confetti from 'react-confetti'


function App() {
  const [newDice,setNewDice] = useState(allNewDice())
  const [tenzies,setTenzies] = useState(false)

useEffect(() => {
  const allHeld = newDice.every(die => die.isHeld === true)
  const firstValue = newDice[0].value
  const allSameVale = newDice.every(die => die.value === firstValue )
  if(allHeld && allSameVale) {
    console.log("You Won")
    setTenzies(true)
  }


},[newDice])

function generateNewDice() {
  return {
    value:Math.ceil(Math.random()*6),
    isHeld:false,
    id:nanoid()
  }
}
  
function allNewDice() {
  const newDiceArray = [];
  for(let i=0; i<10; i++){
    newDiceArray.push(generateNewDice())
  }  
  return newDiceArray
}

function holdDice(id) {
 setNewDice(oldDice => oldDice.map(die => {
   return die.id === id ?
   {...die, isHeld:!die.isHeld} :
   die
 }))
}

const diceElement = newDice.map(die => <Die value={die.value} holdDice={() => holdDice(die.id)} key={die.id} isHeld={die.isHeld}/>)


function rollDice() {
  setNewDice(oldDice => oldDice.map(die => {
    return die.isHeld ?
      die :
      generateNewDice()
  }))
}


  return (
   <main>
     {tenzies ? <Confetti width={window.innerWidth} height={window.innerHeight} /> : null}
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container"></div>
     <div className="container">
       {diceElement}
     </div>
     <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
   </main>
  );
}

export default App;
