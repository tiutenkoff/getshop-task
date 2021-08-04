import React from 'react';
import { NavLink } from 'react-router-dom';

import { Agreement } from '../components/Agreement';
import { BtnClose } from '../components/BtnClose';
import { BtnConfirm } from '../components/BtnConfirm';
import { Keyboard } from '../components/Keyboard';
import { QRcode } from '../components/QRcode';
import { IPhoneNumber, ICheckCorrect } from '../types/types';

import '../styles/main.scss';

export const Main: React.FC = () => {
    const [telephoneNumbers, setTelephoneNumbers]  = React.useState<Array<any>>(Array(16).fill('_'));
    const [isAgree, setIsAgree] = React.useState<boolean>(false);
    const [currentTelephone, setCurrentTelephone] = React.useState<IPhoneNumber>({ telephone: '', currentNumber: 0, isConfirmed: false});
    const [checkingCorrect, setCheckingCorrect] = React.useState<ICheckCorrect>({isAgree: false, isConfirm: false});
    const [isValidate, setIsValidate] = React.useState<boolean>(false);

    let accessKeyValidate = 'e610a2d5d0ba6c99699e781f4347ff31';
    let urlValidate = 'http://apilayer.net/api/validate?access_key=' + accessKeyValidate + '&number=' + currentTelephone.telephone + '&country_code=RU' + '&format=1';

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

    const fetched = async () => {
        if (currentTelephone.telephone.length === 10)
        {
            await fetch(urlValidate).then(res => res.json()).then(({ valid }) => {
                if (valid === true) {
                    setIsValidate(true)
                }
                else {
                    setIsValidate(false)
                }
            })
        }
    };

    React.useEffect(() => {
        fetched();
    }, [currentTelephone.telephone])

    const changeAgreement = () => {
        setIsAgree(prev => prev = !prev);
    };
    const handleClickKeyboard = (data: number | string) => {
        if (currentTelephone.currentNumber === 9) {
            setCurrentTelephone(prev => ({
                ...prev,
                isConfirmed: true,
            }))
        } else {
        setCurrentTelephone(prev => ({
            ...prev, 
            currentNumber: prev.currentNumber + 1,
        }));
    }

        if (data === 'delete') {
            initialState();
            setCurrentTelephone(prev => ({
                ...prev,
                telephone: '',
                currentNumber: 0,
                isConfirmed: false,
            }));
        }
        else {
            let copyTelephone = [...telephoneNumbers];
                for (let i = 0; i < copyTelephone.length; i++) {
                    if (copyTelephone[i] === '_') {
                       copyTelephone[i] = data;
                       break;
                    }
            }
            if (currentTelephone.currentNumber < 10) {
                setCurrentTelephone(prev => ({
                    ...prev,
                    telephone: prev.telephone + data,
                }));
            }
            setTelephoneNumbers(copyTelephone);
        }
    };


    const clickHandler = () => {
        if (!isValidate) {
            console.log('yes', isValidate)
            setCheckingCorrect(prev => ({
                ...prev,
                isConfirm: true
            }))
        }
        else if (!isAgree) {
            setCheckingCorrect(prev => ({
                ...prev,
                isAgree: true
            }))
        }

        setTimeout(() => {
            setCheckingCorrect(prev => ({
                ...prev,
                isConfirm: false,
                isAgree: false,
            }))  
        }, 2000)
    };



    return (
        <div className="side-page">
            <div className="side-page__left">
                <div className="main__success">
                    <div className="main__success--center">
                        <h2 className="main__title">Введите ваш номер мобильного телефона</h2>
                        {
                            
                        }
                        <h1 className={`main__telephone ${checkingCorrect.isConfirm ? 'isRight' : ''}`}>{telephoneNumbers.join('')}</h1>
                        <p className="main__text">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                        <Keyboard onClick={handleClickKeyboard} />
                        {
                            checkingCorrect.isConfirm
                                ? <p className="isRight">Неверно введен номер</p>
                                : checkingCorrect.isAgree
                                    ? <p className="isRight">Дайте свое согласие на обработку ПД</p>
                                    : <Agreement toggleAgreement={changeAgreement} isAgree={isAgree} />
                                
                        }
                        
                        {
                            !(isAgree && currentTelephone.isConfirmed && isValidate)
                                ? <BtnConfirm  onClickFinal={clickHandler} />
                                : <NavLink to="/final">
                                    <BtnConfirm onClickFinal={clickHandler} />
                                </NavLink>
                        }
                        
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
