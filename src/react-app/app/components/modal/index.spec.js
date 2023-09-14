/** @jest-environment jsdom */

import React from 'react';
import ReactDOM from "react-dom"
import { render, cleanup, fireEvent } from '@testing-library/react';

import ModalRootComponent from './modal-root';
import ModalHeaderComponent from './modal-header';
import ModalHeaderTitleComponent from './modal-header-title';
import ModalHeaderCloseButtonComponent from './modal-header-close-button';
import ModalBodyComponent from './modal-body';
import ModalFooterComponent from './modal-footer';

const testComponent = (component, expectedResult) => {
    const { container } = render(component);
    expect(container.innerHTML).toBe(expectedResult);
};

describe('ModalComponent', () => {
    describe('ModalRootComponent', () => {
        beforeAll(() => {
            ReactDOM.createPortal = jest.fn((element) => { return element; });
        });

        afterEach(() => { cleanup() });

        it('Should return a clean empty markup when "showModal" attribute receives true', () => {
            return testComponent(<ModalRootComponent showModal={true} />, "<div class=\"modal\"></div><div class=\"modal-backdrop\"></div>");
        });

        it('Should return no markup when "showModal" attribute receives false', () => {
            return testComponent(<ModalRootComponent showModal={false} />, "");
        });

        it('Should return no markup when "showModal" attribute is not defined', () => {
            return testComponent(<ModalRootComponent />, "");
        });
    });

    describe('ModalHeaderComponent', () => {
        it('Should return a clean empty markup', () => {
            return testComponent(<ModalHeaderComponent />, "<header></header>");
        });
    });

    describe('ModalHeaderTitleComponent', () => {
        it('Should return a clean empty markup', () => {
            return testComponent(<ModalHeaderTitleComponent />, "<div></div>");
        });
    });

    describe('ModalHeaderCloseButtonComponent', () => {
        it('Should trigger onClick event', () => {
            const handleClick = jest.fn();

            const { container } = render(<ModalHeaderCloseButtonComponent onClick={handleClick} />);
            const listItem = container.firstChild;

            fireEvent.click(listItem);

            expect(handleClick).toHaveBeenCalledTimes(1);
        });
    });

    describe('ModalBodyComponent', () => {
        it('Should return a clean empty markup', () => {
            return testComponent(<ModalBodyComponent />, "<div></div>");
        });
    });

    describe('ModalFooterComponent', () => {
        it('Should return a clean empty markup', () => {
            return testComponent(<ModalFooterComponent />, "<footer></footer>");
        });
    });
});
