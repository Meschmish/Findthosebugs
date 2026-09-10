import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from '../components/TodoItem'
import type { Todo } from '../types';

afterEach(() => {
    cleanup();
});
    
describe("TodoItem", () => {
    it("Should toggle the Todo when clicked", async () => {

    // Arrange
    const mockTodo: Todo = { id: 1, text: 'Dammsuga', completed: false };
    let toggledId: number | undefined = undefined;
    
    const handleToggle = (id: number) => {
        toggledId = id;
    };

    // Act
    render(<TodoItem todo={mockTodo} onToggle={handleToggle} onDelete={() => {}} />);
    
    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);

    // Assert
    expect(toggledId).toBe(1); 
});
});