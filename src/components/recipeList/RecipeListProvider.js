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
    const [theRecipeList, setRecipeList] = useState([])

    const getRecipeList = () => {
        return fetch("http://localhost:8088/recipeList")
            .then(res => res.json())
            .then(setRecipeList)
    }

    const addRecipeList = recipeList => {
        return fetch("http://localhost:8088/recipeList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeList)
        })
            .then(getRecipeList)
    }

     const deleteRecipeList = recipeList => {
        return fetch(`http://localhost:8088/recipeList/${recipeList.id}`, {
            method: "DELETE"
        })
        .then(getRecipeList)
    }

     const editRecipeList = recipeList => {
        return fetch(`http://localhost:8088/recipeList/${recipeList.id}`, {
            method: "put"
        })
        .then(getRecipeList)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getRecipeList()
    }, [])

    useEffect(() => {
        console.log("****  article APPLICATION STATE CHANGED  ****")
    }, [theRecipeList])

    return (
        <RecipeListContext.Provider value={{
            theRecipeList, addRecipeList, deleteRecipeList, editRecipeList
        }}>
            {props.children}
        </RecipeListContext.Provider>
    )
}