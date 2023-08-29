import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import DescriptionListComponent from './description-list.jsx';
import DescriptionListTermComponent from './description-list-term.jsx';
import DescriptionListDetailComponent from './description-list-detail.jsx';
import UnorderedListComponent from './unordered-list.jsx';
import ListItemComponent from './list-item.jsx';

const testComponent = (component, expectedResult) => {
    const { container } = render(component);
    expect(container.innerHTML).toBe(expectedResult);
};

describe('ListComponent', () => {
    describe('DescriptionListComponent', () => {
        it('Should return a clean empty markup', () => {
            return testComponent(<DescriptionListComponent />, '<dl></dl>');
        });

        it('Should return a clean markup with a className', () => {
            return testComponent(<DescriptionListComponent className="striped-list" />, '<dl class="striped-list"></dl>');
        });
    });

    describe('DescriptionListTermComponent', () => {
        it('Should return a clean empty markup', () => {
           return testComponent(<DescriptionListTermComponent />, '<dt></dt>');
        });
    });
    
    describe('DescriptionListDetailComponent', () => {
        it('Should return a clean empty markup', () => {
           return testComponent(<DescriptionListDetailComponent />, '<dd></dd>');
        });
    });
    
    describe('UnorderedListComponent', () => {
        it('Should return a clean empty markup', () => {
           return testComponent(<UnorderedListComponent />, '<ul></ul>');
        });
    });
    
    describe('ListItemComponent', () => {
        it('Should return a clean empty markup', () => {
           return testComponent(<ListItemComponent />, '<li></li>');
        });

        it('Should trigger onClick event', () => {
            const handleClick = jest.fn();

            const { container } = render(<ListItemComponent onClick={handleClick} />);
            const listItem = container.firstChild; 

            fireEvent.click(listItem);

            expect(handleClick).toHaveBeenCalledTimes(1);
        });
    });
});
