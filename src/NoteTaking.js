import React, { useEffect, useState } from "react"
import NotesList from "./NotesList"
import {nanoid} from "nanoid"
import "./NoteTaking.css"
import Search from "./Search"
import HeaderNote from "./Headernote"
var Note = () => { 
  var [noters, setNoters] =useState([
   {
    id: nanoid(),
     text: "Start writing the notes from here",
     date: "15/4/2022",
   },
 ]);
var deleteNote = (id) => {
var newNotes = noters.filter((note) => note.id !== id)
setNoters(newNotes)
}
 var addNote = (text) => {
var date= new Date();

var newnote = {
  text: text,
  date: date.toLocaleDateString(),
  id: nanoid(),
}
var newnotes = [...noters, newnote]
setNoters(newnotes);
 }
 var [searchText, setSearchText] = useState("")
 var [darkmode, setDarkmode] = useState('false')
 
useEffect(() => {
  var savednotes =JSON.parse(localStorage.getItem('react-notes-app-data'))

if(savednotes){
  setNoters(savednotes)
}

}, [])

 useEffect(() => {
   localStorage.setItem('react-notes-app-data', JSON.stringify(noters))
 }, [noters])

 return(
  
  <div className={`${darkmode && 'dark-mode'}`}>
       <div className="Container">
   <HeaderNote handletoggledarkmode={setDarkmode}/>
   <br/>
   <Search handlesearchnote={setSearchText}/>
   <br/>
<NotesList 
notes={noters.filter((note) => 
note.text.toLocaleLowerCase().includes(searchText)
)} 
handleaddnote={addNote}
handledeletenote = {deleteNote}
/>
 </div>
 </div>

 )
}
export default Note