import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const RecipeListContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const RecipeListProvider = (props) => {
    const [recipesList, setRecipeList] = useState([])

    const getRecipesList = () => {
        return fetch("http://localhost:8088/recipeList")
            .then(res => res.json())
            .then(setRecipeLst)
    }

    const addRecipeList = recipeList => {
        return fetch("http://localhost:8088/recipeList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeList)
        })
            .then(getRecipesList)
    }

     const deleteRecipeList = recipeList => {
        return fetch(`http://localhost:8088/recipeList/${recipeList.id}`, {
            method: "DELETE"
        })
        .then(getRecipesList)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getRecipesList()
    }, [])

    useEffect(() => {
        console.log("****  article APPLICATION STATE CHANGED  ****")
    }, [recipesList])

    return (
        <RecipeListContext.Provider value={{
            recipesList, addRecipeList, deleteRecipeList
        }}>
            {props.children}
        </RecipeListContext.Provider>
    )
}