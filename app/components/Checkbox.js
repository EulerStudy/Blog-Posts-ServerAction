'use client'

import { updateTodo } from "@/lib/actions"
import { useTransition } from "react"

const Checkbox = ({todo}) => {
  const [isPending, startTransition] = useTransition()

  return (
    <input
      type='checkbox'
      checked={todo.completed}
      id='completed'
      name='completed'
      disabled={isPending}
      onChange={()=>startTransition(()=>{updateTodo(todo)})}
    ></input>
  )
}

export default Checkbox