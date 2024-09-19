import { deleteTodo } from "@/lib/actions"
import Checkbox from "./Checkbox";

const TodoItem = ({...todo}) => {
  todo._id = todo._id.toString()
  return (
    <form>
      <label htmlFor='completed'>
        {todo.title}
      </label>
      <div>
        <Checkbox todo={todo}></Checkbox>
        <button 
          formAction={async () => {
            'use server';
            await deleteTodo(todo)
          }}>X</button>
      </div>
    </form>
  )
}

export default TodoItem