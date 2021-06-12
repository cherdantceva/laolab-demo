import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Logo from "../Logo/Logo";


const MainMobile = () => {

    return (
        <div className='main-mobile'>
            <Logo />

            <div className="main-slider swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide main-slider__slide">
                        <h1 className="main-slider__title">
                            Artistic Practice for Experimental Design
                        </h1>
                        <div className="main-slider__video">
                            <img className="video" src="../../res/img/lao.jpg"/>
                        </div>
                    </div>
                    <div className="swiper-slide main-slider__slide">
                        <div className="main-slider__content">
                            <h2 className="main-mobile__title">
                                About
                            </h2>
                            <p className="main-slider__text">
                                Crypto etc based in rus somewhere — working internation to design iconic brands and digit experiences
                                with focus on what’s essential. Why essential?

                            </p>
                            <p className="main-slider__text">
                                Please, use a form or drop us a line at
                                <a className="main-slider__link" href="mailto:name@surname.com">name@surname.com</a>
                            </p>

                            <p className="main-slider__text">
                                And we are also registered at
                                <a className="main-slider__link" href="/">Duns</a>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="info info_bottom">
                    <div className="info__inner info__inner_gray info__inner_50">
                        About
                    </div>
                    <div className="info__inner info__inner_blue info__inner_50">
                        Work with us
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMobile;






