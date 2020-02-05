import React from "react";
import { Route } from "react-router-dom";
import { NoteContext } from "./NoteProvider"
import { UserProvider } from "./user/UserProvider"

export default props => {
    return (
        <>
            
                
                    
                        
                            <NoteProvider>
                                <UserProvider>
                                    {/* Render the location list when http://localhost:3000/ */}
                                    
                                    
                                    <Route
                                        exact
                                        path="/"
                                        render={props => <NoteList {...props} />}
                                    />
                                    <Route exact path="/note/create">
                                        <ArticleForm />
                                    </Route>

                                   
                                </UserProvider>
                            </NoteProvider>
                        
        </>
    );
};
