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
import bgimg2 from '/girl.avif'
import bgimg3 from '/girl.avif'

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
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
          <Slide
            image={bgimg1}
            text='Join hands to provide emergency aid in Palestine through ShareTheMeal. Every contribution makes a difference!'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={'https://images.ctfassets.net/z0x29akdg5eb/68zb4H019gUmOOI9QmbXJ1/1fc7e57036db15270bf9e0cb8abb31d2/WF1859831_AP3I8671.jpg?w=633&h=355&fit=fill&q=80&fm=avif'}
            text='No one should go hungry. With ShareTheMeal, you can support emergency aid projects worldwide and help feed those in need'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={'https://images.ctfassets.net/z0x29akdg5eb/4hfBJi8I4ZlSsSCNMFEHgP/88bcc90a9cd109cc6b1406aed5d045c5/WF1822920_20231218_WFP_PSE_Abood_al_Sayd_65.jpg?w=633&h=355&fit=fill&q=80&fm=avif'}
            text={`Extend a helping hand globally with ShareTheMeal. Your donation provides emergency aid where it's needed most.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={'https://images.ctfassets.net/z0x29akdg5eb/4KIJYFBA9bsyZU30XIGwF/225f72288bfdfb5aef7ce06c006a5283/WFP_STM_yemen16_imagegallery2.png?w=633&h=355&fit=fill&q=80&fm=avif'}
            text='Together, we can create a world where no one goes hungry. Join ShareTheMeal and contribute to emergency aid efforts globally'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={'https://images.ctfassets.net/z0x29akdg5eb/2valTuHQEM669FnsCpJDEt/9652fcf92211703889a678fc58786162/WFP_STM_afghanistan6_homecard.png?w=561&h=351&fit=fill&q=80&fm=avif'}
            text='Every meal shared brings hope to someone in need, wherever they may be. Support emergency aid worldwide through ShareTheMeal.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}