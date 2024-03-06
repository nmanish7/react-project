import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';
import '@testing-library/jest-dom';

test('renders Counter and increments count', () => {
    const { getByText } = render(<Counter />);

    // Check that the initial count is 0
    expect(getByText('Count: 0')).toBeInTheDocument();

    // Find the button and click it
    const button = getByText('Increment');
    fireEvent.click(button);

    // Check that the count has increased to 1
    expect(getByText('Count: 1')).toBeInTheDocument();
    
    // Click the button again
    fireEvent.click(button);

    // Check that the count has increased to 2
    expect(getByText('Count: 2')).toBeInTheDocument();
});