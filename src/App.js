import { useState } from "react";
import Die from "./components/Die"
import {nanoid} from "nanoid";


function App() {
  const [newDice,setNewDice] = useState(allNewDice())
  
function allNewDice() {
  const newDiceArray = [];
  for(let i=0; i<10; i++){
    newDiceArray.push({
      value:Math.ceil(Math.random()*6),
      isHeld:false,
      id:nanoid()
    })
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
  setNewDice(allNewDice())
}

  return (
   <main>
     <div className="container">
       {diceElement}
     </div>
     <button onClick={rollDice}>Roll</button>
   </main>
  );
}

export default App;
