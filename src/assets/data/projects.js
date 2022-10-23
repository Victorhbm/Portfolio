import heisenbergShoppingImg from '../img/heisenberg-2.png'
import trybetunesImg from '../img/trybetunes.png'
import bikcraftImg from '../img/bikcraft.png'
import storeManagerImg from '../img/store-manager.png'

const projects = [
  {
    name: "Heisenberg Shopping",
    description: "An online shop that can search for products from the Mercado Livre API, add, remove and edit products from the cart and view details of a product.",
    image: heisenbergShoppingImg,
    tecnologies: [
      'react',
      'CSS'
    ],
    codeLink: 'https://github.com/Victorhbm/heisenberg-shopping',
    projectLink: 'https://victorhbm.github.io/heisenberg-shopping/'
  },
  {
    name: "Trybetunes",
    description: "An app that can play music from a wide variety of bands and artists, create a favorite playlist, and edit the logged-in user's profile.",
    image: trybetunesImg,
    tecnologies: [
      'react',
      'CSS'
    ],
    codeLink: 'https://github.com/Victorhbm/trybetunes/',
    projectLink: 'https://victorhbm.github.io/trybetunes/'
  },
  {
    name: "Bikcraft",
    description: "A static application of a custom bicycle store. One of my first projects created.",
    image: bikcraftImg,
    tecnologies: [
      'HTML',
      'CSS',
      'javascript'
    ],
    codeLink: 'https://github.com/Victorhbm/bikcraft',
    projectLink: 'https://victorhbm.github.io/bikcraft/'
  },
  {
    name: "Store Manager",
    description: "A REST API of a sales management system capable of creating, viewing, deleting, and updating products and sales.",
    image: storeManagerImg,
    tecnologies: [
      'node',
      'mysql',
      'mocha',
      'chai'
    ],
    codeLink: 'https://github.com/Victorhbm/store-manager'
  },
]

export default projects;