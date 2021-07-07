import axios from "axios"

export const fetchNaruto = async () => {
  try {
    const { data } = await axios.get('https://api.jikan.moe/v3/search/anime?q=naruto')
    return data.results
  } catch (error) {
    return []
  }
}

export const fetchDragonBall = async () => {
  try {
    const { data } = await axios.get('https://api.jikan.moe/v3/search/anime?q=dragonball')
    return data.results
  } catch (error) {
    return []
  }
}