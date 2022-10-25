import tw from "tailwind-styled-components"

export const Container = tw.div`
  font-inter
  min-h-screen
  flex
  flex-col
  justify-between

  bg-dark
  text-light
`

export const TextContainer = tw.div`
  container
  mx-auto
  max-w-[1200px]
  px-5
  py-10
  text-lg
  text-center

  sm:px-10
  md:text-xl
  md:py-14
  lg:xl:px-5
`

export const Paragraph = tw.p`
  text-2xl
  mb-4

  sm:text-4xl
`