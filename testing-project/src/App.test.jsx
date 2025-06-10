import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('user can add a task', () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/add task/i), {
    target: { value: 'Learn Testing' },
  });
  fireEvent.click(screen.getByText(/add/i));

  expect(screen.getByText('Learn Testing')).toBeInTheDocument();
});
