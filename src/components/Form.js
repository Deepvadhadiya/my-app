import React, { useState } from 'react'

export default function Form(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleSpeak = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("Converted to text to speech!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space!", "success");
    }

    const [text, setText] = useState('')
    // text = "new text";
    // setText("new text");

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="myBox" rows={8}></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary m-2" onClick={handleSpeak}>Text Speak</button>
                <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary m-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your text summary.</h1>
                {/* <p>{text.split(" ").length>1 ? text.split(" ").length - 1: 0 } words and {text.length} charecters </p> */}
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
