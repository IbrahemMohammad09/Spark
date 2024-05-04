import { SwiperSlide } from 'swiper/react'
import './ImagesSwiper.css'
import { Swiper } from 'swiper/react'
import { useEffect, useState } from 'react'

const ImagesSwiper = ( { imgs, setHoveredImage, mainImage, setMainImage } ) => {  
    const [perView, setPerView] = useState(5);
    useEffect(() => {
        const handleMedia = () => {
            if(window.innerWidth < 460) {
                setPerView(1)
            } else if(window.innerWidth < 768) {
                setPerView(2)
            } else if(window.innerWidth < 1150) {
                setPerView(3)
            } else if(window.innerWidth < 1400) {
                setPerView(4)
            }  else if(window.innerWidth < 1850) {
                setPerView(5)
            } else if(window.innerWidth < 2400) {
                setPerView(4)    
            }
        }
        window.addEventListener('resize', handleMedia)
    }, []);
    
    return (
        <Swiper
            loop={10}
            slidesPerView={perView}
            spaceBetween={10}
            className="images-swiper" 
        >
            {imgs && imgs?.map((e, i) => 
            <SwiperSlide onClick={() => setMainImage(e)} onMouseEnter={() => setHoveredImage(e)} onMouseLeave={() => setHoveredImage(mainImage)}>
                <img key={i} src={e} alt={e} loading='lazy' className={`scroll-img ${mainImage == e && "active"}`}/>
            </SwiperSlide>
            )}
        </Swiper>
    )
}

export default ImagesSwiper