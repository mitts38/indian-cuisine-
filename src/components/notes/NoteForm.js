import React, { useContext, useRef } from "react"
import { NoteContext } from "./NoteProvider"
import "./Note.css"

export default props => {
    const { addNote } = useContext(NoteContext)
    const noteText = useRef("")




    const constructNewArticle = () => {
            addArticle({
            
                text: noteText.current.value,
                           

            })
        }
    

    return (
        <form className="noteForm">
            <h2 className="noteForm__id">New Note</h2>

            <div className="form-group">
                <label htmlFor="noteText">Note</label>
                <input
                    type="text"
                    id="noteText"
                    ref={noteText}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Text"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewArticle()
                    }
                }
                className="btn btn-primary">
                Save Note
            </button>
        </form>
    )
}