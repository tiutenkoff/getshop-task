import React from 'react';

import { Agreement } from '../components/Agreement';
import { BtnClose } from '../components/BtnClose';
import { BtnConfirm } from '../components/BtnConfirm';
import { Keyboard } from '../components/Keyboard';
import { QRcode } from '../components/QRcode';

import '../styles/main.scss';

export const Main: React.FC = () => {
    const [telephoneNumbers, setTelephoneNumbers]  = React.useState<Array<any>>(Array(16).fill('_'));
    const [isAgree, setIsAgree] = React.useState<boolean>(false);

    const initialState = () => {
        setTelephoneNumbers(telephoneNumbers.map((_, i) => {
            telephoneNumbers[i] = '_';
            telephoneNumbers[0] = '+';
            telephoneNumbers[1] = '7';
            telephoneNumbers[2] = '(';
            telephoneNumbers[6] = ')';
            telephoneNumbers[10] = '-';
            telephoneNumbers[13] = '-';
            return telephoneNumbers[i];
        }));
    };

    React.useEffect(() => {
        initialState();
    }, [])

    const changeAgreement = () => {
        setIsAgree(prev => prev = !prev);
    };

    const handleClickKeyboard = (data: number | string) => {
        if (data === 'delete') {
            console.log(data);
            initialState();
        }
        else {
            let copyTelephone = [...telephoneNumbers];
                for (let i = 0; i < copyTelephone.length; i++) {
                    if (copyTelephone[i] === '_') {
                       copyTelephone[i] = data;
                       break;
                    }
            }
            setTelephoneNumbers(copyTelephone);
        }
    };

    return (
        <div className="side-page">
            <div className="side-page__left">
                <div className="main__success">
                    <div className="main__success--center">
                        <h2 className="main__title">Введите ваш номер мобильного телефона</h2>
                        <h1 className="main__telephone">{telephoneNumbers.join('')}</h1>
                        <p className="main__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                        <Keyboard onClick={handleClickKeyboard}/>
                        <Agreement toggleAgreement={changeAgreement} isAgree={isAgree}/>
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
