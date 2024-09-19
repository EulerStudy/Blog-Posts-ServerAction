'use server'

import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { sleep } from "@/lib/sleep"

export async function addPost(data) {
  const title = data.get('title')
  //console.log(title)

  const dbData = {title, created: new Date, updated: new Date}
  //console.log(dbData)

  const db = (await connectDB).db('posts')
  await db.collection('records').insertOne(dbData)
  await sleep(1000)
  revalidatePath('/')
}

export async function addTodo(data) {
  const title = data.get('title')
  //console.log(title)

  const dbData = {userId: 1, title, complete: false, id: 4}
  // console.log(dbData)
  const db = (await connectDB).db('posts')
  await db.collection('todos').insertOne(dbData)
  revalidatePath('/')
}

export async function deleteTodo(todo) {
  const db = (await connectDB).db('posts')
  await db.collection('todos').deleteOne({_id: new ObjectId(todo._id)})
  revalidatePath('/')
}

export async function updateTodo(todo) {
  console.log(todo)
  const db = (await connectDB).db('posts')
  await db.collection('todos').updateOne({_id: new ObjectId(todo._id)}, {$set: {completed: !todo.completed}})
  await sleep(2000)
  revalidatePath('/')
}