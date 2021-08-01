import React from 'react';

import { BtnClose } from '../components/BtnClose';
import { QRcode } from '../components/QRcode';

import '../styles/final.scss';

export const Final = () => {
    return (
        <div className="side-page">
            <div className="side-page__left">
                <div className="final__success">
                    <div className="final__success--center">
                        <h1 className="left__title">Заявка принята</h1>
                        <p className="left__text">Держите телефон под рукой.<br />Скоро с Вами свяжется наш менеджер. </p>
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
