import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import "./Note.css"

export default ({ note, match, history }) => {
    const {  deleteNote } = useContext(NoteContext)

    return (
    <section className="note">
    
        <div className="note__text">{note.text}</div>
        
    
         <button className="btn--delete"
                onClick={() => {
                deleteNote(note)
                    .then(() => {
                        history.push("/notes")
                     })
                    }} >Delete
            </button>
    </section>
)}
