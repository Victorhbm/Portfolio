import tw from "tailwind-styled-components"

export const Section = tw.section`
  text-light

  ${props => props.bgDark ? "bg-dark" : "bg-dark-200"}
`

export const Container = tw.div`
  container
  mx-auto
  max-w-[1200px]
  px-5
  py-10
  text-lg

  sm:px-10
  md:text-xl
  md:py-14
  lg:xl:px-5
`

export const SectionTitle = tw.h2`
  text-3xl
  uppercase
  mb-10
  font-semibold
`

export const TitleSpan = tw.span`
  text-blue
`

export const MainContainer = tw.div`
  landscape:grid
  landscape:grid-cols-2
  landscape:gap-10
`

export const InputContainer = tw.div`
  grid
  grid-cols-2
  gap-10
  mb-8
`

export const Input = tw.input`
  border-b-2
  focus:outline-none
  py-1
  px-2

  ${props => props.bgDark ? "bg-dark" : "bg-dark-200"}
`

export const TextArea = tw.textarea`
  border-2
  focus:outline-none
  py-1
  px-2
  w-full
  h-[100px]
  resize-none

  ${props => props.bgDark ? "bg-dark" : "bg-dark-200"}
`

export const Button = tw.button`
  py-2
  px-5
  mt-8
  rounded-md
  w-full
  font-bold

  text-dark-200
  bg-blue
  hover:bg-light
`
