import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import "./Note.css"

export default ({ note, match, history }) => {
    const { notes, deleteNote } = useNote(NoteContext)

    return (
    <section className="note">
    
        <div className="note__text">{notes.text}</div>
        
    
         <button className="btn--delete"
                onClick={() => {
                deleteNote(notes)
                    .then(() => {
                        history.push("/")
                     })
                    }} >Delete
            </button>
    </section>
)}
