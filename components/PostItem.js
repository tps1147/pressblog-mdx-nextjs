import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';


const PostItem = ({ post }) => {

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className={styles.postItem}>
      <Image className={styles.thumbnailImage} width={300} height={300} loader={myLoader} src={post.data.thumbnail} alt='' />
      <h3>
        <Link href={`/posts/${post.slug}`}>{post.data.title}</Link>
      </h3>
      <p>{post.data.excerpt}</p>
      <Link href={`/posts/${post.slug}`}>Read more</Link>
    </div>
  );
};

export default PostItem;
