import React, { useState } from "react"
import { Link } from 'react-router-dom'

const SidebarBox = ({title, menu, limit }) => {
  const totalMenu = menu.length
  const [showAll, setShowAll] = useState(false)
  const [items, setItems] = useState(limit ? menu.slice(0, limit) : menu)
  
  function handleSeeMoreClick () {
    setShowAll(prevState => !prevState)
    setItems(!showAll ? menu : menu.slice(0, limit))
  }

  return (
    <div className="sidebar-box py-3">
      { title && <h4 className="section-title px-5 py-1 text-sm">{title}</h4> }
      {items.map((item, index) => (
        <Link to={item.link} key={item.name}>
          <div className="sidebar-item flex cursor-pointer items-center px-5 py-2 hover:menu-active" key={index+item.name}>
            {item.icon}
            <p className="font-thin	text-sm flex-1 truncate">{item.name}</p>
            { item.live 
                ? 
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-4 w-4 live" fill="currentColor" ><g>
                    <path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z" ></path>
                    <circle cx="12" cy="12" r="3" ></circle></g>
                  </svg> 
                : item.new 
                  ? <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  : <div></div>
            }
          </div>
        </Link>
      ))}
      {limit && totalMenu > limit && 
        <div className="sidebar-item flex cursor-pointer items-center px-5 py-2 hover:menu-active" onClick={handleSeeMoreClick}>
          { showAll 
              ? <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g></svg>
              : <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g></svg>
          }
          <p className="font-thin	text-sm flex-1 truncate">{!showAll ? 'แสดงเพิ่มเติม' : 'แสดงน้อยลง'}</p>
        </div>
      }
    </div>
  )
}

export default SidebarBox