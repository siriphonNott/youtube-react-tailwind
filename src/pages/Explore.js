import { useDragonBall } from '../hooks/useManga';
import YoutubeItem from '../components/youtube/YoutubeItem'
import Loading from '../components/common/Loading'

const Explore = () => {

  const items = useDragonBall()

  if(items.loading) {
    return <Loading />
  } else if(!items.loading && !items.error) {
    return (
      <div className="youtube-grid grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-4">
        {items.data.map((v) => (<YoutubeItem item={v} key={v.mal_id} />))}
      </div>
    )
  } else {
    return (<div>Error</div>)
  }
}

export default Explore