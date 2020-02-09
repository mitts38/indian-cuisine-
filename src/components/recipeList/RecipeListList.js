import React, { useContext } from "react"
import { RecipeListContext } from "./RecipeListProvider"
import RecipeList from "./RecipeList"
import "./RecipeList.css"

export default () => {
    // const RecipeList = useRecipeList()
    const { theRecipeList } = useContext(RecipeListContext)

    return (
        <div className="">
            {theRecipeList.map(recipeList => {


                return (
                    <RecipeList
                        key={recipeList.id}
                        recipeList={recipeList}

                    />
                )
            })
            }
        </div>
    );
}