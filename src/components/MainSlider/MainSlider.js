import React, { useState, useRef, useEffect } from 'react';
// import Swiper from 'react-id-swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.scss'
import Logo from "../Logo/Logo";
import Info from "../Info/Info";
import Video from "../Video/Video";


const MainSlider = () => {
    const refSwiper = useRef(null);
    const [activeSlide, setActiveSlide] = useState('1')
    return (
        <div className="main-slider">
            <Swiper
                ref={refSwiper}
                direction="vertical"
                autoHeight={true}
                onSlideChange={() => setActiveSlide(refSwiper.current.swiper.activeIndex)}
            >
            <SwiperSlide>
                <div className="main-slider__slide">
                    <Logo />
                    <h1 className="main-slider__title">
                        Artistic Practice for Experimental Design
                    </h1>
                    <div className="main-slider__video">
                        <Video />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main-slider__slide">
                    <div className="main-slider__content">
                        <h2 className="main-slider__subtitle">
                            About
                        </h2>
                        <p className="main-slider__text">
                            Crypto etc based in rus somewhere — working internation to design iconic brands and digit experiences
                            with focus on what’s essential. Why essential?

                        </p>
                        <p className="main-slider__text">
                            Please, use a form or drop us a line at <a className="main-slider__link" href="mailto:name@surname.com">name@surname.com</a>
                        </p>

                        <p className="main-slider__text">
                            And we are also registered at <a className="main-slider__link" href="/">Duns</a>
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
            <div className="main-slider__bottom">
                <div className={`main-slider__info main-slider__info_about ${activeSlide === 1 ? "main-slider__info_hide" : ''}`} onClick={() => refSwiper.current.swiper.slideNext()}>
                    <Info color="gray">
                        <span>About</span>
                    </Info>
                </div>
                <div className={`main-slider__info main-slider__info_work ${activeSlide === 1 ? "main-slider__info_100" : ''}`}>
                    <Info color="blue">
                        <span>Work with us</span>
                    </Info>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;






