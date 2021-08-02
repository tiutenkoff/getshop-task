import React from 'react';
import '../styles/agreement.scss';

interface AgreementProps {
    isAgree: boolean;
    toggleAgreement: () => void;
}

export const Agreement:React.FC<AgreementProps> = ({ isAgree, toggleAgreement }) => {
    return (
        <div className="agreement">
            <div onClick={toggleAgreement} className="agreement__checkbox">
                <div className="checkbox__lines">
                    {
                        isAgree
                            ? <>
                                <span className="checkbox--lineFirst"></span>
                                <span className="checkbox--lineSecond"></span>
                            </>
                            : null
                    }
                </div>
            </div>
            <p className="agreement__text">Согласие на обработку персональных данных</p>
        </div>
    )
}
