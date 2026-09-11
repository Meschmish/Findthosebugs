import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoApp from '../components/TodoApp';

afterEach(() => {
    cleanup();
});

describe("Filter Todos", () => {
    it("Should filter Todos and show correctly if 'filtered'", async () => {
        // Arrange
        const user = userEvent.setup();
        render(<TodoApp />);
        
        const input = screen.getByLabelText("Ny uppgift");
        const addButton = screen.getByRole("button", { name: /lägg till/i });
        const completedButton = screen.getByRole("button", { name: /klara/i });

        // Act
        await user.type(input, "Todo1");
        await user.click(addButton);
        await user.type(input, "Todo2");
        await user.click(addButton);
     
        const checkboxes = screen.getAllByRole("checkbox");
        await user.click(checkboxes[1]); 
        
        await user.click(completedButton);

        // Assert
        await waitFor(() => {
            expect(screen.getByText("Todo1")).toBeInTheDocument();
            expect(screen.queryByText("Todo2")).not.toBeInTheDocument(); 
        });
    });
});