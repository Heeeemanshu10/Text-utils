import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


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
     <Navbar title="Text-Utils" btnMode={btnMode} btnText={btnText} aboutText = "About Text-Utils" mode={mode} toggleMode={toggleMode}/>
     <div className="container">
     <TextForm  heading = "Enter the text to analyze"/>
     {/* <About /> */}
     </div>
     
    </>
  );
}

export default App;
