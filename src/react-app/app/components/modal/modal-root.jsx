import React from 'react';
import { createPortal } from 'react-dom';

const ModalRootComponent = ({showModal, children, onClick}) => {

    if(!showModal) { return; }

    return createPortal (
        <>
            <div className='modal'>{children}</div>
            <div className='modal-backdrop' onClick={onClick}></div>
        </>, 
        document.getElementById('portal')
    );
}
 
export default ModalRootComponent;
