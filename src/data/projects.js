import { angular, git, java, python, react, spring, tailwind } from './technologies'

const projects = [
  {
    name: 'Project 4.0',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...angular, focus: 0.3 },
      { ...spring, focus: 0.8 },
      { ...tailwind, focus: 0.2 },
      { ...python, focus: 0.7 }
    ],
  },
  {
    name: 'Portfolio',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...react, focus: 1 },
      { ...tailwind, focus: 0.9 },
    ],
  },
  {
    name: 'Project 3',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...angular, focus: 0.5 },
      { ...java, focus: 0.3 },
    ]

  },
  {
    name: 'Project 4',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...angular, focus: 0.5 },
      { ...java, focus: 0.3 },
    ]
  },
  {
    name: 'Project 5',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...react, focus: 0.5 },
      { ...tailwind, focus: 0.3 },
    ]
  },
  {
    name: 'Project 6',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...spring, focus: 0.5 },
      { ...python, focus: 0.3 },
      { ...git, focus: 0.2 }]
  },
  {
    name: 'Project 7',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...react, focus: 0.6 },
      { ...tailwind, focus: 0.3 },
    ]
  },
  {
    name: 'Project 8',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...spring, focus: 0.5 },
      { ...python, focus: 0.3 },
      { ...git, focus: 0.2 }
    ]
  },
  {
    name: 'Project 9',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...angular, focus: 0.5 },
      { ...java, focus: 0.3 },
    ]
  },
  {
    name: 'Project 10',
    description: {
      short: 'Short project description',
      long: 'Long project description'
    },
    image: 'https://via.placeholder.com/150',
    skills: [
      { ...react, focus: 0.5 },
      { ...tailwind, focus: 0.3 },
      { ...python, focus: 0.7 }
    ]
  },
]

export default projects;