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

const diceElement = newDice.map(die => <Die value={die.value} key={die.id}/>)


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
