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
  md:text-xl
  md:py-14
`

export const SectionTitle = tw.h2`
  text-3xl
  uppercase
  mb-7
  font-semibold
`

export const TitleSpan = tw.span`
  text-blue
`

export const SectionSubtitle = tw.h3`
  text-2xl
  mt-6
  mb-3
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