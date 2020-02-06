import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import "./Note.css"

export default ({ note, match, history }) => {
    const { note, deleteNote } = useContext(NoteContext)

    return (
    <section className="note">
    
        <div className="note__text">{note.noteNote}</div>
        
    
         <button className="btn--delete"
                onClick={() => {
                deleteNote(note)
                    .then(() => {
                        history.push("/note")
                     })
                    }} >Delete
            </button>
    </section>
)}
