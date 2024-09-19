import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

async function getPost(_id) {
  const db = (await connectDB).db('posts')
  const data = await db.collection('records').findOne({_id: new ObjectId(_id)})
  console.log('data', data)
  return data
}

const PostDetailPage = async ({params}) => {
  const post = await getPost(params.id)
  console.log('post', post)
  return (
    <div>
      <h1>posts/{post._id.toString()}</h1>
      <div>
        <h3>{post.title}</h3>
        <p>{Date(post.created)}</p>
      </div>
    </div>
  )
}

export default PostDetailPage