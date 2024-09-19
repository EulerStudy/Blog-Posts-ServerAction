import { getPostData } from "@/lib/blog";
import postStyles from "./page.module.css";

export default async function Posts(props: {
  params: {
    id: string
  }
}) {
  //console.log('props', props)
  //console.log(props.params.id)
  const data = await getPostData(props.params.id)
  //console.log(data)
  return (
    <div className={postStyles.container}>
      <head>
        <title>{data.title}</title>
      </head>
      <article>
        <h1 className={postStyles.headingXl}>{data.title}</h1>
        <div>
          {data.date}
        </div>
        <div dangerouslySetInnerHTML={{__html: data.contentHtml}}></div>
      </article>
    </div>
  )
}
