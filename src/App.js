// import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function Cont(props) {
  return(
    <div>
    <button onClick={()=>{
        props.clickHandler();
      }}>content</button>
  </div>
  )
}
function Home(props) {
  return(
    <div>
    <button onClick={()=>{
        props.clickHandler();
      }}>Home</button>
  </div>
  )
}

function Nav(props) {
  return(
    <div onClick={ () => {props.navClick();}}> {props.icon} </div>
  )
}
function App() {
  const [mode, setmode] = useState('welcome');

  let content = null;
  if(mode === 'welcome') {
    content = <div>welcome</div>
  }else if(mode === 'read') {
    content = <div>contents...</div>
  }
  
  return (

    <div className="App">
      <div className='Contain'>
      <Home clickHandler={ () => {
        setmode('welcome')
      }} />
      <Cont clickHandler={ ()=> {
        setmode('read')
      }} />
      <Nav icon='〓' navClick={ () => {
        console.log('test');
      }} />
      </div>
      <p>{content}</p>
    </div>
    
  );
}

export default App;