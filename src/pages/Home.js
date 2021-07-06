import { useState, useEffect } from 'react'
import { fetchYoutube } from '../services/homeService';
import YoutubeItem from '../components/youtube/YoutubeItem'

const Home = () => {

  const [ youtubeItems, setYoutubeItems ] = useState([])
  const getData = async () => {
    const data = await fetchYoutube()
    setYoutubeItems(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="youtube-grid grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-4">
      {youtubeItems.map((v) => (
        <YoutubeItem item={v} />
      ))}
    </div>
  )
}

export default Home