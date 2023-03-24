import { useState } from "react";


import './App.css';

function App() {
  const [calc, setCalc] = useState("")
  const [ result, setResult] = useState("")

  const ops= ['/', '*', '+', '-', '.'];
  const updataCalc =value =>{

    if (ops.includes(value)&& calc === '' || ops.includes(value)&& ops.includes(calc.slice(-1))) {
      return;
    }

    setCalc(calc + value)
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }
  const createDigits = ()=>{
    const digits =[];
    for (let i=1; i<10; i++){
      digits.push(
        <button 
        onClick={()=>updataCalc(i.toString())} 
        key={i}>{i}
        </button>
      )
    }
    return digits;
  }
  const calculate = ()=>{
    setCalc(eval(calc).toString())
  }
  const deleteLast = ()=>{
    if(calc == ''){
      return
    }
    const value = calc.slice(0, -1);
    setCalc(value)
  }


  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {result? <span>({result})</span> : ''}
          {calc || "0"}
        </div>
        <div className='operators'>
          <button onClick={()=>updataCalc("/")}>/</button>
          <button onClick={()=>updataCalc("*")}>*</button>
          <button onClick={()=>updataCalc("-")}>-</button>
          <button onClick={()=>updataCalc("+")}>+</button>
          <button onClick={deleteLast}>Del</button>
        </div>
        <div className='digits'>
          { createDigits()}
          <button onClick={()=>updataCalc("0")}>0</button>
          <button onClick={()=>updataCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
