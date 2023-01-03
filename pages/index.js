import MeetMe from '../components/MeetMe.js';
import Link from 'next/link';
import PostItem from '../components/PostItem';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
import { useState, useEffect } from 'react';
import { getPosts } from '../scripts/utils.js';
import { Raleway } from '@next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image.js';



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
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const lineToAnimate = 'The Knowledge Shak'

  return (
    <div style={{ overflow: 'hidden'}}>
      <Meta title='The Knowledge Shak - unbiased and througly research content' />
      <div className={styles.mainPageHeader}>
        <div className={styles.mainHeaderRow}>
          <div className={styles.mainHeaderColLeft}>
          {/* <Image src='/shaklogo.png' alt='logo' width={100} height={100} loader={myLoader} /> */}
            <div className={raleway.className}>
              <h1 className={styles.title}>  The Knowledge Shak </h1>
            </div>
            <div className={raleway.className}>
            <p className={styles.desc}>
            Welcome to The Knowledge Shak, where we provide true and unbiased content for the modern monkey. 
            In an era of endless noise, it can be overwhelming to sort through all the information out there 
            and find what is actually true and relevant. That's where we come in. Our team of modern monkeys works 
            tirelessly to bring you the facts, without any spin or agenda. We believe that knowledge is power, and 
            it's our mission to empower you with the information you need to make informed decisions.
            </p>
            </div>
            <div className={styles.linkRow}>
            <Link href='/blogs'>
                <p className={styles.link}>All posts</p>
              </Link>
              <Link href='https://medium.com/@smith7t'>
                <p className={styles.link}>Medium</p>
              </Link>
              <Link href='/about'>
                <p className={styles.link}>Twitter</p>
              </Link>
              <Link href='/about'>
                <p className={styles.link}>Instagram</p>
              </Link>
              <Link href='/about'>
                <p className={styles.link}>Dev</p>
              </Link>
            </div>
          </div>
          
        </div>
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
        <button onClick={loadMorePosts} className={styles.button}>
          Load more
        </button> 
        <div className={styles.ServiceArea}>
            <div className={styles.ServiceAreaColLeft}>
              <div className={styles.serviceHeader}>For the modern monkey</div>
            <div className={raleway.className}>
            </div>
          </div>
          <div className={styles.ServiceAreaCol}>
            <MeetMe />
          </div>
        </div>
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
