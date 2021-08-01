import React from 'react';

import { BtnClose } from '../components/BtnClose';
import { QRcode } from '../components/QRcode';

import '../styles/main.scss';

export const Main = () => {
    return (
        <div className="side-page">
            <div className="side-page__left">
                <div className="main__success">
                    <div className="main__success--center">
                        <h2 className="main__title">Введите ваш номер мобильного телефона</h2>
                        <h1 className="main__telephone">+7(___)___-__-__</h1>
                        <p className="main__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                        <div className="main__keyboard">
                            <div id="one" data-number="1">1</div>
                            <div id="two" data-number="2">2</div>
                            <div id="three" data-number="3">3</div>
                            <div id="four" data-number="4">4</div>
                            <div id="five" data-number="5">5</div>
                            <div id="six" data-number="6">6</div>
                            <div id="seven" data-number="7">7</div>
                            <div id="eight" data-number="8">8</div>
                            <div id="nine" data-number="9">9</div> 
                            <div id="delete" data-number="delete">Стереть</div> 
                            <div id="null" data-number="0">0</div> 
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="side-page__right">
                <img src="images/final/wallpaper.png" alt="" />
                <BtnClose />
                <QRcode />
            </div>
        </div>
    )
};
