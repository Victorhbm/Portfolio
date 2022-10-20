import tw from "tailwind-styled-components"

export const Container = tw.div`
  container
  mx-auto
  max-w-[1200px]
  px-5
  py-7
`

export const SectionTitle = tw.h2`
  text-2xl
  uppercase
  mb-5
  font-semibold
`

export const SectionSubtitle = tw.h3`
  text-xl
  my-5
`

export const TecnologiesContainer = tw.div`
  flex
  flex-wrap
`

export const TecnologiesContent = tw.div`
  flex
  grow
  rounded-md
  items-center
  text-gray-light
  mr-2
  mb-2
  p-3
  bg-dark
`