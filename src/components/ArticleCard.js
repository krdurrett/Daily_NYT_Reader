import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ArticleCard.css'

const ArticleCard = ({ id, image, title, published, category }) => {
  return(
    <Link to='/article_details' id={id}>
      <img src={image}></img>
      <p>{title}</p>
      <p>{published}</p>
      <p>{category}</p>
    </Link>
  )
}

export default ArticleCard