import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { [FCName] } from './[FCName]';

describe('<[FCName] />', () => {
    it('should render [FCName]', () => {
        const { container } = render(<[FCName] />);
        expect(container).toBeInTheDocument();
    });
});