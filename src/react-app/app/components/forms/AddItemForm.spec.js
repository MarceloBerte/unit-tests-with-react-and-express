/** @jest-environment jsdom */

import React from 'react';
import { render } from '@testing-library/react';

import AddItemFormComponent from './AddItemForm.jsx';

describe('AddItemFormComponent', () => {
    it('Should return the correct markup', () => {
        const { container } = render(<AddItemFormComponent />);
        expect(container.innerHTML).toBe('<form><div class="form-control"><label for="name">Name:</label><input type="text" id="name" name="name"></div><div class="form-control"><button type="submit">Create</button></div></form>');
    });
});
