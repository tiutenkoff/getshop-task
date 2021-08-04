import React from 'react';
import '../styles/banner.scss';
import { NavLink} from 'react-router-dom'

export const Banner: React.FC = () => {
    const [showBanner, setShowbanner] = React.useState(false);

    React.useEffect(() => {
        setBanner();
    }, [])

    const setBanner = () => {
        setTimeout(() => {
            setShowbanner(true);
        }, 5000)
    };

    return (
        <div className="banner">
            <div className={`banner__next ${showBanner ? 'banner__next--show' : ''}`}>
                <h3 className="banner__title">Исполните мечту вашего малыша!<br/>Подарите ему собаку!</h3>
                <img src="images/final/qrcode.png" alt="" />
                <p className="banner__text">Сканируйте QR-код<br/> или нажмите ОК</p>
                <NavLink to="/main">
                    <button className="banner__btn">ОК</button>
                </NavLink>
            </div>
            <video width="1280" height="720" autoPlay muted >
                <source src="videos/videobanner.mp4"/>
            </video>
            <img className="banner__back" src="images/banner/video.png" alt="" />
        </div>
    )
};
