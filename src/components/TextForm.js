import React, {useState} from 'react'

const TextForm = (props) => {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase())
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        setText(text.toLowerCase())
    }
    
    const handleOnChange = (event) => {
        // console.log("Onchange was clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
  return (
    <>
    <div className='container'>
     <h1>{props.heading}</h1>    
   <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
   </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>word count = {text.split(" ").length} and character count = {text.length}</p>
        <p> {(0.008 * (text.split(" ").length))} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
