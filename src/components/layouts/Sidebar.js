import SidebarBox from '../common/SidebarBox'
import SidebarBoxMini from '../common/SidebarBoxMini'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const menu = {
    section1: {
      title: '',
      items:  [ 
        { link: '/', name: 'หน้าแรก', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g ><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" ></path></g></svg>},
        { link: '/explore', name: 'สำรวจ', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g ><path d="M11.23 13.08c-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.71-.23.99a1.327 1.327 0 01-1.08.56c-.28 0-.55-.08-.77-.25zM22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-3.97-6.03L9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23z" ></path></g></svg>},
        { link: '/subscriptions', name: 'การติดตาม', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g ><path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z" ></path></g></svg>},
        { link: '/channel', name: 'Originals', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g ><path fillRule="nonzero" d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z" ></path></g></svg>},
        { name: 'YouTube Music', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g ><path d="M12 0.47998C5.63998 0.47998 0.47998 5.63998 0.47998 12C0.47998 18.36 5.63998 23.52 12 23.52C18.36 23.52 23.52 18.36 23.52 12C23.52 5.63998 18.36 0.47998 12 0.47998ZM12 18.82C8.22998 18.82 5.17998 15.77 5.17998 12C5.17998 8.22998 8.22998 5.17998 12 5.17998C15.77 5.17998 18.82 8.22998 18.82 12C18.82 15.77 15.77 18.82 12 18.82Z" fillRule="nonzero" ></path><path d="M12 6.02002C8.70996 6.02002 6.01996 8.70002 6.01996 12C6.01996 15.3 8.69996 17.98 12 17.98C15.3 17.98 17.98 15.3 17.98 12C17.98 8.70002 15.29 6.02002 12 6.02002ZM9.74996 15.4V8.60002L15.63 12L9.74996 15.4Z" fillRule="nonzero" ></path></g></svg>},
      ],
    },
    section2: {
      title: '',
      limit: 5,
      items:  [ 
        { name: 'คลังวิดีโอ', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g></svg>},
        { name: 'ประวัติการเข้าชม', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g><path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"></path></g></svg>},
        { name: 'วิดีโอของคุณ', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g><path d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z"></path><path d="M10.2 9v6.5l5-3.2-5-3.2z"></path></g></svg>},
        { name: 'ดูภายหลัง', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>},
        { name: 'Tailwind', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g><path d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"></path></g></svg>},
        { name: 'Work song', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g><path d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"></path></g></svg>},
        { name: 'วิดีโอที่ชอบ', icon: <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="h-6 w-6 mr-4" fill="currentColor"><g><path d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"></path></g></svg>},
      ],
    },
    section3: {
      title: 'การติดตาม',
      limit: 10,
      items:  [ 
        { name: 'Joma Tech', live: true, icon: <img width="24" height="24" className="rounded-full mr-4" alt="" src="https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s88-c-k-c0x00ffffff-no-rj"></img>},
        { name: 'Flutter', live: true, icon: <img width="24" height="24" className="rounded-full mr-4" alt="" src="https://yt3.ggpht.com/ytc/AKedOLRt1d4p7bPylasq_66BIC8-k3hkyVjJ2JICQITK=s88-c-k-c0x00ffffff-no-rj"></img>},
        { name: 'Vue Mastery', live: true, icon: <img width="24" height="24" className="rounded-full mr-4" alt="" src="https://yt3.ggpht.com/ytc/AKedOLTaTTjZNnrrDe78dmFGsvjpEmraDQ1jUTLG8_Up=s88-c-k-c0x00ffffff-no-rj"></img>},
        { name: 'GMM GRAMMY OFFICIAL', live: true, icon: <img width="24" height="24" className="rounded-full mr-4" alt="" src="https://yt3.ggpht.com/ytc/AKedOLTil9FZJAanF4diQXzDBw2X8m9oBYQCnw1_ml66jw=s88-c-k-c0x00ffffff-no-rj"></img>},
        { name: 'Trap Nation', live: true, icon: <img width="24" height="24" className="rounded-full mr-4" alt="" src="https://yt3.ggpht.com/ytc/AKedOLR3UYYjp461bQEzYvaT4yNk5p50sh9VPBKCnM4C8Q=s88-c-k-c0x00ffffff-no-rj"></img>},
        { name: 'Code Pioneers', new: true, icon: <img width="24" height="24" className="rounded-full mr-4" alt="" src="https://yt3.ggpht.com/ytc/AKedOLSjTRax0gnh5VYLVJHiSLznx2VNnSTRF7NKOTgG=s88-c-k-c0x00ffffff-no-rj"></img>},
        { name: 'เรื่องเล่าเช้านี้', new: true, icon: <img width="24" height="24" className="rounded-full mr-4" alt="" src="https://yt3.ggpht.com/ytc/AKedOLSXiw86azYZBp8uy36XH6NPSoDk6wwy857-qj4C-A=s88-c-k-c0x00ffffff-no-rj"></img>},
        { name: 'NottDev', new: true, icon: <img width="24" height="24" className="rounded-full mr-4" alt="" src="https://yt3.ggpht.com/ytc/AKedOLTLuUPlwgw1eS2TP5-rXDe2VXBXrAOCq0UkSGVW=s88-c-k-c0x00ffffff-no-rj"></img>},
      ],
    },
  }
  const onToggleSidebar = () => {
    if(document.getElementsByClassName('full-sidebar')[0].classList.contains('hidden')) { // open full sidebar
      document.getElementsByClassName('full-sidebar')[0].classList.remove('hidden')
      document.getElementsByClassName('full-sidebar')[0].classList.add('block')
      document.getElementsByClassName('mini-sidebar')[0].classList.add('hidden')
      document.getElementById('content').classList.add('ml-60')
      document.getElementById('content').classList.remove('ml-20')
    } else {  // open mini sidebar
      document.getElementsByClassName('mini-sidebar')[0].classList.remove('hidden')
      document.getElementsByClassName('mini-sidebar')[0].classList.add('block')
      document.getElementsByClassName('full-sidebar')[0].classList.add('hidden')
      document.getElementById('content').classList.remove('ml-60')
      document.getElementById('content').classList.add('ml-20')
    }
  }

  return (

    <div id="sidebar" className="fixed left-0 top-0 transform transition duration-200 ease-in-out translate-x-0">
     
     {/* Header */}
      <div className="header flex items-center justify-start p-4">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onToggleSidebar} className="h-6 w-6 ml-2 mr-5 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
         <Link to="/"><svg viewBox="0 0 97 20" preserveAspectRatio="xMidYMid meet" focusable="false" fill="currentColor"  className="h-5 text-white mr-8"><g viewBox="0 0 97 20" preserveAspectRatio="xMidYMid meet" ><g ><path d="M27.9704 3.12324C27.6411 1.89323 26.6745 0.926623 25.4445 0.597366C23.2173 2.24288e-07 14.2827 0 14.2827 0C14.2827 0 5.34807 2.24288e-07 3.12088 0.597366C1.89323 0.926623 0.924271 1.89323 0.595014 3.12324C-2.8036e-07 5.35042 0 10 0 10C0 10 -1.57002e-06 14.6496 0.597364 16.8768C0.926621 18.1068 1.89323 19.0734 3.12324 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6769 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9704 3.12324Z" fill="#FF0000" ></path><path d="M11.4275 14.2854L18.8475 10.0004L11.4275 5.71533V14.2854Z" fill="white" ></path></g><g id="youtube-red-paths" ><path d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z" ></path><path d="M46.5336 5.8345L46.3901 9.08238C45.2259 8.83779 44.264 9.02123 43.836 9.77382V18.5579H41.1196V6.0391H43.2857L43.5303 8.75312H43.6337C43.9183 6.77288 44.8379 5.771 46.0232 5.771C46.1949 5.7757 46.3666 5.79687 46.5336 5.8345Z" ></path><path d="M49.6567 13.2456V13.8782C49.6567 16.0842 49.779 16.8415 50.7198 16.8415C51.6182 16.8415 51.8228 16.1501 51.8439 14.7178L54.2734 14.8613C54.4568 17.5565 53.0481 18.763 50.6586 18.763C47.7588 18.763 46.9004 16.8627 46.9004 13.4126V11.223C46.9004 7.58707 47.8599 5.80908 50.7409 5.80908C53.6407 5.80908 54.3769 7.32131 54.3769 11.0984V13.2456H49.6567ZM49.6567 10.6703V11.5687H51.7193V10.675C51.7193 8.37258 51.5547 7.71172 50.6821 7.71172C49.8096 7.71172 49.6567 8.38669 49.6567 10.675V10.6703Z" ></path><path d="M68.4103 9.09902V18.5557H65.5928V9.30834C65.5928 8.28764 65.327 7.77729 64.7132 7.77729C64.2216 7.77729 63.7724 8.06186 63.4667 8.59338C63.4832 8.76271 63.4902 8.93439 63.4879 9.10373V18.5605H60.668V9.30834C60.668 8.28764 60.4022 7.77729 59.7884 7.77729C59.2969 7.77729 58.8665 8.06186 58.5631 8.57456V18.5628H55.7456V6.03929H57.9728L58.2221 7.63383H58.2621C58.8947 6.42969 59.9178 5.77588 61.1219 5.77588C62.3072 5.77588 62.9799 6.36854 63.288 7.43157C63.9418 6.34973 64.9225 5.77588 66.0443 5.77588C67.7564 5.77588 68.4103 7.00119 68.4103 9.09902Z" ></path><path d="M69.8191 2.8338C69.8191 1.4862 70.3106 1.09814 71.3501 1.09814C72.4132 1.09814 72.8812 1.54734 72.8812 2.8338C72.8812 4.22373 72.4108 4.57181 71.3501 4.57181C70.3106 4.56945 69.8191 4.22138 69.8191 2.8338ZM69.9837 6.03935H72.6789V18.5629H69.9837V6.03935Z" ></path><path d="M81.891 6.03955V18.5631H79.6849L79.4403 17.032H79.3792C78.7466 18.2573 77.827 18.7677 76.684 18.7677C75.0095 18.7677 74.2522 17.7046 74.2522 15.3975V6.0419H77.0697V15.2352C77.0697 16.3382 77.3002 16.7874 77.867 16.7874C78.3844 16.7663 78.8477 16.4582 79.0688 15.9902V6.0419H81.891V6.03955Z" ></path><path d="M96.1901 9.09893V18.5557H93.3726V9.30825C93.3726 8.28755 93.1068 7.7772 92.493 7.7772C92.0015 7.7772 91.5523 8.06177 91.2465 8.59329C91.263 8.76027 91.2701 8.9296 91.2677 9.09893V18.5557H88.4502V9.30825C88.4502 8.28755 88.1845 7.7772 87.5706 7.7772C87.0791 7.7772 86.6487 8.06177 86.3453 8.57447V18.5627H83.5278V6.0392H85.7527L85.9973 7.63139H86.0372C86.6699 6.42725 87.6929 5.77344 88.8971 5.77344C90.0824 5.77344 90.755 6.3661 91.0631 7.42913C91.7169 6.34729 92.6976 5.77344 93.8194 5.77344C95.541 5.77579 96.1901 7.0011 96.1901 9.09893Z" ></path><path d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z" ></path></g></g></svg></Link>
      </div>
      {/* Header */}

      {/* Full Sidebar Section */}
      <div className="full-sidebar overflow-y-scroll h-screen pb-14 w-60 hidden">
        {Object.keys(menu).map((v,index) => <SidebarBox menu={menu[v].items} title={menu[v].title} limit={menu[v].limit} key={index} />) }
      </div>
      {/* /Full Sidebar Section */}

      {/* Mini Sidebar Section */}
      <div className="mini-sidebar overflow-y-scroll h-screen pb-14 w-20">
        <SidebarBoxMini menu={menu.section1.items} />
      </div>
      {/* /Mini Sidebar Section */}
 
    </div>
  )
}

export default Sidebar