import { useContext } from 'react';
import './Header.css'
import {FaFacebook, FaYoutube} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import Slider from '../../utils/slider/Slider';
import { MyContext } from '../../context/AppContext';

const contentData = [
    {
        provin: 'Panama',
        title: 'Explora Panama',
    },
    {
        provin: 'Chiriqui',
        title: 'Explora Chiriqui',
    },
    {
        provin: 'Bocas del Toro',
        title: 'Explora Bocas del Toro',
    },
]

const Header = () => {

    const { activeSlideIndex } = useContext(MyContext);

    const handleClass = (activeSlideIndex) => {
        const { provin, title } = contentData[activeSlideIndex] || {};

        if (provin && title) {
            return (
                <div>
                    <h1 className='text-[144px] text-white font-Montserrat font-[800] leading-[140px]'>
                        Explora  <br />
                        <span className={`provin ${provin}`} data-provin={provin}>
                            {provin}
                        </span>
                    </h1>
                    <p className='text-white mt-[-70px] p-2 w-[95%]  font-semibold'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quis aliquam
                        quam aut repellendus amet inventore consectetur maiores, ad expedita nihil
                        similique voluptatum beatae dolor dicta illum officiis cum voluptatibus?
                    </p>
                </div>
            )
        }
        return null;
    };

    const classChange = handleClass(activeSlideIndex)

return <div className='flex items-center mt-[40px]'>
    {/*text content */}
    <div className='w-1/2 pl-[140px]'>

        {classChange}

        <div className='mt-[100px] flex gap-12'>
            <button className='border-2 border-[#00A1B9] text-[20px]  px-6 py-2  font-semibold text-white hover:text-[#00A1B9]'>
                Reserva ahora
            </button>

            <button className='flex items-center gap-2'>
                <FaYoutube className='text-red-700 text-[40px]'/>
                <span className='text-white'>Mirar videos como este </span> 
            </button>
        </div>

    </div>

    <div className='w-1/2 flex flex-col items-end justify-end relative'>

        <div>
            <Slider />
        </div>

        <div  className='flex gap-4 text-xl text-white absolute bottom-[-60px] right-[100px]'>
            <FaYoutube/>
            <FiInstagram/>
            <BsWhatsapp/>
            <FaFacebook/>
        </div>

    </div>
</div>
}

export default Header