import React from 'react';
import '../styles/qrcode.scss';

export const QRcode = () => {
    return (
        <div className="qr-code">
            <p className="qr-code__text">Сканируйте QR-код для получения дополнительной информации</p>
            <img src="images/final/qrcode.png" alt="" />
        </div>
    )
}
