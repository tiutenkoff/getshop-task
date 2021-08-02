import React from 'react';
import '../styles/keyboard.scss';

interface KeyboardProps {
    onClick: (data: number | string) => void;
}

export const Keyboard: React.FC<KeyboardProps> = ({ onClick }) => {
    const numbers: Array<number> = Array(9).fill(0);

    return (
        <div className="keyboard">
            {
                numbers.map((_, i) => {
                    return <div key={i + 'key'} onClick={onClick.bind(null, i + 1)} id={`${i + 1}`} data-number={i + 1}>{i + 1}</div>
                })
            }
            <div onClick={onClick.bind(null, 0)} id="0" data-number="0">0</div>
            <div onClick={onClick.bind(null, 'delete')} id="delete" data-number="delete">Стереть</div>
        </div>
    )
};
