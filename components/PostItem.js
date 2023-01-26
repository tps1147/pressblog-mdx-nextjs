import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { Raleway } from '@next/font/google';

const raleway = Raleway({ weights: [400, 500, 600, 700], subsets: ['latin'] })

const PostItem = ({ post }) => {

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={styles.postItem}>
      <div className={styles.postItemThumbnail}>
        <img className={styles.thumbnailImage} src={post.data.thumbnail} alt='blog image' />
      </div>
      <div className={styles.postItemBody}>
      <div className={raleway.className}>
      <h3 className={styles.postTitle}>
        <Link href={`/posts/${post.slug}`}>{post.data.title}</Link>
      </h3>
      </div>
      <div className={styles.postItemRow}>
        <p className={styles.postItemDate}>{post.data.publishedOn}</p>
        <p className={styles.postItemCategory}>{post.data.category}</p>
      </div>
      <p>{post.data.excerpt}</p>
      <Link className={styles.linkButton} href={`/posts/${post.slug}`}>Read more</Link>
      </div>
    </motion.div>
  );
};

export default PostItem;
