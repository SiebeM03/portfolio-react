import usePreventScroll from '../../hooks/usePreventScroll'

const About = ({ isActive }) => {
  const today = new Date();
  const birthDate = new Date('2003-09-02');

  const age = Math.floor((today - birthDate.getTime()) / 3.15576e+10)

  const { textElement } = usePreventScroll(isActive);


  return (
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-3xl text-white font-bold mb-4 md:mb-10">About me</h1>

        <div
            className="max-h-[calc(100%-180px)] h-min flex max-md:flex-col md:flex-row max-md:space-y-4 md:space-x-8 items-center">
          <div ref={ textElement } className="max-md:grow space-y-4 h-1/2 md:h-full overflow-y-auto basis-3/4 pr-4">
            <p>I’m Siebe Michiels, a { age }-year-old student specializing in application development. With a deep
              passion for coding and technology, I am constantly exploring new ways to bring ideas to life through
              innovative software solutions.</p>

            <p>Currently, I'm focusing on frontend development, with a particular love for React. However, my skills
              are
              not limited to just the frontend; I also have experience designing backend systems especially in Java.
              This versatility allows me to approach projects as a whole, ensuring seamless integration between the
              frontend and backend.</p>

            <p>When I'm not coding, you can find me swimming. It's my favorite way to unwind and keep my mind
              sharp.</p>

            <p>Looking ahead, my goal is to carve out a career as a freelancer, offering my skills to a variety of
              projects and clients. Ultimately, my absolute dream is to become a game developer, merging my love for
              coding with my passion for creative projects.</p>

            <p>I'm eager to learn, always seeking out new challenges and opportunities to grow. Whether it's mastering
              a
              new framework or diving into a bigger project, I'm ready to take on what's next.</p>

            <p>Thank you for visiting my portfolio. Feel free to reach out if have any follow-up questions!</p>
          </div>

          <div
              className="h-min bg-color-background-300 border-2 border-color-background-200 rounded-lg px-6 py-2 sm:py-4 md:p-6 flex
              md:flex-col md:space-y-4 md:basis-1/4 max-md:flex-row max-md:space-x-4 max-sm:w-min">
            <button onClick={ () => window.open('https://www.linkedin.com/in/siebe-michiels/', '_blank') }
                    onTouchEnd={ () => window.open('https://www.linkedin.com/in/siebe-michiels/', '_blank') }
                    className="bg-color-accent font-semibold text-lg hover:bg-blue-800 duration-200
                     sm:w-full sm:rounded sm:py-3 sm:px-4
                     max-sm:rounded-full max-sm:w-14 max-sm:h-14
                    ">
              <div className="sm:w-32 sm:text-left mx-auto">
                <i className="fab fa-linkedin fa-xl sm:mr-3"/>
                <span className="max-sm:hidden">LinkedIn</span>
              </div>
            </button>
            <button onClick={ () => window.open('mailto:siebe.michiels03@gmail.com') }
                    onTouchEnd={ () => window.open('mailto:siebe.michiels03@gmail.com') }
                    className="bg-color-accent font-semibold text-lg hover:bg-blue-800 duration-200
                     sm:w-full sm:rounded sm:py-3 sm:px-4
                     max-sm:rounded-full max-sm:w-14 max-sm:h-14
                    ">
              <div className="sm:w-32 sm:text-left mx-auto">
                <i className="fas fa-envelope fa-xl sm:mr-3"/>
                <span className="max-sm:hidden">Email</span>
              </div>
            </button>
            <button onClick={ () => window.open('https://github.com/SiebeM03', '_blank') }
                    onTouchEnd={ () => window.open('https://github.com/SiebeM03', '_blank') }
                    className="bg-color-accent font-semibold text-lg hover:bg-blue-800 duration-200
                     sm:w-full sm:rounded sm:py-3 sm:px-4
                     max-sm:rounded-full max-sm:w-14 max-sm:h-14
                    ">
              <div className="sm:w-32 sm:text-left mx-auto">
                <i className="fab fa-github fa-xl sm:mr-3"/>
                <span className="max-sm:hidden">GitHub</span>
              </div>
            </button>
          </div>
        </div>
      </div>
  );
}

export default About;