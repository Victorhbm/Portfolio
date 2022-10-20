import tw from "tailwind-styled-components";

export const Container = tw.section`
  container
  mx-auto
  max-w-[1200px]
  px-5
  py-10
  flex
  flex-col
  justify-between
`

export const ImgContainer = tw.div`
  ring
  hover:ring-offset-4
  duration-300
  ease-in-out
  hover:scale-110
  mx-auto
  mb-14
  rounded-full
  w-[200px]
  h-[200px]
  lg:w-[400px]
  lg:h-[400px]
  overflow-hidden

  hover:ring-offset-light
  ring-light
  hover:ring-blue
  bg-blue
`

export const TextContainer = tw.div`
  text-center
  uppercase
  font-semibold
`

export const Title = tw.h1`
  text-3xl
  my-2
  font-bold

  text-blue
`

export const SubTitle = tw.h2`
  tracking-[0.2em]
`

export const ButtonsContainer = tw.div`
  mt-20
  flex
  justify-evenly
  flex-wrap
`

export const ButtonBGBlue = tw.div`
  p-[2px]
  hover:animate-linkedin-btn
  rounded-md
  grow
  mr-7
  
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
  bg-dark
  justify-center
  text-center
  py-2
  px-5
  rounded-md
`