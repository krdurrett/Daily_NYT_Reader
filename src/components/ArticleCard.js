import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ id, image, title, published, category }) => {
  return(
    <Link className='article-card' to={`/article_details/${id}`} id={id}>
      <img src={image}></img>
      <h3>{title}</h3>
      <div>
        <p>Published: {published}</p>
        <p>{category}</p>
      </div>
    </Link>
  )
}

export default ArticleCard