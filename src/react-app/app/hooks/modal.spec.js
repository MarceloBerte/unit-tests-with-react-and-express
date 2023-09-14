/** @jest-environment jsdom */

import { renderHook, act } from '@testing-library/react';

import { useModal } from './modal';

describe('Custom Hooks', () => {
    describe('modal.js | useModal', () => {
        it('Should return the modal initial state', () => {
            const { result } = renderHook(useModal);
            const expectedResult = {
                showModal: false,
                title: '',
                description: ''
            };

            expect(result.current.modalState).toStrictEqual(expectedResult)
        });

        it('Should be possible to open the modal with some title', () => {
            const { result } = renderHook(useModal);
            const newModalData = {
                title: 'My modal!'
            };

            act(() => result.current.openModalAndFill(newModalData));

            const expectedResult = {
                showModal: true,
                title: 'My modal!',
                description: ''
            };

            expect(result.current.modalState).toStrictEqual(expectedResult);
        });

        it('Should be possible to close a previous opened modal', () => {
            const { result } = renderHook(useModal);
            const previousModalData = {
                title: 'My open modal!'
            };

            // Open modal
            act(() => result.current.openModalAndFill(previousModalData));

            const previousModalExpectedResult = {
                showModal: true,
                title: 'My open modal!',
                description: ''
            };

            // Check opened modal state
            expect(result.current.modalState).toStrictEqual(previousModalExpectedResult);

            // Close Modal
            act(() => result.current.closeModal());

            const expectedResult = {
                showModal: false,
                title: '',
                description: ''
            };

            // Check closed modal state
            expect(result.current.modalState).toStrictEqual(expectedResult);
        });
    });
});
