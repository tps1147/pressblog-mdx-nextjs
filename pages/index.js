import MeetMe from '../components/MeetMe.js';
import Link from 'next/link';
import PostItem from '../components/PostItem';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
import { useState } from 'react';
import { getPosts } from '../scripts/utils.js';

const Home = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  return (
    <>
      <Meta title='PressBlog - Your one stop blog for anything React Native' />
      <div className={styles.mainPageHeader}>
        <div className={styles.mainHeaderRow}>
          <div className={styles.mainHeaderCol}>
          <h1 className={styles.title}>The knowledge shak</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quibusdam voluptatibus
              necessitatibus quae quidem voluptatum quos natus. Quisquam
            </p>
          </div>
          <div className={styles.mainHeaderCol}>
            <MeetMe />
          </div>
        </div>
      </div>

      <div className={styles.articleList}>
        {/* <p className={styles.desc}>Newly Published</p> */}
        {filteredPosts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
        
      </div>
      <button onClick={loadMorePosts} className={styles.button}>
          Load more
        </button>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = getPosts(1);

  return {
    props: {
      posts,
    },
  };
};
