import tw from "tailwind-styled-components"

export const Section = tw.section`
  bg-dark-200
  text-light
`

export const Container = tw.div`
  container
  mx-auto
  max-w-[1200px]
  px-5
  py-7
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

export const SectionSubtitle = tw.h3`
  text-2xl
  mt-8
  mb-5
`

export const TecnologiesContainer = tw.div`
  grid
  grid-cols-2
  gap-4

  md:grid-cols-3
  lg:grid-cols-4
`

export const TecnologiesContent = tw.div`
  flex
  flex-col
  justify-center
  rounded-md
  items-center
  p-4
  gap-x-4
  gap-y-2

  md:flex-row

  text-gray-light
  bg-dark
`