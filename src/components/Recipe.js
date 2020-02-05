import React from "react"
import { Route, Redirect } from "react-router-dom"
// import NavBar from "./nav/Navbar"
// import ApplicationViews from "./ApplicationViews"
import "./Recipe.css"
import Login from "./login/Login"
import Register from "./login/Register"

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("currentUser")) {
                return (
                    <>
                        {/* <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} /> */}
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)

