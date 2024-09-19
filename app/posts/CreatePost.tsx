'use client'

import { addPost } from "@/lib/actions"
import { useState } from "react"

const CreatePost = () => {
  const[title, setTitle] = useState('')

  return (
    <form action={addPost}>
      <input 
        type='text' 
        name='title'
        placeholder="title"
        value={title}
        onChange={(e) => {setTitle(e.target.value)}}></input>
      <button type='submit'>Create Post</button>
    </form>    
  )
}

export default CreatePost