import { addTodo } from "@/lib/actions"

const Form = () => {
  return (
    <form action={addTodo}>
      <input
        type='text'
        name='title'
        placeholder="새로운 할 일을 생성하세요"
        autoFocus
      ></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form