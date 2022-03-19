import React from "react"
import Notes from "./Note"
import AddNote from "./AddNote"

var NotesList = ({ notes, handleaddnote, handledeletenote }) => {
    return(
        <div className="notes-list">
            {notes.map((note) => (
            <Notes id={note.id} text={note.text} date={note.date} handledeletenote={handledeletenote}/>
            ))}
          <AddNote handleaddnote={handleaddnote} />
        </div>
    )
}
export default NotesList