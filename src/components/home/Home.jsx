import './Home.css'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import { useContext } from 'react'
import { MyContext } from '../../context/AppContext'

const Home = () => {

  const {activeSlideIndex} = useContext(MyContext);

  const handleClass = (activeSlideIndex) => {
    switch(activeSlideIndex){
      case 0:
        return 'bgContainer1';
      case 1:
        return 'bgContainer2';
      case 2:
        return 'bgContainer3';
      default:
        return 'bgContainer1';
    }
  };

  const classChange = handleClass(activeSlideIndex);

  return <div  className={`${classChange} h-[1800px]  overflow-hidden`} id='home'>
    <Navbar />
    <Header />

  </div>
}

export default Home