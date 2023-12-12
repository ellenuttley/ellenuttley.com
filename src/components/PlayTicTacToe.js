import { Navigation, Pagination, Scrollbar, A11y, EffectCreative, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

const SeeMyWork = () => (
    <div >
    <Swiper className='myswiper'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay:5000 }}
      navigation
      pagination={{ clickable: true,
        el: ".swiper-pagination", // Use a valid DOM element here
        type: "bullets",
        bulletClass: "bg-amber-400",
        bulletActiveClass: "bg-green-400"}}
      scrollbar={{ draggable: true }}
      breakpointsBase={window}
      updateOnWindowResize={true}
      loop={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </div>
  );

export default SeeMyWork;


