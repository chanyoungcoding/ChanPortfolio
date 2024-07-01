import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Swiper 내비게이션 스타일 추가
import styled from 'styled-components';
import SlideIntroProject from './SlideIntroProject';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';

import { ProjectInformationData } from '../data/ProjectData';

const ProjectBox = () => {

  const [num, setNum] = useState(1);

  const onClickNextSwiper = () => {
    if(num >= 2) return;
    setNum(prev => prev + 1)
  }

  const onClickPrevSwiper = () => {
    if(num <= 0 ) return;
    setNum(prev => prev - 1)
  }

  return (
    <Container>
      <ProjectTitle>Project</ProjectTitle>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        style={{ padding: '20px' }}
      >
        <SwiperSlide>
          <ProjectContainer>
            <SlideIntroProject 
              day={ProjectInformationData[0].day}
              name={ProjectInformationData[0].name}
              url={ProjectInformationData[0].url}
              intro={ProjectInformationData[0].intro}
            />
            <SlideIntroProject
              day={ProjectInformationData[1].day}
              name={ProjectInformationData[1].name}
              url={ProjectInformationData[1].url}
              intro={ProjectInformationData[1].intro}
            />
          </ProjectContainer>
        </SwiperSlide>

        <SwiperSlide>
          <ProjectContainer>
            <SlideIntroProject
              day={ProjectInformationData[0].day}
              name={ProjectInformationData[0].name}
              url={ProjectInformationData[0].url}
              intro={ProjectInformationData[0].intro}
            />
            <SlideIntroProject
              day={ProjectInformationData[0].day}
              name={ProjectInformationData[0].name}
              url={ProjectInformationData[0].url}
              intro={ProjectInformationData[0].intro}
            />
          </ProjectContainer>
        </SwiperSlide>
      </Swiper>

      <SwiperButtonPrev onClick={onClickPrevSwiper} className="swiper-button-prev"></SwiperButtonPrev>
      <SwiperButtonNext onClick={onClickNextSwiper} className="swiper-button-next"></SwiperButtonNext>
      
      <SlideNavigation>
        <p>{num} / 2</p> 
      </SlideNavigation>
    </Container>
  );
};

// 스타일 정의
const Container = styled.div`
  padding: 200px;
  position: relative;
  .swiper-button-next {
    right: 200px;
    margin-top: 30px;
    background-color: rgba(0,0,0,0.0);
  }
  .swiper-button-next:hover {
    background-color: rgba(0,0,0,0.0);
  }
  .swiper-button-prev {
    left: 200px;
    margin-top: 30px;
    background-color: rgba(0,0,0,0.0);
  }
  .swiper-button-prev:hover {
    background-color: rgba(0,0,0,0.0);
  }
`;

const ProjectTitle = styled.h1`
  padding-left: 30px;
  padding-bottom: 30px;
  font-size: 4rem;
  font-weight: bold;
  @media screen and (max-width: 1300px) {
    padding: 0;
    text-align: center;
  }
`;

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
`;

// 커스텀 내비게이션 버튼 스타일 정의
const SwiperButtonPrev = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  z-index: 10;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const SwiperButtonNext = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 10;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const SlideNavigation = styled.div`
  text-align: center;
  color: white;
  margin-top: 10px;
`;

export default ProjectBox;

