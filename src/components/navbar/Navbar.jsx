import { BrowserRouter } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  return (

    <div className='nav-container'>
      <ul className='scroll-smooth'>
      <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="most" smooth={true} duration={500}>Reason</Link></li>
        <li><Link to="" smooth={true} duration={500}><img src={logo} alt="" className='w-[224px] h-[61px] mt-[-20px]' /></Link></li>
        <li><Link to="viewpoint" smooth={true} duration={500}>View Point</Link></li>
        <li><Link to="bookNow" smooth={true} duration={500}>Book Now</Link></li>
      </ul>

    </div>
  )

}

export default Navbar