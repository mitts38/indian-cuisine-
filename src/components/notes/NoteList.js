import React, { useContext } from "react"
import { Context } from "./ArticleProvider"
import Article from "./Article"
import "./Articles.css"

export default (props) => {
    const { articles } = useContext(ArticleContext)

    return (
        <div className="articles" className="center">
            <h1>Articles</h1>
            <button onClick={() => props.history.push("/articles/create")}>
                Add Article
            </button>
            <article className="articleList">
                {articles.map(article => <Article key={article.id} article={article} {...props} />)}
            </article>
        </div>
    )
}
 