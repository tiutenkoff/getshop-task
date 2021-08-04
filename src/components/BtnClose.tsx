import React from 'react';
import { NavLink } from 'react-router-dom'

import '../styles/btnClose.scss';

export const BtnClose = () => {
    return (
        <NavLink to="">
            <div className="btn-block">
                <button className="btn-close">
                    <div className="btn-close__lines">
                        <span className="btn-close--lineFirst"></span>
                        <span className="btn-close--lineSecond"></span>
                    </div>
                </button>
            </div>
        </NavLink>
    )
};
