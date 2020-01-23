import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notifications from '~/components/Notifications';

describe('Render Component Notifications', () => {
  it('should be able to render Notifications', () => {
    const { getByTestId } = render(<Notifications />);

    fireEvent.click(getByTestId('notification'));

    expect(1).toEqual(1);
  });
});
