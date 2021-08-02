import React from 'react';
import '../styles/agreement.scss';

export const Agreement = () => {
    return (
        <div className="agreement">
            <div className="agreement__checkbox">
            <div className="checkbox__lines">
                <span className="checkbox--lineFirst"></span>
                <span className="checkbox--lineSecond"></span>
            </div>
            </div>
            <p className="agreement__text">Согласие на обработку персональных данных</p>
        </div>
    )
}
