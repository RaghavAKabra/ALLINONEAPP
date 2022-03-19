import React, { useState } from "react"
import "./NoteTaking.css"
var AddNote = ({handleaddnote}) => {
    var [notesText, setNotesText] = useState('')
var characterLimit = 500;
    var handlechange = (event) => {
if(characterLimit - event.target.value.length>=0){
    setNotesText(event.target.value)
}
    }
   var handlesaveclick =() => {
    if(notesText.trim().length > 0){
    handleaddnote(notesText);
    setNotesText("");
    }
   }
    return(
        <div className="notenew">
            <textarea 
            value={notesText}
            onChange={handlechange}
            rows="8" 
            cols="10"
            placeholder="Type here to add a note"
            ></textarea>
<div className="note-footer">
    <small>{characterLimit-notesText.length} characterLimit is remained</small>
    <button onClick={handlesaveclick}className="save">Save</button>
    </div>
        </div>
    )
}
export default AddNote