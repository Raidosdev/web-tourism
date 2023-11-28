import './MostAttrative.css'
import img1 from '../../assets/City/city2.jpg'
import img2 from '../../assets/Chiriqui/chi2.jpg'
import img3 from '../../assets/Bocas/toro3.jpg'

import img4 from '../../assets/City/city3.jpg'
import img5 from '../../assets/Chiriqui/chi3.jpg'
import img6 from '../../assets/Bocas/toro4.jpg'

import img7 from '../../assets/City/city4.jpg'
import img8 from '../../assets/Chiriqui/chi4.jpg'
import img9 from '../../assets/Bocas/toro5.jpg'

import img10 from '../../assets/City/city5.jpg'
import img11 from '../../assets/Chiriqui/chi5.jpg'
import img12 from '../../assets/Bocas/toro6.jpg'

import img13 from '../../assets/City/city6.jpg'
import img14 from '../../assets/Chiriqui/chi6.jpg'
import img15 from '../../assets/Bocas/toro7.jpg'

import bgLeft from '../../assets/City/city7.jpg'
import bgright from '../../assets/Chiriqui/chi7.jpg'

import { BsHexagonFill } from 'react-icons/bs'
import 'aos/dist/aos.css'
import { useContext, useEffect } from 'react'
import { MyContext } from '../../context/AppContext'
import AOS from 'aos'
import BookTour from '../../utils/BookTour'

const MostAttrative = () => {

    const { activeSlideIndex } = useContext(MyContext);

    useEffect(() => {
        AOS.init();
    }, [])

    const datas = [
        {
            name: 'Panama',
            leftImg1: img1,
            leftImg2: img7,
            leftImg3: img13,
            rightImg1: img4,
            rightImg2: img10,
        },
        {
            name: 'Chiriqui',
            leftImg1: img2,
            leftImg2: img8,
            leftImg3: img14,
            rightImg1: img5,
            rightImg2: img11,
        },
        {
            name: 'Bocas del Toro',
            leftImg1: img3,
            leftImg2: img9,
            leftImg3: img15,
            rightImg1: img6,
            rightImg2: img12,
        },
    ];

    const handleChange = (index) => {
        switch (index) {
            case 0:
                return datas[0];
            case 1:
                return datas[1];
            case 2:
                return datas[2];
            default:
                return datas[0];
        }
    };

    const infos = handleChange(activeSlideIndex);

    return <section className='bg-[#001E23] pt-[120px] pb-[250px] w-full overflow-hidden' id='most'>

        <div className='text-center'>
            <h2 className='text-[#42a8bb] text-[76px] font-DancingScript'>Why you visit?</h2>
            <h2 className='text-[54px] text-white font-Montserrat font-[500] leading-[50px]'>Most Attractive Place <br /> in {infos.name}</h2>
        </div>

        <section className='flex justify-center mt-10 relative'>
            <div className='bg-white w-[1px] h-[750px] flex flex-col justify-around items-center'>\
                <div className='relatives flex items-center'>
                    <BsHexagonFill className='text-[30px] rotate-[90deg] text-[#2FA8B9]' />
                    <p className='absolute w-[400px] right-[500px] text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit nostrum officia,
                    </p>
                </div>

                <div className='relatives flex items-center'>
                    <BsHexagonFill className='text-[30px] rotate-[90deg] text-[#2FA8B9]' />
                    <p className='absolute w-[400px] right-[500px] text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit nostrum officia,
                    </p>
                </div>
                
                <img src={infos.leftImg1} alt=""
                    className='absolute top-[380px] left-[50px] w-[450px] h-[250px] border-4 border-[#2FA8B9]'
                    data-aos='fade-right'
                    data-aos-delay='1000'
                    data-aos-duration='1000'
                />

                <img src={infos.leftImg2} alt=""
                    className='absolute top-[10%] left-[25%] w-[350px] h-[250px] border-4 border-[#2FA8B9]'
                    data-aos='fade-right'
                    data-aos-delay='1000'
                    data-aos-duration='1500'
                />

                <div className='relatives flex items-center'>
                    <BsHexagonFill className='text-[30px] rotate-[90deg] text-[#2FA8B9]' />
                    <p className='absolute w-[400px] left-[500px] text-white text-right'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit nostrum officia,
                    </p>
                </div>

                <div className='relatives flex items-center'>
                    <BsHexagonFill className='text-[30px] rotate-[90deg] text-[#2FA8B9]' />
                    <p className='absolute w-[400px] left-[500px] text-white text-right'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit nostrum officia,
                    </p>
                </div>

                <img src={infos.rightImg1} alt=""
                    className='absolute top-[150px] right-[120px] w-[350px] h-[350px] border-4 border-[#2FA8B9]'
                    data-aos='fade-left'
                    data-aos-delay='1000'
                    data-aos-duration='1000'
                />

                <img src={infos.rightImg2} alt=""
                    className='absolute top-[50%] right-[28%] w-[350px] h-[250px] border-4 border-[#2FA8B9]'
                    data-aos='fade-left'
                    data-aos-delay='1000'
                    data-aos-duration='1500'
                />

                <div className='relatives flex items-center'>
                    <BsHexagonFill className='text-[30px] rotate-[90deg] text-[#2FA8B9]' />
                    <p className='absolute w-[400px] right-[500px] text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit nostrum officia,
                    </p>
                </div>

                <img src={infos.leftImg3} alt=""
                    className='absolute top-[82%] left-[28%] w-[350px] h-[250px] border-4 border-[#2FA8B9]'
                    data-aos='fade-right'
                    data-aos-delay='1000'
                    data-aos-duration='1000'
                />

                {/* <img src={bgLeft} alt="" className='absolute top-[78%] left-[-120px] w-[430px] h-[430px]' />
                <img src={bgright} alt="" className='absolute top-[105%] right-[100px] w-[360px] h-[360px]' /> */}
            </div>
        </section>
    </section>
}

export default MostAttrative