import './App.css';
import BulletinBoard from './components/BulletinBoard'
import {useState} from 'react'


function App() {

  let [darkmode,setDarkmode] = useState(false)



  return (
    <div className={darkmode?"App darkMode" : "App"}>
      <header className="App-header">
        <h1>3 React-facts</h1>
        <button onClick={()=>{setDarkmode(!darkmode)}}>{darkmode ? "LightMode" : "Darkmode"}</button>
        <BulletinBoard/>
      </header>
    </div>
  );
}

export default App;
