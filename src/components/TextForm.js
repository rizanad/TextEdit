import React, { useState } from "react";

// TextForm component to manipulate and display text
const TextForm = (props) => {
  const [text, setText] = useState("Enter text here");

  // Function to convert text to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Function to convert text to lowercase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Function to clear the text
  const handleClearClick = () => {
    setText("");
  };

  // Function to convert text to title case
  const handleTitleClick = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
  };

  // Function to copy text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  // Function to handle changes in the text area
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4 text-center">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: "#f0f8ff",
              color: "#333",
              borderRadius: "5px",
              padding: "10px",
            }}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="Text actions">
            <button className="btn btn-primary" onClick={handleUpClick}>
              Uppercase
            </button>
            <button className="btn btn-secondary" onClick={handleLowClick}>
              Lowercase
            </button>
            <button className="btn btn-success" onClick={handleTitleClick}>
              Title Case
            </button>
            <button className="btn btn-info" onClick={handleCopy}>
              Copy
            </button>
            <button className="btn btn-danger" onClick={handleClearClick}>
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="container my-5 text-center">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text above to preview it here."}</p>
      </div>
    </>
  );
};

export default TextForm;
