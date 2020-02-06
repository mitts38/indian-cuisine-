import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const NoteContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])

    const getNotes = () => {
        return fetch("http://localhost:8088/notes")
            .then(res => res.json())
            .then(setNotes)
    }

    const addNote = note => {
        return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then(getNotes)
    }

     const deleteNote = note => {
        return fetch(`http://localhost:8088/notes/${note.id}`, {
            method: "DELETE"
        })
        .then(getNotes)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getNotes()
    }, [])

    useEffect(() => {
        console.log("****  article APPLICATION STATE CHANGED  ****")
    }, [notes])

    return (
        <NoteContext.Provider value={{
            notes, addNote, deleteNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}