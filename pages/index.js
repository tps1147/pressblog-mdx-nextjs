import MeetMe from '../components/MeetMe.js';
import Link from 'next/link';
import PostItem from '../components/PostItem';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
import { useState } from 'react';
import { getPosts } from '../scripts/utils.js';
import { Raleway } from '@next/font/google'

const raleway = Raleway({})

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
    <>
      <Meta title='PressBlog - Your one stop blog for anything React Native' />
      <div className={styles.mainPageHeader}>
        <div className={styles.mainHeaderRow}>
          <div className={styles.mainHeaderColLeft}>
            <div className={raleway.className}>
              <h1 className={styles.title}>The Knowledge Shak</h1>
            </div>
            <p className={styles.desc}>
              Content for the modern monkey, by the modern monkey.
              We proimse to be true in an era of endless information, and to 
              provide with with true value in an era of endless noise.
            </p>
          </div>
          <div className={styles.mainHeaderCol}>
            <MeetMe />
          </div>
        </div>
      </div>
      <div className={styles.divider}/>
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
