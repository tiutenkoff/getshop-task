import React from 'react';
import '../styles/btnConfirm.scss'

interface BtnConfirmProps {
    onClickFinal: () => void;
}

export const BtnConfirm: React.FC<BtnConfirmProps> = ({ onClickFinal }) => {
    return (
        <div onClick={onClickFinal}  className="confirm">
            <button className="confirm__btn">Подтвердить номер</button>
        </div>
    )
}
