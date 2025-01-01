import React from 'react';
import AppStyles from './Modal.module.css';

const Modal = ({
    position,
    onClose,
    children,
    header,
    open,
    height,
    width,
    style,
    modalClassNames,
    modalStyles,
    customHeader
}) => {
    let modalPosition = {};
    let animationClass;

    if (
        position === 'top' ||
        position === 'bottom' ||
        position === 'left' ||
        position === 'right'
    ) {
        modalPosition = {
            [position]: 0,
            height: position === 'bottom' ? '50%' : '100%',
        };
        animationClass = AppStyles[`slide-${position}-enter`];
    }

    const modalStyle = {
        ...modalPosition,
        animationClass,
        height,
        width,
        ...style,
    };

    if (!open) {
        return null;
    }

    return (
        <div className={AppStyles['modal-overlay']} onClick={onClose}>

            <div
                className={`${AppStyles['modal']} ${modalClassNames}`}
                style={{...modalStyle,...modalStyles}}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={AppStyles['close-btn']} onClick={onClose}>
                    <img src={'https://cdn.venuemonk.com/vm-white-cross-icon.png'} style={{width:'15px'}} />
                </div>
                {
                    customHeader ||
                <div className={AppStyles['modal-header']}>{header}</div>

                }
               

                {children}
            </div>
        </div>
    );
};

export default Modal;
