import MeetMe from '../components/MeetMe.js';
import Link from 'next/link';
import PostItem from '../components/PostItem';
import styles from '../styles/Blog.module.css';
import Meta from '../components/Meta';
import { useState, useEffect } from 'react';
import { getPosts } from '../scripts/utils.js';
import { Raleway } from '@next/font/google'
import { motion } from 'framer-motion'



const raleway = Raleway({ weights: [400, 500, 600, 700], subsets: ['latin'] })

const Home = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);


  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };
  const filterPosts = (category) => {
    if (category === 'All') {
      setFilteredPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) => {
        return post.data.category === category;
      });
      setFilteredPosts(filteredPosts);
    }
  };

  return (
    <div className={styles.blogContainer}>
      <Meta title='Knowledge Shak - All Posts' />
      <div className={styles.titleContainer}>
      <h3 className={styles.title}>Knowledge Shak posts</h3>
      </div>
      <div className={styles.mainFilter}>
        {/* <div className={styles.filterItem}></div> */}
          <button onClick={filterPosts.bind(this, 'All')} className={styles.filterButton}>All</button>
          <button onClick={filterPosts.bind(this, 'technology')} className={styles.filterButton}>Technology</button>
          <button className={styles.filterButton}>Business</button>
          <button className={styles.filterButton}>Politics</button>
          <button className={styles.filterButton}>Sports</button>
          <button className={styles.filterButton}>Entertainment</button>
      </div>
      <div className={styles.articleList}>
        {/* <p className={styles.desc}>Newly Published</p> */}
        {filteredPosts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
      {filteredPosts.length > 5 ? 
        <button onClick={loadMorePosts} className={styles.button}>
          Load more
        </button> 
        : null}
    </div>
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
