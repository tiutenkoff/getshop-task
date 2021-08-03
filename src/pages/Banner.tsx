import React from 'react';
import '../styles/banner.scss';
import { NavLink} from 'react-router-dom'

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__next">
                <h3 className="banner__title">Исполните мечту вашего малыша!<br/>Подарите ему собаку!</h3>
                <img src="images/final/qrcode.png" alt="" />
                <p className="banner__text">Сканируйте QR-код<br/> или нажмите ОК</p>
                <NavLink to="/main">
                    <button className="banner__btn">ОК</button>
                </NavLink>
            </div>
            <img className="banner__video" src="images/banner/video.png" alt="" />
        </div>
    )
};
