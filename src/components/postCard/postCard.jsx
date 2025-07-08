import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>08.05.2023</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nulla tenetur minima harum, quasi quisquam porro, natus dignissimos ipsam voluptates, ad voluptatem velit aliquam? Sit deserunt optio distinctio mollitia possimus.</p>
        <Link className={styles.link} href='/'>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard