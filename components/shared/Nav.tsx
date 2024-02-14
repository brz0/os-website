import {useState, useEffect, useRef} from 'react'
import {useStoreState, useStoreActions} from '../../hooks/useStore'
import Link from 'next/link'
// import ReactTooltip from "react-tooltip"
import Cookies from 'js-cookie'
import {useRouter, NextRouter} from 'next/router'
import MenuButton from './MenuBtn'
import {titleCase} from '../../helpers/format-text'
import Search from './Search'
import postfeed from '../../markdown/0-index'
import useOnClickOutside from '../../hooks/useOnClickOutside'

interface Content {
  url: string
  icon?: string
  title: string,
  isNew?: boolean,
}

const navItems: Content[] = [
  { url: "/", icon: '/icons/home', title: 'Home' },
  { url: "/projects", icon: '/icons/projects', title: 'Projects' },
  { url: "/labs", icon: '/icons/labs', title: 'Labs' },
  { url: "/blog", icon: '/icons/blog', title: 'Blog' },
  // { url: "/shop", icon: '/icons/shop', title: 'Shop' },
]

export const btnItems: Content[] = [
  // { url: "/sound", icon: '/icons/soundon.svg', title: 'Sound', isNew: false },
  // { url: "/profile", icon: '/icons/profile.svg', title: 'Profile', isNew: false },
  // { url: "/cart", icon: '/icons/cart.svg', title: 'Cart', isNew: true },
  // { url: "/chat", icon: '/icons/chat.svg', title: 'Chat', isNew: false },
  // { url: "/mode", icon: '/icons/light.svg', title: 'Light Mode', isNew: false },
]

export const mobileMenu: Content[] = [
  { url: "/", icon: '/icons/profile.svg', title: 'Home'},
  { url: "/projects", icon: '/icons/profile.svg', title: 'Projects'},
  { url: "/labs", icon: '/icons/profile.svg', title: 'Labs'},
  { url: "/blog", icon: '/icons/profile.svg', title: 'Blog'},
  // { url: "/shop", icon: '/icons/profile.svg', title: 'Shop'},
]

export const mobileSocial: Content[] = [
  { url: "https://reddit.com/r/oddscenes", icon: '/icons/profile.svg', title: 'Reddit'},
  { url: "https://reddit.com/r/oddscenes", icon: '/icons/profile.svg', title: 'Twitter'},
  { url: "https://reddit.com/r/oddscenes", icon: '/icons/profile.svg', title: 'Github'},
  { url: "https://reddit.com/r/oddscenes", icon: '/icons/profile.svg', title: 'Email'},
]

const NavItem: React.FC<Content> = ({url, icon, title}, enter) => {

  const sound = useStoreState(state => state.sound.sound)
  const router: NextRouter = useRouter()
  const path: string = router.pathname
  const active: boolean = path === url ? true : false

  return <li className="md:mx-2 lg:mx-3 xl:mx-4" key={title}>
    <Link href={url}
        className="flex items-stretch py-1 nav-item-link">
        <img src={active ? icon + '-active.svg' : icon + '.svg'}
          className="flex flex-none pr-2 hover:blue-800" />
        <span className="text-gray-200 text-sm">{title}</span>
    </Link>
  </li>
}

const Nav: React.FC<React.ReactNode> = () => {

  const soundIcon = useStoreState(state => state.sound.soundIcon)
  const setSound = useStoreActions(actions => actions.sound.setSound)
  const toggleSound = useStoreActions(actions => actions.sound.toggleSound)

    // Handle click outside search menu
    const ref = useRef()
    useOnClickOutside(ref, () => setShow(false))

    const [show, setShow] = useState<boolean>(false)

  useEffect(() => {

    // Setup the sound cookie & icon on load - v2
    // setSound()
  }, [])

  return <div className="fixed w-full top-0 z-40">
    <nav className="bg-gray-900 rounded-sm m-1 p-2 grid grid-cols-12 gap-1 shadow-lg">

      {/* <ReactTooltip uuid="tooltip" /> */}

      <div className="sm:col-span-12 md:col-span-5 lg:col-span-3 flex self-center">

        <ul className="flex">
          <MenuButton mobile />
        </ul>

        <Link href="/" className="flex flex-none md:block md:absolute md:left-0 md:top-0 md:mt-4 md:ml-4">
          <img src="/logo-wordmark.svg" alt="Odd Scenes Logo"
            className="w-40 xl:w-40 nav-logo" />
        </Link>


        { show && <div className="absolute top-0 right-0 tablet-dd" ref={ref}>
          <Search />
        </div> }

        <ul className="absolute right-0 mr-2 md:hidden">
          <li className={`bg-gray-700 hover:bg-gray-800 cursor-pointer
            rounded-sm mr-1 flex self-center py-2 px-2`} onClick={() => setShow(true)}>
            <a className="w-4">
              <img src="/icons/search.svg" alt="Menu" className="nav-search" />
            </a>
          </li>
        </ul>

        {/* Optional Badge */}
        {/* <div className="text-white ml-2 hidden md:block
          text-xs bg-blue px-1 rounded-sm nav-badge">
          This is message!
        </div> */}
      </div>

      <div className="hidden md:block md:col-span-7 lg:col-span-5">
        <ul className="flex md:justify-end lg:justify-center top-menu">
          {navItems.map(({url, icon, title}, i) =>
            <NavItem title={title} icon={icon} url={url} key={i} />)}

          <MenuButton />
        </ul>
      </div>

      <div className="hidden lg:block lg:col-span-4">
        <div className="flex justify-end">
          {/* Option Buttons - v2 */}

          {/* <ul className="flex justify-between">
            {btnItems.map(({url, icon, title, isNew}, i) =>
              <li className="bg-gray-700 hover:bg-gray-800 cursor-pointer
                rounded-sm mr-1 flex flex-none py-1 xl:px-2 lg:px-1" key={i}
                data-tip={titleCase(url.substring(1))}
                data-background-color="#4028fb"
                data-arrow-color="#4028fb">
                {url !== "/sound" &&
                  <Link href={url} className="self-center relative">
                    {isNew && <span className="absolute bg-red w-1 h-1
                      rounded-full right-0 top-0" />}
                    <img src={icon} alt={title} className="flex flex-none w-4" />
                  </Link>
                }
              </li>
            )}


            <li className="bg-gray-700 hover:bg-gray-800 cursor-pointer
              rounded-sm mr-1 flex flex-none py-1 xl:px-2 lg:px-1"
              data-tip={"Sound"}
              data-background-color="#4028fb"
              data-arrow-color="#4028fb"
              onClick={(e) => {toggleSound(); e.persist()}}>
                <img src={soundIcon} alt="Sound"
                className="flex flex-none w-4" />
            </li>
          </ul> */}

          <Search />
        </div>
      </div>
    </nav>
  </div>
}

export default Nav
