import Die from "./components/Die"


function App() {
  
function allNewDice() {
  const newDice = [];
  for(let i=0; i<10; i++){
    newDice.push(Math.ceil(Math.random()*6))
  }  
  return newDice
}

console.log(allNewDice())

  return (
   <main>
     <div className="container">
       
     </div>
     <button onClick={allNewDice}>dice</button>
   </main>
  );
}

export default App;


 /* <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <Die value={5}/>
        <Die value={6}/>
        <Die value={6}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={2}/> */