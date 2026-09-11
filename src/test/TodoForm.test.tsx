import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoApp from '../components/TodoApp';

afterEach(() => {
    cleanup();
});

describe("TodoForm", () => {
    it("Should not be able to create empty todo", async () => {

        // Arrange
        const user = userEvent.setup();
        render(<TodoApp />)
        const input = screen.getByLabelText("Ny uppgift");
        const addButton = screen.getByRole("button", { name: /lägg till/i });

        // Act
        await user.click(addButton);
        await user.type(input, " ")
        await user.click(addButton)

        const todos = screen.queryAllByRole("listitem")

        expect(todos.length).toEqual(0)
    })
}) 