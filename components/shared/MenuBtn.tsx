import {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import {btnItems, mobileMenu} from './Nav'
import {useKeyPress} from '../../hooks/useKeyPress'
import Search from '../shared/Search'
import useOnClickOutside from '../../hooks/useOnClickOutside'

interface Viewport {
  mobile?: boolean
}
const MenuButton: React.FC<Viewport> = ({mobile}) => {

  let viewport: string;
  const sm:string = 'block md:hidden'
  const md:string = 'hidden md:block lg:hidden ml-2'

  if (mobile) viewport = sm
  else viewport = md

  const [show, setShow] = useState<boolean>(false)

  // On Escape key press, close menu
  const escPress = useKeyPress('Escape')
  useEffect(() => {
    if (show) setShow(false)
  }, [escPress])

  // Handle click outside search menu
  const ref = useRef()
  useOnClickOutside(ref, () => setShow(false))

  // Remove body scroll if menu is open
  useEffect(() => {
    if (show && viewport === sm) window.document.body.style.overflow = "hidden"
    if (!show && viewport === sm) window.document.body.style.overflow = "auto"
  }, [show])

  return (<>
    <li className={`bg-gray-700 hover:bg-gray-800 cursor-pointer rounded-sm
      flex self-center py-2 px-2 ${viewport}`} onClick={() => setShow(!show)}>
      <a className="w-4">
        <img src="/icons/menu.svg" alt="Menu" />
      </a>
    </li>

    {(show && viewport === md) &&
      <div className="absolute top-0 right-0 tablet-dd" ref={ref}>
        <Search />
      </div>
    }

    {(show && viewport === sm) &&
      <div className="fixed left-0 right-0 top-0 w-full h-full
        z-10 bg-gray-900">

      <div className="fixed w-full">
        <div className="m-5">
          <ul className="flex justify-between">
            <li className="w-12 h-12 flex justify-center">
              <img src="/icons/close.svg" alt="Close Menu"
                onClick={() => setShow(false)}
                className="w-10 cursor-pointer" />
            </li>
            {btnItems.map(({url, icon, title}, i) => <li
              className="w-12 h-12 flex justify-center" key={i}>
              <img src={icon} className="w-6" /></li>)}
          </ul>
        </div>
      </div>

      <div className="h-full flex items-center">
        <div className="ml-8 pt-6 pb-2">
        {mobileMenu.map(({url, icon, title}, i) => <span key={i}>
          <Link href={url}>
            <div className="menu-text text-4xl text-white mb-6 hover:opacity-85">{title}</div>
          </Link>
          </span>
        )}
        </div>
      </div>

      <div className="fixed w-full bottom-0 bg-gray-800 py-3 flex justify-center">
        <div className="max-w-md">
          <a href="mailto:oddscenes@gmail.com" className="float-left mx-2"><img src="/social/a-email.svg" className="my-4 w-6 email-mobile" alt="email"/></a>
          <Link href="https://twitter.com/oddscenes" className="float-left mx-2"><img src="/social/b-twitter.svg" className="my-4 w-6" alt="twitter"/></Link>
          <Link href="https://github.com/oddscenes" className="float-left mx-2"><img src="/social/c-github.svg" className="my-4 w-6 github-mobile" alt="github"/></Link>
          <Link href="https://behance.com/oddscenes" className="float-left mx-2"><img src="/social/d-behance.svg" className="my-4 w-6 behance-mobile" alt="behance"/></Link>
          <Link href="https://twitch.tv/oddscenes" className="float-left mx-2"><img src="/social/e-twitch.svg" className="my-4 w-5 twitch-mobile" alt="twitch"/></Link>
        </div>
      </div>

    </div>
    }
    </>
  )
}

export default MenuButton
