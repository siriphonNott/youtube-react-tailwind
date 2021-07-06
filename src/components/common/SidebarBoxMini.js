import { Link } from 'react-router-dom'

const SidebarBoxMini = ({ menu }) => {
  return (
    <div className="sidebar-box-mini py-3">
      {menu.map((item, index) => (
        <Link to={item.link}>
          <div className="sidebar-item border-none flex flex-col cursor-pointer items-center justify-center px-5 py-2 mb-3 hover:menu-active" key={index+item.name}>
            {item.icon}
            <p className="font-thin	text-xs truncate">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SidebarBoxMini