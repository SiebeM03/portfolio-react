import HomeImage from '../../components/homeImage'

const Home = () => {
  return (
      <div className="h-full lg:flex items-center space-x-6">
        <HomeImage className="basis-1/4 max-w-sm"/>
        <div className="basis-3/4">
          <h1 className="text-6xl font-bold">Hi, I'm <span className="text-blue-500">Siebe Michiels</span></h1>
          <p className="text-xl">
            My name is Siebe Michiels and I am a passionate student of Applied Computer Sciences at Thomas More Kempen.
            On this website, you'll find information about me, my internship, the projects I've worked on, and the skills I've
            developed throughout my journey. Feel free to explore and get in touch if you'd like to learn more!
          </p>
        </div>
      </div>
  );
}

export default Home;