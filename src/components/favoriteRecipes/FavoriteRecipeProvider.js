import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const FavoriteRecipeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const FavoriteRecipeProvider = (props) => {
    const [favoriteRecipes, setFavoriteRecipe] = useState([])

    const getFavoriteRecipe = () => {
        return fetch("http://localhost:8088/favoriterecipes")
            .then(res => res.json())
            .then(setFavoriteRecipe)
    }

    const addFavoriteRecipe = favoriteRecipe => {
        return fetch("http://localhost:8088/favoriteRecipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favoriteRecipe)
        })
            .then(getFavoriteRecipe)
    }

     const deleteFavoriteRecipe = favoriteRecipe => {
        return fetch(`http://localhost:8088/favoriteRecipes/${favoriteRecipe.id}`, {
            method: "DELETE"
        })
        .then(getFavoriteRecipe)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getFavoriteRecipe()
    }, [])

    useEffect(() => {
        console.log("****  article APPLICATION STATE CHANGED  ****")
    }, [favoriteRecipes])

    return (
        <FavoriteRecipeContext.Provider value={{
            favoriteRecipes, addFavoriteRecipe, deleteFavoriteRecipe
        }}>
            {props.children}
        </FavoriteRecipeContext.Provider>
    )
}