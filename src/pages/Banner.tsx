import React from 'react';
import '../styles/banner.scss';
import { NavLink} from 'react-router-dom'

export const Banner = () => {
    return (
        <div className="banner">
            <img className="banner__image banner__image--QR" src="images/banner/banner.png" alt="" />
            <img className="banner__image" src="images/banner/video.png" alt="" />
            <NavLink to="/main">
                <img className="banner__image banner__image--BTN" src="images/banner/btn.png" alt="" />
            </NavLink>
        </div>
    )
};
