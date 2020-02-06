import React, { useState, useEffect } from "react"

export const FavoriteRecipeContext = React.createContext()

export const FavoriteRecipeProvider = (props) => {
    const [favoriteRecipe, changeFavoriteRecipeState] = useState([])

    const getFavoriteRecipe = () => {
        return fetch("http://localhost:8088/favoriteRecipe")
            .then(res => res.json())
            .then(changeFavoriteRecipeState)
    }

    const addFavoriteRecipe = FavoriteRecipe => {
        return fetch("http://localhost:8088/favoriteRecipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favoriteRecipe)
        })
            .then(getFavoriteRecipe)
    }

    const deleteFavoriteRecipe = favoriteRecipe => {
        return fetch(`http://localhost:8088/favoriteRecipe/${favoriteRecipe.id}`, {
            method: "DELETE"
        })
        .then(getFavoriteRecipe)
    }

    const updateFavoriteRecipe = message => {
        return fetch(`http://localhost:8088/favoriterecipe/${favoriteRecipe}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favoriteRecipe)
        })
            .then(getFavoriteRecipe)
    }

    useEffect(() => {
        getFavoriteRecipe()
    }, [])

    useEffect(() => {
        console.log(favoriteRecipe)
        console.log("messages app state changed")
        // if (checkedMessages.length == messages.length){
        //     console.log("time to get messages")
        // }
    }, [favoriteRecipe])

    return (
        <FavoriteRecipeContext.Provider value={{
            favoriteRecipe, addFavoriteRecipe, deleteFavoriteRecipe, updateFavoriteRecipe
        }}>
            {props.children}
        </FavoriteRecipeContext.Provider>
    )
}