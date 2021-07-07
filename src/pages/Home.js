import { useNaruto } from '../hooks/useManga';
import YoutubeItem from '../components/youtube/YoutubeItem'

const Home = () => {

  const items = useNaruto()

  return (
    <div className="youtube-grid grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-4">
      { items.map((v) => (<YoutubeItem item={v} key={v.mal_id} />)) }
    </div>
  )
}

export default Home