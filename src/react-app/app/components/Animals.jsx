import React from 'react';
import { Link } from 'react-router-dom';

import ListComponent from './list/index.jsx';
import ModalComponent from './modal/index.jsx';

import { useModal } from '../hooks/modal.js';

import ROUTES from '../routes-constants.js';

const AnimalsComponent = ({data}) => {

    const { modalState, openModalAndFill, closeModal} = useModal();

    const onClickListItemHandle = (e) => {
        openModalAndFill({ title: e.target.innerText });
    };

    const confirmHandler = () => {
        console.log('Confirm button pressed...');
    };
    
    return (
        <>
            <ListComponent.DescriptionList>
                <ListComponent.DescriptionListTerm>
                    Animals
                    <Link to={ROUTES.NEW_ANIMAL}>Add animal</Link>
                </ListComponent.DescriptionListTerm>
                <ListComponent.DescriptionListDetail>
                    <ListComponent.UnorderedList className="striped-list">
                        {data.map(animal => {
                            return <ListComponent.ListItem key={animal.name} onClick={onClickListItemHandle}>{animal.name}</ListComponent.ListItem>
                        })}
                    </ListComponent.UnorderedList>
                </ListComponent.DescriptionListDetail>
            </ListComponent.DescriptionList>
         
            {/* ----- */}

            <ModalComponent.Root showModal={modalState.showModal}>
                <ModalComponent.Header>
                    <ModalComponent.Title>{modalState.title}</ModalComponent.Title>
                    <ModalComponent.Close onClick={closeModal} />
                </ModalComponent.Header>
                <ModalComponent.Body><p>Some content...</p></ModalComponent.Body>
                <ModalComponent.Footer>
                    <button type='button' onClick={confirmHandler}>Ok</button>
                    <button type='button' onClick={closeModal}>Cancel</button>
                </ModalComponent.Footer>
            </ModalComponent.Root>
        </>
    );
}
 
export default AnimalsComponent;
