import { cleanup, render, screen } from '@testing-library/react'
import TodoStats from '../components/TodoStats'
import type { Todo } from '../types'

afterEach(() => {
    cleanup();
});

describe("TodoStats", () => {
  it("Should show total and remaining todos", () => {
    
    // Arrange
    const mockTodos: Todo[] = [
      { id: 1, text: 'Dammsuga', completed: true},
      { id: 2, text: 'Träna', completed: false },
      { id: 3, text: 'Vattna blommorna', completed: false },
    ]

    // Act
    render(<TodoStats todos={mockTodos} />)

    // Assert
    expect(screen.getByText("2 kvar av 3")).toBeInTheDocument()
  })
})