import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import FirstImg from '../../../Assets/Screenshot_18.png';
import SecondImg from '../../../Assets/Screenshot_21.png';
import ThirdImg from '../../../Assets/Screenshot_23.png';


import { SecDiv, WorksImg } from './SecondWorksStyle';


const SecondWorks = () => {

    return(
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
        }}
        modules={[Pagination, Navigation]}
        >
        <SecDiv>
            <SwiperSlide>
                <SecDiv>
                    <WorksImg src={FirstImg} alt="img" />
                </SecDiv>
            </SwiperSlide>
            <SwiperSlide>
                <SecDiv>
                    <WorksImg src={SecondImg} alt="img" />
                </SecDiv>
            </SwiperSlide>
            <SwiperSlide>
                <SecDiv>
                    <WorksImg src={ThirdImg} alt="img" />
                </SecDiv>
            </SwiperSlide>
            <SwiperSlide>
                <SecDiv>
                    <WorksImg src={FirstImg} alt="img" />
                </SecDiv>
            </SwiperSlide>
            <SwiperSlide>
                <SecDiv>
                    <WorksImg src={SecondImg} alt="img" />
                </SecDiv>
            </SwiperSlide>
            <SwiperSlide>
                <SecDiv>
                    <WorksImg src={ThirdImg} alt="img" />
                </SecDiv>
            </SwiperSlide>
        </SecDiv>
    </Swiper>    
    );
}

export default SecondWorks;