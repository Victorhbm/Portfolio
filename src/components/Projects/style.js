import tw from "tailwind-styled-components";

export const Section = tw.section`
  bg-dark
  text-light
`

export const Container = tw.div`
  container
  mx-auto
  max-w-[1200px]
  px-5
  py-7

  sm:px-10
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

export const ProjectsContainer = tw.div`
  grid
  md:grid-cols-2
  gap-10
  gap-y-14
`