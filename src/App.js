import { useState } from "react";
import Die from "./components/Die"


function App() {
  const [newDice,setNewDice] = useState(allNewDice())
  
function allNewDice() {
  const newDiceArray = [];
  for(let i=0; i<10; i++){
    newDiceArray.push(Math.ceil(Math.random()*6))
  }  
  return newDiceArray
}

const diceElement = newDice.map(num => <Die value={num} />)


  return (
   <main>
     <div className="container">
       {diceElement}
     </div>
     <button onClick={allNewDice}>dice</button>
   </main>
  );
}

export default App;
