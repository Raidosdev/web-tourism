import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './Slider.css'
import { Pagination } from 'swiper/modules'
import { useContext, useEffect, useRef } from 'react'
import { MyContext } from '../../context/AppContext'

import img1 from '../../assets/City/city1.jpg'
import img2 from '../../assets/Chiriqui/chi1.jpg'
import img3 from '../../assets/Bocas/toro1.jpg'

const Slider = () => {
    const swiperRef = useRef(null);
    const { activeSlindeIndex, setActiveSlindeIndex } = useContext(MyContext);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setActiveSlindeIndex(currentIndex);
    }

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.on('slideChange', () => handleSlideChange(swiper))
        }
    })

    const places = [
        {
            name: 'Ponot waterfall',
            img: img1,
        },
        {
            name: 'Brown cliff',
            img: img2,
        },
        {
            name: 'Himalay',
            img: img3,
        },
    ]

    return (
        <div className='mr-14 shadow-xl'>
            <Swiper
                slidesPerView={1}
                keyboard={true}
                spaceBetween={-250}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                ref={swiperRef}
                initialSlide={activeSlindeIndex}
                className='pl-[90px] pt-6'
            >
                {places.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className='relative'>
                                <img src={item.img} alt="" className='object-cover shadow-xl' />
                                {/* <div>sample text</div> */}
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}

export default Slider