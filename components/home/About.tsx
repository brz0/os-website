const About: React.FC<React.ReactNode> = () => {

  return <div className="px-12 py-12 md:py-40 h-auto bg-gray-900 about relative">
    <div className="container mx-auto md:px-12 lg:px-24">

      <div className="grid grid-cols-12 md:h-full">
        <div className="col-span-12 md:col-span-5 flex items-center">
          {/* <div className="bg-gray-500 w-full h-64 mb-10"></div> */}
          <img src="/art/about-front.png"
            // 42
            className="absolute bottom-0 mx-auto right-0 z-0" style={{left: '-46rem', maxWidth: '800px'}} />
        </div>
        <div className="hidden md:flex md:col-span-1"></div>
        <div className="col-span-12 md:col-span-6 flex items-center text-white text-xl relative z-10">
          <div>
            <img
              src="/art/avatar-illustration.png"
              className="w-24 mb-4"
              style={{borderRadius: '1.5rem', cursor: 'crosshair'}}
              onMouseEnter={(e) => e.target.src = '/home/profile.jpg'}
              onMouseLeave={(e) => e.target.src = '/art/avatar-illustration.png'}
            />
            <p className="mb-8">Hi, my name is Justin Brazeau and I’m a Canadian web designer.
            I've been designing and building websites since the early days of Geocities.
            <br /><br />Lately I'm focused on frontend development with CSS, Javascript &amp; Node. I
            have a strong focus on layout and UI design.</p>

            <div className="grid grid-cols-7">
              <div className="col-span-7 md:col-span-3 mb-8 md:mb-auto">
                <h2 className="uppercase mb-4 md:pr-4">Design</h2>
                <ul className="text-gray-200 md:pr-4">
                  <li className="mb-3">Web &amp; UI Design</li>
                  <li className="mb-3">Graphic Design</li>
                  <li className="mb-3">Digital Art</li>
                </ul>
              </div>
              <div className="col-span-7 md:col-span-3">
              <h2 className="uppercase mb-4 md:pl-4">Tech</h2>
                <ul className="text-gray-200 md:pl-4">
                  <li className="gr-rb-dark gr-rb-dark-home mb-3">Frontend Dev</li>
                  <li className="mb-3">Backend Integration</li>
                  <li className="mb-3">DevOps &amp; Admin</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
}

export default About
