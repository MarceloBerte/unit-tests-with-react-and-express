import { useState } from 'react'

export const useModal = () => {

    const [modalState, setModalState] = useState({showModal: false, title: '', description: ''});

    const openModalAndFill = ({title}) => {
        setModalState(prevState => {
            return {
                ...prevState, 
                showModal: true, 
                title,
                description: ''
            };
        })
    };

    const closeModal = () => {
        setModalState(prevState => {
            return {
                ...prevState, 
                showModal: false, 
                title: '',
                description: ''
            };
        })
    };

    return {
        modalState,
        openModalAndFill,
        closeModal
    }
}
