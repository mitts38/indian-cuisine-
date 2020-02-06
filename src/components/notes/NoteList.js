import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import Note from "./Note"
import "./Note.css"

export default (props) => {
    const { notes } = useContext(NoteContext)

    return (
        <div className="notes" className="center">
            <h1>Notes</h1>
            <button onClick={() => props.history.push("/notes/create")}>
                Add Note
            </button>
            <article className="NoteList">
                {notes.map(note => <Note key={note.id} note={note} {...props} />)}
            </article>
        </div>
    )
}
 