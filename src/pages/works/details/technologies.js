import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Technologies = ({ skills, focuses }) => {
  return (
      <div className="space-y-8">
        <p>
          Tools and technologies used in this project, ordered by the amount of time I spent on them in this project:
        </p>

        { skills.sort((skillA, skillB) => skillB.focus - skillA.focus).map((skill, index) => (
            <div className="flex space-x-2 w-full">
              <img key={ index } src={ skill.image } alt={ skill.name } className="h-10"/>
              <div className="w-full">
                <div className="text-white h-8 text-lg flex items-center space-x-2 cursor-pointer"
                     onClick={ () => window.open(skill.website, '_blank') }>
                  <p className="peer">{ skill.name }</p>
                  <FontAwesomeIcon icon={ faArrowUpRightFromSquare } className="h-4 hidden peer-hover:block"/>
                </div>

                <div className="h-2 bg-color-background-100 rounded-full overflow-hidden">
                  <div className="h-full bg-color-accent" style={ { width: `${ skill.focus * 100 }%` } }></div>
                </div>

              </div>
            </div>
        ))
        }
      </div>
  );
}

export default Technologies;