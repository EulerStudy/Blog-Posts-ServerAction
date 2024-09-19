import { connectDB } from "@/util/database"
import TodoItem from "./TodoItem"

async function fetchTodo() {
  try {
    const db = (await connectDB).db('posts')
    const data = await db.collection('todos').find({}).toArray()
    return data
  } catch(error) {
    if (error instanceof Error) {
      console.log(error.stack)
    }
  }
}

const TodoList = async () => {
  const todos = await fetchTodo()  
  let content
  if(!todos || todos.length === 0) {
    content = <p>Todo 리스트가 없습니다.</p>
  } else {
    const sortedTodos = todos.reverse()
    content = (
      <>
        {
          sortedTodos.map((todo)=><TodoItem key={todo.id} {...todo}></TodoItem>)
        }
      </>
    )
  }
    
  return content
}

export default TodoList