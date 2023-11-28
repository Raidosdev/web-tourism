import './ViewPoint.css'
import {BiSolidCalendar} from 'react-icons/bi'
import img1 from '../../assets/City/city7.jpg'
import img2 from '../../assets/Chiriqui/chi7.jpg'
import img3 from '../../assets/City/city6.jpg'
import img4 from '../../assets/Bocas/toro5.jpg'
import img5 from '../../assets/City/city7.jpg'
import { useEffect, useState } from 'react'
import BookTour from '../../utils/BookTour'

const ViewPoint = () => {

    const [state, setState] = useState(2);
    const [imgVisible, setImgVisible] = useState(true);

    useEffect(()=>{
        const timeout = setTimeout(() =>{
            setImgVisible(true);
        },500)

        return ()=> clearTimeout(timeout);
    },[state]);

    const handleSelected = (index) => {
        setImgVisible(false);
        setState(index);
    };

    const handleImages = () => {
        switch(state){
            case 0:
                return img1;
            case 1:
                return img2;
            case 2:
                return img3;
            case 3:
                return img4;
        }
    }

    const imgSrc = handleImages(state);

  return <div className='mt-[-100px]' id='viewpoint'>

    <div className='text-center'>
        <h1 className='text-[#42a8bb] text-[76px] font-DancingScript'>View Point</h1>
        <h2 className='text-[54px] text-white font-Montserrat font-[500] leading-[50px]'>
            Discover Our Tourist <br /> Viewpoint
        </h2>
    </div>

    <div className='flex justify-between items-center mt-[50px]'>
        <div className='w-[40%] flex flex-col gap-2 pl-[100px]'>
            {
                [1,2,3,4].map((item, i)=>(
                    <div key={i}
                    onClick={()=>  handleSelected(i)}
                    className={`${state === i ? 'border-[#00A1B9]' : 'border-transparent'} border-[6px] mr-[-50px] ml-[-100px]
                    pl-[100px] py-2 z-[99] relative`}
                    >
                        <div className='text-white flex gap-10'>
                            <p className='text-[25px] font-semibold'>2/07</p>
                            <div>
                                <h3 className='text-[17px] fonst-[600]'>Lorem, ipsum dolor.</h3>
                                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div className='flex items-center gap-5'>
                                    {/* <img src={img5} alt="" width={130} /> */}
                                    <button className='font-[600] hover:text-[#00A1B9]'>View Route</button>
                                </div>
                            </div>

                        </div>

                        {
                            state === i &&
                            <p className='absolute right-0 top-[10%] text-[25px] font-semibold text-white flex items-center
                            gap-1 justify-center verticleText'>
                                <BiSolidCalendar />
                                2/07
                            </p>
                        }

                    </div>
                ))
            }
            <BookTour className='justify-start mt-8'/>
        </div>
        <div className='w-[60%] viewPointImg'>
            <img src={imgSrc} alt="" className={`h-[650px] w-full ${imgVisible ? "":"fade-out"} `} />
        </div>
    </div>
        
    </div>
}

export default ViewPoint