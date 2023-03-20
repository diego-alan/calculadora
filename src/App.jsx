import { useReducer} from 'react'
import "./style.css"
import { useState } from 'react';



function App () {
  const [calculo, setCalculo] = useState("");
  const[resultado,setResultado] = useState("");

  const ops = [
    '/',
    '*',
    '+',
    '-',
    '.'
  ];

  const updateCalculo = value => {
    if (
      ops.includes(value) && calculo === '' ||
      ops.includes(value) && ops.includes(calculo.slice(-1)
      
      )
    ) {
      return;
    }

    setCalculo(calculo + value);

    if(!ops.includes(value)) {
      setResultado(eval(calculo + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];

    for(let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalculo(i.toString()
          )} key={i}> 
        {i}
        </button>
      )
    }
    return digits;
  }
  
  const calculando = () => {
    setCalculo(eval(calculo).toString());
  } //// es resultado =

  const deleteLast = () => {
    if (calculo == ''){
      return;
    }
    const value = calculo.slice(0, -1);
    setCalculo(value); 
  } /// es borra DEL

  return (
    <div className='App'>
      <div className='display'>

         { resultado ? <span>{ resultado }</span> : ''}&nbsp;

        { calculo || "0"}
      </div>
      <div className='operadores'>
        <button onClick={() => updateCalculo(' / ')}> / </button>
        <button onClick={() => updateCalculo(' * ')}> * </button>
        <button onClick={() => updateCalculo(' + ')}> + </button>
        <button onClick={() => updateCalculo(' - ')}> - </button>

        <button onClick={deleteLast}> DEL </button>
      </div>

      <div className='digits'>
        { createDigits() }
        <button onClick={() => updateCalculo('0')}>0</button>
        <button onClick={() => updateCalculo('.')}>.</button>
        <button onClick={calculando}>=</button>

      </div>
    </div>
  );
}

export default App
