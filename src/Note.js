import React from "react"
import {MdDateRange, MdDeleteForever} from 'react-icons/md'
import "./NoteTaking.css"

var Notes = ({ id, date, text, handledeletenote}) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handledeletenote(id)} className="delete-icon" size='1.3em'/>
                </div>
            </div>
    )
}
export default Notes