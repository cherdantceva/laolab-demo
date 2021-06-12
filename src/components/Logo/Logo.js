import React, { useState } from 'react';


const MainMobile = () => {

    return (
        <div className="page">
            <div className="page__part">
                <a className="logo" href="/"></a>
                <h1 className="page__title">
                    Artistic Practice for Experimental Design
                </h1>
                <div className="page__video">
                    <img className="video" src="/res/img/lao.jpg"/>
                </div>
            </div>
            <div className="page__part">

                <div className="main-content">
                    <h2 className="main-content__title">
                        About
                    </h2>
                    <p className="main-content__content">
                        Crypto etc based in rus somewhere — working internation to design iconic brands and digit experiences
                        with focus on what’s essential. Why essential?

                    </p>
                    <p className="main-content__content">
                        Please, use a form or drop us a line at <a className="main-content__link"
                                                                   href="mailto:name@surname.com">name@surname.com</a>
                    </p>

                    <p className="main-content__content">
                        And we are also registered at <a className="main-content__link" href="/">Duns</a>
                    </p>
                </div>
            </div>
            <div className="page__info page__info_bottom">
                <div className="info">
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






