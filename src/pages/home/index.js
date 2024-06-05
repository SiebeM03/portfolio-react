import ProfilePicture from './profilePicture'
import { useRef } from 'react'

const Home = () => {
  const textElement = useRef();

  const handleTouch = (e) => {
    // Prevent scrolling the page when the text is scrollable
    if (textElement.current.scrollHeight > textElement.current.clientHeight) e.stopPropagation();
  }

  return (
      <div className="h-full flex flex-col md:flex-row items-center md:space-x-6 max-md:spacey-4 pb-4">
        <ProfilePicture className="flex md:basis-1/3 lg:basis-1/4 mb-2"/>

        {/* TODO check if scrollbar gets shown on mobile */ }
        <div className="flex flex-1 flex-col overflow-y-auto md:basis-2/3 lg:basis-3/4" ref={ textElement }
             onTouchStart={ handleTouch } onTouchEnd={ handleTouch } onTouchMove={ handleTouch }>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hi, I'm <span
              className="text-blue-500 text-nowrap">Siebe Michiels</span></h1>
          <p className="sm:text-lg">
            My name is Siebe Michiels and I am a passionate student of Applied Computer Sciences at Thomas More Kempen.
            On this website, you'll find information about me, my internship, the projects I've worked on, and the
            skills I've
            developed throughout my journey. Feel free to explore and get in touch if you'd like to learn more!
          </p>
        </div>
      </div>
  );
}

export default Home;