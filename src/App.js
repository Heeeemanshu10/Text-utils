import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setbtnText] = useState('dark')
  const [btnMode, setbtnMode] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setbtnText('light')
      setbtnMode('Enable Dark Mode')
    }else{
      setMode('light')
      setbtnText('dark')
      setbtnMode('Enable Light Mode')
    }
  }
  return (
    <>
     <Router>
     <Navbar title="Text-Utils" btnMode={btnMode} btnText={btnText} aboutText = "About Text-Utils" mode={mode} toggleMode={toggleMode}/>
     <div className="container my-3">
     <Switch>
          <Route exact path="/">
          <TextForm  heading = "Enter the text to analyze"/>
            
          </Route>
          <Route exact path="/About">
          <About />
          </Route>
        </Switch>
     {/* <About /> */}
     </div>
     </Router>
     

         
    </>
  );
}

export default App;
