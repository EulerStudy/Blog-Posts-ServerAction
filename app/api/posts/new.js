export default async function handler(req, res) {

  console.log(req)


  if (req.method === 'POST') {
    
    console.log(req.body)
    
    
    if (req.body.title == '') {
      return res.status(500).json('저 왜 제목 안씀')
    }
    
    // const db = (await connectDB).db('posts')
    // const result = await db.collection('records').insertOne(req.body)
    return res.status(302).redirect('/posts')
  }
}