import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Recipe from "./components/Recipe"

ReactDOM.render(
    <Router>
        <Recipe />
    </Router>
    , document.getElementById("root"))
