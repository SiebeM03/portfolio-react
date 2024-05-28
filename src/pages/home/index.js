import HomeImage from '../../components/homeImage'
import Typewriter from './typewriter'

const Home = () => {
  return (
      <div className="h-full flex items-center space-x-6">
        <HomeImage className="max-w-sm  "/>
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm <Typewriter text={ "Siebe Michiels" } delay={ 150 }/></h1>
          <p className="text-xl">
            My name is Siebe Michiels and I study applied computer sciences at Thomas More Geel. On this webpage you can
            find some of the works I'm proud of, something about me as well as my contact details.
          </p>
        </div>
      </div>
  );
}

export default Home;