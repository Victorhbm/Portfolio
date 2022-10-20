import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Header() {
  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!isActive);
  }

  return (
    <header className="bg-dark text-light">
      <div className="container mx-auto max-w-[1200px] px-5 py-7 border-b-2 border-dark-200">
        <div className="flex justify-between items-center">
          <Link className="text-2xl font-medium text-blue" to="/">Portfolio</Link>
          <nav className="portrait:hidden">
            <Link className="mr-10 text-lg hover:text-blue  text-gray-light" to="/projects">Projects</Link>
            <Link className="mr-10 text-lg hover:text-blue text-gray-light" to="/about">About</Link>
            <Link className="text-lg hover:text-blue  text-gray-light" to="/contact">Contact</Link>
          </nav>
          <nav className="landscape:hidden">
            <IconContext.Provider value={{ size: "2.5em" }}>
              <button onClick={handleToggle}>
                {isActive ? <MdClose className="animate-rotate" /> : <MdMenu className="animate-rotate" />}
              </button>
            </IconContext.Provider>
          </nav>
        </div>

        {isActive && (
          <nav className="landscape:hidden flex flex-col items-center p-3 rounded-md bg-dark-200 mt-3 animate-smooth">
            <Link className="text-lg w-full text-center rounded-md py-3 border border-dark-200 hover:border-gray-light text-gray-light" to="/projects">Projects</Link>
            <Link className="text-lg w-full text-center rounded-md py-3 border border-dark-200 hover:border-gray-light text-gray-light" to="/about">About</Link>
            <Link className="text-lg w-full text-center rounded-md py-3 border border-dark-200 hover:border-gray-light text-gray-light" to="/contact">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  )
}