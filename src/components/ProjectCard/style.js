import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex
  flex-col
  justify-between
  flex-grow
`

export const ImgContainer = tw.div`
  w-full
  border-l-[4px]
  mb-7
  overflow-hidden

  border-blue
`

export const ProjectImage = tw.img`
  w-full
  h-full
`

export const ContentContainer = tw.div`
  mb-8
  flex
  flex-col
  justify-between
`

export const ProjectTitle = tw.h3`
  text-2xl
  mb-4
`

export const ProjectDescription = tw.h3`
  text-xl
  mb-6

  text-gray-light
`

export const TecnologiesContainer = tw.div`
  flex
  gap-3

  text-blue
`

export const ButtonsContainer = tw.div`
  mt-5
  flex
  flex-wrap
  gap-x-5
  gap-y-3
`

export const ButtonBGBlue = tw.div`
  p-[2px]
  hover:animate-linkedin-btn
  rounded-md
  grow
  
  bg-gradient-to-tr
  from-purple-md
  to-turquoise
`

export const ButtonBGPurple = tw.div`
  p-[2px]
  hover:animate-github-btn
  rounded-md
  grow

  bg-gradient-to-br
  from-pink
  to-purple
`

export const Button = tw.a`
  flex
  items-center
  w-full
  justify-center
  text-center
  py-2
  px-5
  rounded-md

  bg-dark
`