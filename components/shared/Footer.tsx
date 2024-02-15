import Link from 'next/link'
// import ReactTooltip from "react-tooltip"

interface Props {
  Icon?: any,
  href?: string,
  text?: string,
  id?: string,
  src?: string,
  adjClass?: string,
}

const Icon: React.FC<Props> = (props) => {
  return <Link href={props.href}
  className="float-left mx-2 hover:opacity-75"
  data-tip={props.text}
  data-background-color="#4028fb"
  data-arrow-color="#4028fb"
  data-for={props.id}
  ><img src={`/social/${props.src}.svg`} alt={props.id} className={props.adjClass} /></Link>
}

const Footer: React.FC<React.ReactNode> = () => {

  // Scroll to top of page
  function scrollTop() {
    const pos: object = {top: 0, left: 0, behavior: 'smooth'}
    if (window) window.scrollTo(pos)
  }

  return <div className="bg-gray-900 shadow-lg relative flex justify-center z-20">
    <img src="/balance.svg" alt="Odd Scenes Favicon" className="w-20 h-20 sm:w-auto sm:h-auto absolute left-0 bottom-0" />

    <span className="text-gray-400 text-sm hidden sm:block ml-32 absolute left-0 mt-5">v13</span>

    {/* <ReactTooltip uuid="TT-email" id="email" />
    <ReactTooltip uuid="TT-twitter" id="twitter" />
    <ReactTooltip uuid="TT-github" id="github" />
    <ReactTooltip uuid="TT-behance" id="behance" />
    <ReactTooltip uuid="TT-twitch" id="twitch" /> */}

    <div className="max-w-md py-5">
      <a
        href="mailto:oddscenes@gmail.com"
        className="float-left mx-2 hover:opacity-75"
        data-tip="oddscenes@gmail.com"
        data-background-color="#4028fb"
        data-arrow-color="#4028fb"
        data-for="email"
      ><img src="/social/a-email.svg" alt=""/></a>
      <Icon href="https://x.com/oddscenes" text="X @oddscenes" id="x" src="b-x" />
      <Icon href="https://github.com/oddscenes" text="Github @oddscenes" id="github" src="c-github" />
      <Icon href="https://behance.com/oddscenes" text="Behance @oddscenes" adjClass="behance" id="behance" src="d-behance" />
      <Icon href="https://twitch.tv/oddscenes" text="Twitch @oddscenes" id="twitch" src="e-twitch" />
    </div>

    <span className="mr-0 sm:mr-10 text-white absolute right-0
      h-full w-16 cursor-pointer hover:bg-gray-800 flex"
      onClick={scrollTop}>
      <img src="/icons/arrow-up.svg" className="self-center block mx-auto" alt=""/>
    </span>
  </div>
}

export default Footer
