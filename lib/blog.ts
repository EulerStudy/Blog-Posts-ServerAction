import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'blogs')

export function getSortedPostsData() {
  // /posts 파일 이름 잡아주기
  
  // console.log('process.cwd()', process.cwd())
  // console.log('postsDirectory', postsDirectory)

  const fileNames = fs.readdirSync(postsDirectory)
  // console.log(fileNames)
  // [ 'pre-rendering.md', 'ssg-ssd.md' ]
  
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // npm i gray-matter --save
    // md 파일로 되어 있는 것을 객체로 컨버트 해준다.
    const matterResult = matter(fileContents)

    // console.log(id)
    // console.log(fullPath)
    // console.log(fileContents)
    // console.log(matterResult)
    return {
      id,
      ...matterResult.data as {title: string; date: string}
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  // [ 'pre-rendering.md', 'ssg-ssd.md' ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/,'')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContents)

  // npm i remark remark-html --save
  // 마크다운을 html 스티링으로 만들어 줌
  const processContent = await remark().use(remarkHtml).process(matterResult.content)
  const contentHtml = processContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as {date: string, title: string})
  }
}