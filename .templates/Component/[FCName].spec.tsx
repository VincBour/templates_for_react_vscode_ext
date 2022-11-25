import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { [FCName] } from '../[FCName]';

describe('<[FCName] />', () => {
    it('should render [FCName]', () => {
        // Given

        // When
        const { container } = render(<[FCName] />);

        //Then
        expect(container).toBeInTheDocument();
    });
});