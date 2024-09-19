import homeStyles from "./page.module.css";
import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  const postsData = getSortedPostsData()
  //console.log(postsData)
  return (
    <div className={homeStyles.container}>
      <section className={homeStyles.headingMd}>
        <p>[KIM Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {
            postsData.map(({id, title, date}) => 
              <li className={homeStyles.listItem} key={id}>
                <Link href={`/blog/${id}`}>
                  <div>{title}</div>
                </Link>
                <br></br>
                <small className={homeStyles.lightText}>
                  {date}
                </small>
              </li>
            )
          }
        </ul>
      </section>
    </div>
  )
}
