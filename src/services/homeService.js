import axios from "axios"

export const fetchYoutube = async () => {
  try {
    // const { data } = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=20')
    const { data } = await axios.get('https://api.jikan.moe/v3/search/anime?q=naruto')
    return data.results
  } catch (error) {
    return []
  }
}