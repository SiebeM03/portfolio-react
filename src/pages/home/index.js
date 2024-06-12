import ProfilePicture from './profilePicture'
import usePreventScroll from '../../hooks/usePreventScroll'
import GithubButton from '../../components/githubButton'

const Home = ({ isActive }) => {
  const { textElement } = usePreventScroll(isActive);

  return (
      <div className="h-full flex flex-col md:flex-row items-center md:space-x-6 max-md:space-y-4 pb-4">
        <div className="flex flex-row max-md:space-x-4 md:space-y-2 md:flex-col">
          <ProfilePicture className="md:basis-1/3 lg:basis-1/4 mb-2"/>
          <ActionButtons/>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto md:basis-2/3 lg:basis-3/4" ref={ textElement }>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hi, I'm <span
              className="text-blue-500 text-nowrap">Siebe Michiels</span></h1>
          <p className="sm:text-lg">
            My name is Siebe Michiels and I am a passionate student of Applied Computer Sciences at Thomas More
            Kempen. On this website, you'll find information about me, my internship, the projects I've worked on, and
            the skills I've developed throughout my journey. Feel free to explore and get in touch if you'd like to
            learn more!
          </p>
        </div>
      </div>
  );
}


const ActionButtons = () => {
  return (
      <div className="home--action-buttons w-full md:text-lg text-color-accent font-semibold">
        <div
            className="h-full flex flex-col md:flex-row justify-center items-center max-md:space-y-8 md:justify-around">
          <a href={ process.env.PUBLIC_URL + "/files/CV_SiebeMichiels_2310_EN.pdf" }
             download="SiebeMichiels_Resume.pdf"
             className="flex flex-row md:flex-col items-center space-x-2">
            <i className="fas fa-file-download fa-lg"/><span className="md:hidden">Resume</span>
          </a>

          <button onClick={ () => window.open('https://www.linkedin.com/in/siebe-michiels/', '_blank') }
                  onTouchEnd={ () => window.open('https://www.linkedin.com/in/siebe-michiels/', '_blank') }
                  className="flex flex-row md:flex-col items-center space-x-2 max-md:pl-1">
            <i className="fab fa-linkedin fa-lg"/><span className="md:hidden">LinkedIn</span>
          </button>

          <GithubButton url="https://github.com/SiebeM03" text={ <span className="md:hidden">GitHub</span> }
                        classes="flex flex-row md:flex-col items-center space-x-2 h-5 md:h-6 md:w-6"/>
        </div>
      </div>
  )
}

export default Home;