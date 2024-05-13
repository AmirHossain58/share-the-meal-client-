// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '/girl.avif'
import Slide2 from './Slide2';

const DonationCarousel = () => {
    return (
        <div className='container px-6 py-10 mx-auto'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Slide2
              image={'https://images.ctfassets.net/z0x29akdg5eb/2eaLr2AEpajeDXSyvF281g/0b42afac8760bfd9ba221a04678968f1/WF1858864_AP3I2093.jpg?w=633&h=355&fit=fill&q=80&fm=avif'}
              text='Join hands to provide emergency aid in Palestine through ShareTheMeal. Every contribution makes a difference!'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2
              image={'https://images.ctfassets.net/z0x29akdg5eb/d5iYPrCWF68gMKfpz8vgd/2c4d8cf34ed6d3b9c972cd2fff54397a/EB2A5551.jpg?w=633&h=355&fit=fill&q=80&fm=avif'}
              text='Join hands to provide emergency aid in Palestine through ShareTheMeal. Every contribution makes a difference!'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2
              image={bgimg1}
              text='Join hands to provide emergency aid in Palestine through ShareTheMeal. Every contribution makes a difference!'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2
              image={'https://images.ctfassets.net/z0x29akdg5eb/68zb4H019gUmOOI9QmbXJ1/1fc7e57036db15270bf9e0cb8abb31d2/WF1859831_AP3I8671.jpg?w=633&h=355&fit=fill&q=80&fm=avif'}
              
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2
              image={'https://images.ctfassets.net/z0x29akdg5eb/4hfBJi8I4ZlSsSCNMFEHgP/88bcc90a9cd109cc6b1406aed5d045c5/WF1822920_20231218_WFP_PSE_Abood_al_Sayd_65.jpg?w=633&h=355&fit=fill&q=80&fm=avif'}
              
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2
              image={'https://images.ctfassets.net/z0x29akdg5eb/4KIJYFBA9bsyZU30XIGwF/225f72288bfdfb5aef7ce06c006a5283/WFP_STM_yemen16_imagegallery2.png?w=633&h=355&fit=fill&q=80&fm=avif'}
              
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2
              image={'https://images.ctfassets.net/z0x29akdg5eb/fa7gjWdoAm7MdQ8D3OhL8/5e1c0a7476056d22bb646b0e87ecb24a/WF1858899_EB2A9882.jpg?w=633&h=355&fit=fill&q=80&fm=avif'}
             
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default DonationCarousel;