import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

test('renders task item and toggles it', () => {
  const mockToggle = vi.fn();
  const mockDelete = vi.fn();
  const task = { id: 1, text: 'Test Task', completed: false };

  render(<TaskItem task={task} onToggle={mockToggle} onDelete={mockDelete} />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(mockToggle).toHaveBeenCalledWith(1);

  fireEvent.click(screen.getByText('✕'));
  expect(mockDelete).toHaveBeenCalledWith(1);
});
