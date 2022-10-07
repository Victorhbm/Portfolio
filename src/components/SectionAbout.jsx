import VictorPhoto from '../images/victor.jpg'

export default function SectionAbout() {
  return (
    <section className="bg-dark text-light h-[839px]">
      <div className="container mx-auto max-w-[1200px] px-5 py-32 flex justify-between">
        <div>
          <p>Hello, i am</p>
          <h1>Victor Hugo</h1>
          <p>Full Stack Developer</p>

          <div>
            <button>
              LinkedIn
            </button>
            <button>
              GitHub
            </button>
          </div>
        </div>

        <div>
          <div className='ring ring-blue rounded-full w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-blue overflow-hidden'>
            <img src={VictorPhoto} alt="Victor" className='' />
          </div>
        </div>
      </div>
    </section>
  )
}