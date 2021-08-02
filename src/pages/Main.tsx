import React from 'react';

import { Agreement } from '../components/Agreement';
import { BtnClose } from '../components/BtnClose';
import { BtnConfirm } from '../components/BtnConfirm';
import { Keyboard } from '../components/Keyboard';
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
                        <Keyboard />
                        <Agreement />
                        <BtnConfirm />
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
