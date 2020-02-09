import React, { useContext, useRef } from "react"
import { NoteContext } from "./NoteProvider"
import { UserContext } from "../users/UserProvider"
import "./Note"

export default props => {
    const { user } = useContext(UserContext)
    const { addNote } = useContext(NoteContext)
    const noteNote = useRef("")

    const foundNoteUser = user.find(singleUser => singleUser.id === parseInt(localStorage.getItem("currentUser")))
    console.log(foundNoteUser)
    const constructNewNote = () => {
        addNote({
            text: noteNote.current.value,
            userId: parseInt(localStorage.getItem("currentUser")),

        })
    }

    return (
        <form className="noteForm">
            <h2 className="eventForm__title">New Note</h2>
            <div className="form-group">
                <label htmlFor="noteNote">note</label>
                <input
                    type="text"
                    id="noteNote"
                    ref={noteNote}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="note"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewNote()
                        props.history.push("/notes")
                    }
                }
        
                className="btn btn-primary">
                Save Note
            </button>
        </form>
    )
}
