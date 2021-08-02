import React from 'react';
import '../styles/keyboard.scss'

export const Keyboard = () => {
    return (
        <div className="keyboard">
            <div id="one" data-number="1">1</div>
            <div id="two" data-number="2">2</div>
            <div id="three" data-number="3">3</div>
            <div id="four" data-number="4">4</div>
            <div id="five" data-number="5">5</div>
            <div id="six" data-number="6">6</div>
            <div id="seven" data-number="7">7</div>
            <div id="eight" data-number="8">8</div>
            <div id="nine" data-number="9">9</div>
            <div id="delete" data-number="delete">Стереть</div>
            <div id="null" data-number="0">0</div>
        </div>
    )
};
