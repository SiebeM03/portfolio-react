import { projectTabs } from '../../data/projects'
import ProjectDetails from '../works/details/projectDetails'
import { git, react, spring, sql, tailwind } from '../../data/technologies'

const Button = ({ onClick, children }) => (
    <button onClick={ onClick }
            className="duration-200 font-bold underline decoration-color-accent decoration-2 hover:text-color-accent">{ children }</button>
)

const DocumentsCard = () => {
  return (
      <div className="bg-color-background-300 border-2 border-color-background-200 rounded-lg p-4 space-y-2
            sm:max-w-80 mx-auto sm:float-start sm:mr-6 sm:mb-4
          ">


        <img className="w-48 mx-auto"
             src={ process.env.PUBLIC_URL + '/images/lykiosLogo.png' } alt="Lykios logo"/>

        <p>For more information about my internship, you can take a look at the following document (written in
          Dutch).</p>

        <div className="flex justify-between !mt-6">
          <p>Project plan</p>
          <div className="space-x-6">
            <a href={ process.env.PUBLIC_URL + '/files/internship/project_plan_alloc8.pdf' } target="_blank">
              <i className="fas fa-eye hover:text-color-accent duration-100"/>
            </a>
            <a href={ process.env.PUBLIC_URL + '/files/internship/project_plan_alloc8.pdf' }
               download="Alloc8-Projectplan.pdf">
              <i className="fas fa-download hover:text-color-accent duration-100"/>
            </a>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Realisation document</p>
          <div className="space-x-6">
            <a href={ process.env.PUBLIC_URL + '/files/internship/realisatiedocument_alloc8.pdf' } target="_blank">
              <i className="fas fa-eye hover:text-color-accent duration-100"/>
            </a>
            <a href={ process.env.PUBLIC_URL + '/files/internship/realisatiedocument_alloc8.pdf' }
               download="Alloc8-Realisatiedocument.pdf">
              <i className="fas fa-download hover:text-color-accent duration-100"/>
            </a>
          </div>
        </div>

        <div className="flex justify-between">
          <p>Reflection</p>
          <div className="space-x-6">
            <a href={ process.env.PUBLIC_URL + '/files/internship/reflectie_alloc8.pdf' } target="_blank">
              <i className="fas fa-eye hover:text-color-accent duration-100"/>
            </a>
            <a href={ process.env.PUBLIC_URL + '/files/internship/reflectie_alloc8.pdf' }
               download="Alloc8-Reflectie.pdf">
              <i className="fas fa-download hover:text-gray-400 duration-100"/>
            </a>
          </div>
        </div>
      </div>
  )
}

const internship = {
  name: 'Internship: Alloc8',
  tabs: [projectTabs.description, projectTabs.technologies, projectTabs.results],
  description: {
    long: (
        <div className="space-y-4">
          <DocumentsCard/>

          <p>During my internship at <Button
              onClick={ () => window.open('https://lykios.be/', '_blank') }>Lykios</Button>,
            I worked on the web application called Alloc8. The objective was to develop a web application that allows
            employees to reserve desks in office buildings, addressing the growing need for flexible workspace solutions
            in the era of hybrid working. Alloc8 offers an efficient way to manage office spaces, ensuring employees
            have a reserved workspace when they come to the office. This contributes to a smoother workday and optimizes
            the use of office space.</p>

          <p>I mainly focused on the front-end of Alloc8 using React. My responsibilities included designing and
            implementing intuitive and responsive user interfaces that enables users to easily reserve desks. While my
            primary focus was on the front end, I also wrote backend logic where needed.</p>

          <p>During this period, I also learned how to use Redux, a state management library, to manage the
            application's state more efficiently. Redux allowed me to group the state of the application, making it
            easier to manage and debug, especially as the application grew more complex.</p>

          <p>This experience was immensely valuable. I enhanced my skills in front-end development with React, gained a
            solid understanding of Redux for state management, and learned a lot of back-end functionalities I never
            knew about. These skills not only contributed to the successful development of Alloc8 but also prepared me
            for future projects in web development. The hands-on experience and practical knowledge I acquired have been
            instrumental in my growth as a developer, enabling me to build robust and user-friendly web
            applications.</p>

        </div>
    )
  },
  skills: [
    { ...react, focus: 1 },
    { ...tailwind, focus: 0.7 },
    { ...spring, focus: 0.5 },
    { ...git, focus: 0.3 },
    { ...sql, focus: 0.2 }
  ],
  results: [
    {
      title: 'Login/register page',
      image: process.env.PUBLIC_URL + '/images/results/internship/login.webp',
      description: 'The login and register page allows users to log in or create an account. The form is validated on the client-side to ensure that the user enters the correct information. If the user enters incorrect information, an error message will be displayed.'
    },
    {
      title: 'Week overview',
      image: process.env.PUBLIC_URL + '/images/results/internship/calendar.webp',
      description: 'The week overview page shows the user when they have reserved a desk. The user can easily navigate between weeks to see their reservations for the upcoming weeks. On the top right there is a toggle to either show individual or team reservations.'
    },
    {
      title: 'Individual reservation',
      image: process.env.PUBLIC_URL + '/images/results/internship/individual_reservation.webp',
      description: 'The user can start the workflow to reserve a desk by selecting a period on a specific day. The user can navigate to a desk and select it, desks that are unavailable on the selected time will be shown red. Finally the user gets a final overview with all selected values before confirming the reservation.'
    },
    {
      title: 'Team reservation',
      image: process.env.PUBLIC_URL + '/images/results/internship/team_reservation.webp',
      description: 'This workflow is similar to the workflow for individual reservation. The only differences are that the user first has to select a team for which they want to make a reservation and that they can select multiple desks instead of just one.'
    },
    {
      title: 'Manage team',
      image: process.env.PUBLIC_URL + '/images/results/internship/manage_team.webp',
      description: 'The user can manage the teams for which they are a team admin. They can give and take admin permissions from team members. They can also invite new team members, this will send an email to the invited user with a link to join the team. Lastly they can also remove team members from the team.'
    },
    {
      title: 'Change team color',
      image: process.env.PUBLIC_URL + '/images/results/internship/team_color.webp',
      description: 'Team admins can change the color of the team. This color will be used throughout in the week overview so that teams stand out more. The user can choose from a predefined list of colors. Notice in the gif how the color of the team named Faros changes in the week overview.'
    },
    {
      title: 'Manage floor plan',
      image: process.env.PUBLIC_URL + '/images/results/internship/manage_segments.webp',
      description: 'The team admin can manage the floor plan of the office. They can add and remove segments and desks. They can also change the name and size and the name and location of a desk (within a segment). This is done in a visual way, the user can drag and drop the desks to change their position as well as rotate them 90 degrees.'
    }
  ]
}

const Internship = ({ isActive }) => {
  return (
      <ProjectDetails project={ internship } isActive={ isActive }/>
  )
}

export default Internship;