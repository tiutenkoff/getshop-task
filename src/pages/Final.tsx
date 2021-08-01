import React from 'react';
import { BtnClose } from '../components/BtnClose';
import '../styles/final.scss';

export const Final = () => {
    return (
        <div className="final">
            <div className="final__left">
                <div className="final__success">
                    <div className="final__success--center">
                        <h1 className="left__title">Заявка принята</h1>
                        <p className="left__text">Держите телефон под рукой.<br />Скоро с Вами свяжется наш менеджер. </p>
                    </div>
                </div>
            </div>
        
            <div className="final__right">
                <img src="images/final/wallpaper.png" alt="" />
                <div className="right__up">
                    <BtnClose />
                </div>
                <div className="right__down">
                </div>
            </div>
        </div>
    )
};
