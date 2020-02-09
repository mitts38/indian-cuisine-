import React, { useContext, useState, useEffect } from "react"
import { RecipeListContext } from "./RecipeListProvider"
import { UserContext } from "../users/UserProvider"


export default props => {
    const { user } = useContext(UserContext)
    const { addRecipeList, theRecipeList, updateRecipeList } = useContext(RecipeListContext)
    const [recipeList, setRecipeList] = useState({})

    const editMode = props.match.params.hasOwnProperty("recipeListId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newRecipeList = Object.assign({}, recipeList)
        newRecipeList[event.target.name] = event.target.value
        setRecipeList(newRecipeList)
    }

    const setDefaults = () => {
        if (editMode) {
            const recipeListId = parseInt(props.match.params.recipeListId)
            const selectedRecipeList = theRecipeList.find(a => a.id === recipeListId) || {}
            setRecipeList(selectedRecipeList)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [theRecipeList])

    const constructNewRecipeList = () => {
        const userId = parseInt(recipeList.userId)

        if (userId === 0) {
            window.alert("Please select a recipe")
        } else {
            if (editMode) {
                updateRecipeList({
                    id: recipeList.id,
                    region: recipeList.region,
                    url: recipeList.url,
                    description: recipeList.description,
                    userId: parseInt(localStorage.getItem("indian-cusine_users"))
                })
                    .then(() => props.history.push("/recipeList"))
            } else {
                addRecipeList({
                    id: recipeList.id,
                    region: recipeList.region,
                    url: recipeList.url,
                    description: recipeList.description,
                    userId: parseInt(localStorage.getItem("indian-cusine_users"))
                })
                    .then(() => props.history.push("/recipeList"))
            }
        }
    }

    return (
        <form className="recipeListForm">
            <h2 className="recipeListForm__title">{editMode ? "Update RecipeList" : "Edit RecipeList"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="id">RecipeList id: </label>
                    <input type="text" name="id" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="recipeList id"
                        defaultValue={recipeList.id}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">RecipeList url: </label>
                    <input type="text" name="url" required className="form-control"
                        proptype="varchar"
                        placeholder="recipeList url"
                        defaultValue={recipeList.url}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">RecipeList description: </label>
                    <input type="text" name="description" required className="form-control"
                        proptype="varchar"
                        placeholder="recipeList description"
                        defaultValue={recipeList.description}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="userId">user: </label>
                    <select name="userId" className="form-control"
                        proptype="int"
                        value={recipeList.userId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a user</option>
                        {user.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="region">Region: </label>
                    <textarea type="text" name="region" className="form-control"
                        proptype="varchar"
                        value={recipeList.region}
                        onChange={handleControlledInputChange}>
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewRecipeList()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Update RecipeList"}
            </button>
        </form>
    )
}