const YoutubeItem = ({ item }) => {
  const style = {
    title: {
      color: '#FDFFFE'
    },
    desc: {
      color: '#A9AAA9'
    },
    main: {
      maxWidth: '300px'
    }
  }
  return (
    <div className="youtube-item">
      <img src={item.image_url} alt={item.title} className="h-32 xl:h-44 lg:h-36 md:h-36 sm:h-40 w-full object-cover object-top mb-4 rounded-sm" />
      <div className="flex mb-6">
        <div className="yt-avatar">
          <img src="https://nottdev.com/img/profile.jpg" className="rounded-full mr-3" width="38" height="38" alt="avatar" />
        </div>
        <div className="yt-detail flex-1">
          <h3 style={style.title} className="text-md line-clamp-1">{item.title}</h3>
          <p style={style.desc} className="text-sm font-regular line-clamp-2 mt-2">{item.synopsis}</p>
          <span className="text-sm font-regular view">การดู 123 ครั้ง</span>
          <span className="text-sm font-regular">1 วันที่แล้ว</span>
        </div>
      </div>
    </div>
  )
}

export default YoutubeItem