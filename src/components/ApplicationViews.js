import React from "react";
import { Route } from "react-router-dom";
import { NoteProvider } from "./notes/NoteProvider"
import NoteForm from "./notes/NoteForm"
import NoteList from "./notes/NoteList"
import { FavoriteRecipeProvider } from "./favoriteRecipes/FavoriteRecipeProvider"
import { FavoriteRecipe } from "./favoriteRecipes/FavoriteRecipe"
import FavoriteRecipeForm from "./favoriteRecipes/FavoriteRecipeForm"
import FavoriteRecipeList from "./favoriteRecipes/FavoriteRecipeList"
import { RecipeListProvider } from "./recipeList/RecipeListProvider"
import { RecipeList } from "./recipeList/RecipeList"
import RecipeListForm from "./recipeList/RecipeListForm"
import RecipeListList from "./recipe/RecipeListList"
import { UserProvider } from "./users/UserProvider"

export default props => {

    return (
        <>



            <RecipeListProvider>
            <FavoriteRecipeProvider>
            <NoteProvider>
                <UserProvider>
                    {/* Render the location list when http://localhost:3000/ */}

                    <Route
                        exact
                        path="/notes"
                        render={props => <NoteList {...props} />}
                    />
                    <Route exact path="/notes/create">
                        <NoteForm />
                    </Route>
                    <Route path="./notes/edit/:noteId(\d+)" render={
                        props => <NoteForm {...props} />
                    } />
                    <Route
                        exact
                        path="/favoriteRecipe"
                        render={props => <FavoriteRecipeList {...props} />}
                    />
                    <Route exact path="/favoriteRecipe/create">
                        <FavoriteRecipeForm />
                    </Route>
                    <Route path="./favoriteRecipe/edit/:favoriteRecipeId(\d+)" render={
                        props => <FavoriteRecipeForm {...props} />
                    } />
                    <Route
                        exact
                        path="/recipeList"
                        render={props => <recipeList {...props} />}
                    />
                    <Route exact path="/recipeList/create">
                        <recipeListForm />
                    </Route>
                    <Route path="./recipeList/edit/:recipeListId(\d+)" render={
                        props => <recipeListForm {...props} />
                    } />

                </UserProvider>
            </NoteProvider>
            </FavoriteRecipeProvider>
            </RecipeListProvider>
        
            

        </>
    );
};
