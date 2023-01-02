import styles from '../styles/Markdown.module.css';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';


const MDXComponents = {
  p: (props) => <p {...props} className={styles.p} />,
  a: (props) => <a {...props} className={styles.link} />,
  ul: (props) => <ul {...props} className={styles.ul} />,
  li: (props) => <li {...props} className={styles.li} />,
  blockquote: (props) => <blockquote {...props} className={styles.blockquote} />,
  inlineCode: (props) => <code {...props} className={styles.inlineCode} />,
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
  img: (props) => <img className={styles.mainImage} {...props} />,
  code: (props) => <code {...props} className={styles.code} />,
};



export default MDXComponents;
