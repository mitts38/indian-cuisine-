import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navBar">
            <li className="navBar__item active">
                <Link className="navBar__link" to="/indian cusin">INDIAN-CUSINE</Link>
            </li> 
            <li className="navBar__item active">
                <Link className="navBar__link" to="/recipeList">RECIPE LIST</Link>
            </li> 
            <li className="navBar__item active">
                <Link className="navBar__link" to="/favoriteRecipe">FAVORITE FOOD</Link>
            </li> 
            <li className="navBar__item active">
                <Link className="navBar__link" to="/region">REGION</Link>
            </li> 
            <li className="navBar__item active">
                <Link className="navBar__link" to="/notes">NOTES</Link>
            </li> 

            {
                localStorage.getItem("currentUser")
                    ? <li className="navBar__item">
                        <Link className="navBar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("currentUser")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}