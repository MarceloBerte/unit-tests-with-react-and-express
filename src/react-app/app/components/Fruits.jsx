import React from 'react';
import { Link } from 'react-router-dom';

import ListComponent from './list/index.jsx';
import ModalComponent from './modal/index.jsx';

import { useModal } from '../hooks/modal.js';

import ROUTES from '../routes-constants.js';

const FruitsComponent = ({data}) => {

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
                    Fruits
                    <Link to={ROUTES.NEW_FRUIT}>Add fruit</Link>
                </ListComponent.DescriptionListTerm>
                <ListComponent.DescriptionListDetail>
                    <ListComponent.UnorderedList className="striped-list">
                        {data.map(fruit => {
                            return <ListComponent.ListItem key={fruit.name} onClick={onClickListItemHandle}>{fruit.name}</ListComponent.ListItem>
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
 
export default FruitsComponent;
