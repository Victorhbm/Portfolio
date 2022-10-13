import VictorPhoto from '../images/victor.jpg'
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function SectionAbout() {
  return (
    <section className="container mx-auto max-w-[1200px] px-5 py-10 flex flex-col justify-between">
      <div className='ring hover:ring-offset-4 duration-300 ease-in-out hover:scale-110 hover:ring-offset-light mx-auto mb-14 ring-light hover:ring-blue rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-blue overflow-hidden'>
        <img src={VictorPhoto} alt="Victor" />
      </div>

      <div className='text-lg'>
        <div className='text-center uppercase font-semibold'>
          <h2 className='tracking-[0.2em]'>Hello, i am</h2>
          <h1 className='text-3xl text-blue my-2 font-bold'>Victor Hugo</h1>
          <h2 className='tracking-[0.2em]'>Full Stack Developer</h2>
        </div>

        <div className='mt-20 flex justify-evenly flex-wrap'>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <div className='p-[2px] hover:animate-linkedin-btn bg-gradient-to-tr from-purple-md to-turquoise rounded-md grow mr-7'>
              <a href="https://www.linkedin.com/in/victorhbm/" target="_blank" rel="noreferrer noopener" className='flex items-center w-full bg-dark justify-center text-center py-2 px-5 rounded-md'>
                <FiLinkedin className='inline mr-2' />
                LinkedIn
              </a>
            </div>
            <div className='p-[2px] hover:animate-github-btn bg-gradient-to-br from-pink to-purple rounded-md grow'>
              <a href="https://github.com/Victorhbm" target="_blank" rel="noreferrer noopener" className='flex items-center w-full bg-dark justify-center text-center py-2 px-5 rounded-md'>
                <FiGithub className='inline mr-2' />
                GitHub
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </section>
  )
}