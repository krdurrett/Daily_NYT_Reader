import { handleResponse } from "./utils"

const apiKey = process.env.REACT_APP_API_KEY

export const getArtArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`)
    .then(response => handleResponse(response))
}

export const getMovieArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=${apiKey}`)
    .then(response => handleResponse(response))
}