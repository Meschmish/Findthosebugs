import type { Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  /*OnToggle behöver ta emot ett id */
  onToggle: (id:number) => void
  onDelete: () => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <label>
        {/*När onToggle tagit emot ett id och typat nummer sätts detta som props*/}.
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}  />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </label>
      <button type="button" aria-label={`Ta bort "${todo.text}"`} onClick={onDelete}>
        Ta bort
      </button>
    </li>
  )
}
