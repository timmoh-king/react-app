/**
 * @Author: Your name
 * @Date:   2022-06-15 09:23:06
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-17 09:40:33
 */
import {useState} from 'react';
import './App.css';
import './index.css';

function App() {
  const[count, setCount] = useState(4)
  const[text, setText] = useState("I am a Full Stack Software Developer")
  
  function decrement(){
    setCount(count -1);
  }
  function increment(){
    setCount (count +1)
  }
  function changeText(){
    setText ("I will get a job in Jesus name")
  }
  // function refactorText (){
  //   setText (useState(text))
  // }
 
  
  return (
    <div className="App">
      
      <button onClick ={decrement}>-</button>
      <span>{count}</span>
      <button onClick ={increment} >+</button>
      
      <h1>{text}</h1>
      <div>
       <button onClick={changeText} className ="Button">Affirm</button>
       {/* <button onClick={refactorText} className='Button'>Refactor</button> */}
      </div>
    </div>
  );
}

export default App;
