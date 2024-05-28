import React, { useState } from "react";

const TextForm = (props) => {
    const [text,setText] = useState("Enter text here")
    // setText(vdvdvdff);

    const handleUpClick = () => {
        console.log("Button was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        console.log("Button was Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        console.log("Clear Was clicked")
      
        setText(" ")
    }

    const handleTitleClick = () => {
        console.log("Title Case Was clicked " + text);
        let newText = text.split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        setText(newText);
    }

    const handleCopy = () => {
        var text= document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    


    const handleOnChange = (event) => {
        console.log("OnChange")
        setText(event.target.value);
    }


  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8">
          
        </textarea>
        <button className="btn btn-primary my-2 m-2" onClick={handleUpClick}>Change to Uppercase</button>
        <button className="btn btn-secondary my-2 m-2" onClick={handleLowClick}>Change to LowerCase</button>
        <button className="btn btn-success my-2 m-2" onClick={handleTitleClick}>Change to Title Case</button>
        <button className="btn btn-info my-2 m-2" onClick={handleCopy}>Copy</button>

        <button className="btn btn-danger my-2 m-2" onClick={handleClearClick}>Clear All</button>



      </div>
    </div>

    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview of the text</h2>
        <p>{text}</p>
    </div>

    </>
  );
};

export default TextForm;
