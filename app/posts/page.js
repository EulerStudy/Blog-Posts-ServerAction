import { connectDB } from "@/util/database";
import Link from "next/link";
import CreatePost from "./CreatePost";

async function getPost() {
  const db = (await connectDB).db('posts')
  const result = await db.collection('records').find({}).toArray()
  //console.log(result)
  return result
}

export default async function Posts() {
  const posts = await getPost()
  return (
    <div>
      <h1>Posts</h1>
      {
        posts?.map(post => {
          return <PostItem key={post._id} post={post}></PostItem>
        })
      }
      <CreatePost></CreatePost>
    </div>
  )
}

const PostItem = ({post}) => {
  return (
    <>
      <Link href={`/posts/${post._id.toString()}`}>
        <div>
          <h3>
            {post.title}
          </h3>
          <p>{post.created.toString()}</p>
        </div>
      </Link>
    </>
  )
}