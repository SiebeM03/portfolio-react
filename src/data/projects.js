import { angular, docker, java, mongodb, python, react, spring, sql, tailwind } from './technologies'
import { DescriptionIcon, ResultsIcon, TechnologiesIcon } from '../pages/works/details/segmentIcons'


const projectTabs = {
  description: {
    title: 'description',
    icon: <DescriptionIcon/>
  },
  technologies: {
    title: 'technologies',
    icon: <TechnologiesIcon/>
  },
  results: {
    title: 'results',
    icon: <ResultsIcon/>
  }
}


const projects = [
  {
    name: 'Project 4.0',
    tabs: [projectTabs.description, projectTabs.technologies, projectTabs.results],
    description: {
      short: <p>School project for an actual client in which we got to work with a multi-disciplinary team to create and
        host a web application.</p>,
      long: (
          <div className="space-y-4">
            <p>
              During the last year of my, I participated in a school project in collaboration with the Flemish Institute
              for Technological Research (VITO). Our multidisciplinary team included 3 Application Development students,
              2 Cloud & Cyber security students, and 1 Artificial Intelligence student. Together, we developed a web
              application and a mobile app to detect an invasive weed species called Yellow Nutsedge by having drone
              images be analysed by our AI model. The project required farmers to register their fields and upload drone
              images, the AI then analyses all images for Yellow Nutsedge. The weeds that our AI detected will then be
              shown on a heatmap.
            </p>
            <p>
              In this project I mainly focused on the authentication and authorisation of users, this means that I had
              to create a secure authentication server using python and OAuth2.0.
            </p>
            <p>
              Next I secured all API endpoints in the back-end to ensure that only authenticated users could access
              the data, this was done using Java and Spring.
            </p>
            <p>
              Besides all the authentication, I also had to create a front-end page using Angular to allow users to
              login to the application. Lastly, I also had to create a page where users could upload drone images. These
              images were then sent to the back-end where they were analysed by our AI model. This was complicated since
              most drone images were about 5-10MB in size, so I had to make sure that the images are being sent to the
              back-end efficiently.
            </p>
          </div>
      )
    },
    skills: [
      { ...spring, focus: 0.8 },
      { ...python, focus: 0.7 },
      { ...angular, focus: 0.3 },
      { ...tailwind, focus: 0.2 },
    ],
    results: [
      {
        title: 'Login page',
        image: process.env.PUBLIC_URL + '/images/results/project40/login_page.png',
        description: 'This is the login page of the application. Here users can login to the application using their credentials. I have created this page using Angular.'
      },
      {
        title: 'Home page',
        image: process.env.PUBLIC_URL + '/images/results/project40/home_page.png',
        description: 'This is the home page of the application. Here users can see all the fields they have registered. This page shows a heatmap that displays where the Yellow Nutsedge is located on fields. On the image you can see how there is a red dot at the top of the field. Since this project contains sensitive data, I have censored certain elements on the screenshot. This is the home page of the application. Here users can see all the fields they have registered. This page shows a heatmap that displays where the Yellow Nutsedge is located on fields. On the image you can see how there is a red dot at the top of the field. Since this project contains sensitive data, I have censored certain elements on the screenshot.'
      },
      {
        title: 'Upload page',
        image: process.env.PUBLIC_URL + '/images/results/project40/upload_page.png',
        description: 'This is the upload page of the application. Here users can upload drone images of their fields. These images are then sent to the back-end where they are analysed by our AI model. The hardest part of this page was to make sure that the images are being sent to the back-end efficiently. Since most drone images are about 5-10MB in size, I had to make sure that the images are being sent to the back-end efficiently. This is the upload page of the application. Here users can upload drone images of their fields. These images are then sent to the back-end where they are analysed by our AI model. The hardest part of this page was to make sure that the images are being sent to the back-end efficiently since most drone images are about 5-10MB in size.'
      },
    ]
  },

  {
    name: 'Portfolio',
    tabs: [projectTabs.technologies],
    github: 'https://github.com/SiebeM03/portfolio-react',
    description: {
      short: <p>This is my portfolio website, the one you're visiting right at this moment. I created this website to
        showcase my projects and skills.</p>,
    },
    skills:
        [
          { ...react, focus: 1 },
          { ...tailwind, focus: 0.9 },
        ],
  },

  {
    name: 'Project Enterprise Development Experience',
    tabs: [projectTabs.description, projectTabs.technologies],
    github: 'https://github.com/BrentSimons/Project-EDE-BNB',
    description: {
      short: 'School project in which we had to create a cluster of microservices that can interact with each other.',
      long: (
          <div className="space-y-4">
            <p>
              During my education, I participated in a school project in which we had to create a cluster of
              microservices that can interact with each other. The goal of this project was to give us a better
              understanding of how microservices work and how they can interact with each other. We had to create a web
              application that allowed users to book a room at a bed&breakfast. This project was done in collaboration
              with one other students. All proof and documentation can be found on the GitHub page of the project, I
              recommend you to take a look at it for more context.
            </p>
            <p>
              In this project I mainly focused the Room and Reservation microservices, I had to create a microservice
              that handled all the bookings and room availability. This was done using Java and Spring. The Room service
              was connected to a MongoDB database to store all the information about the rooms while the Reservation
              service was connected to a SQL database.
            </p>
          </div>
      )
    },
    skills:
        [
          { ...spring, focus: 0.9 },
          { ...docker, focus: 0.7 },
          { ...sql, focus: 0.3 },
          { ...mongodb, focus: 0.3 },
        ],
  }
]

export default projects;