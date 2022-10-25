import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = tw.header`
  bg-dark
  text-light
`

export const Container = tw.div`
  container
  mx-auto
  max-w-[1200px]
  px-5
  py-4
  border-b-2

  sm:px-10
  sm:py-7
  lg:xl:px-5

  border-dark-200
`

export const PortfolioLink = tw(Link)`
  text-xl
  font-medium

  sm:text-2xl

  text-blue
`

export const NavContainer = tw.div`
  flex
  justify-between
  items-center
`

export const LandscapeLink = tw(Link)`
  ml-10
  text-lg

  hover:text-blue
  text-gray-light
`

export const PortraitLink = tw(Link)`
  text-lg
  w-full
  text-center
  rounded-md
  py-3
  border

  border-dark-200
  hover:border-gray-light
  text-gray-light
`

export const PortraitNav = tw.nav`
  landscape:hidden
  flex
  flex-col
  items-center
  p-3
  rounded-md
  mt-3
  animate-smooth
  
  bg-dark-200
`