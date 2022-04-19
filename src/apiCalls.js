import { handleResponse } from "./utils"

const apiKey = process.env.REACT_APP_API_KEY

export const getArtArticles = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Gi1Af6N0Y7U6iBwAiWlZOICyAoL9BXHd`)
    .then(response => handleResponse(response))
}

