import {
  IconBrandAzure,
  IconBrandFirebase,
  IconBrandGolang,
  IconFriends,
} from '@tabler/icons-react'
import {
  IconBook2,
  IconBrandTailwind,
  IconChecks,
  IconLink,
  IconPencil,
  IconPhoto,
  IconTools,
} from '@tabler/icons-react'
import {
  IconBrandDjango,
  IconBrandNextjs,
  IconBrandPlanetscale,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandTypescript,
  IconMarkdown,
} from '@tabler/icons-react'

const getIconByName = (name: string) => {
  switch (name) {
    case 'Typescript': {
      return IconBrandTypescript
    }
    case 'PlanetScale': {
      return IconBrandPlanetscale
    }
    case 'Next.js': {
      return IconBrandNextjs
    }
    case 'Prisma': {
      return IconBrandPrisma
    }
    case 'MDX': {
      return IconMarkdown
    }
    case 'Tailwindcss': {
      return IconBrandTailwind
    }
    case 'Tools': {
      return IconTools
    }
    case 'Checks': {
      return IconChecks
    }
    case 'Book2': {
      return IconBook2
    }
    case 'Link': {
      return IconLink
    }
    case 'Pencil': {
      return IconPencil
    }
    case 'Photo': {
      return IconPhoto
    }
    case 'Friends': {
      return IconFriends
    }
    case 'Firebase': {
      return IconBrandFirebase
    }
    case 'Python': {
      return IconBrandPython
    }
    case 'Django': {
      return IconBrandDjango
    }
    case 'Go': {
      return IconBrandGolang
    }
    case 'Azure': {
      return IconBrandAzure
    }
    default: {
      throw Error('Icon not found')
    }
  }
}

export default getIconByName
