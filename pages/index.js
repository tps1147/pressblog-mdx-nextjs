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
import { BsMedium } from 'react-icons/bs';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaDev, FaHandHoldingUsd } from 'react-icons/fa';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const raleway = Raleway({ weights: [400, 500, 600, 700], subsets: ['latin'] })

const Home = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [activeFilter, setActiveFilter] = useState('All');

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };
  const filterPosts = (category) => {
    setActiveFilter(category);
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
  const lineToAnimate2 = '- Unbiased and thoroughly researched content - for the modern monkey.'

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08
      }
    }
  }
  const letter = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  return (
    <div style={{ overflow: 'hidden'}}>
      <Meta title='The Knowledge Shak - unbiased and througly research content' />
      <div className={styles.mainPageHeader}>
        <div className={styles.mainHeaderRow}>
          <div className={styles.mainHeaderColLeft}>
          {/* <Image src='/shaklogo.png' alt='logo' width={100} height={100} loader={myLoader} /> */}
            <div className={raleway.className}>
              <motion.h1
                className={styles.title}
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                {lineToAnimate.split('').map((char, index) => {
                  return (
                    <motion.span key={char + '-' + index} variants={letter}>
                      {char}
                    </motion.span>
                  )
                })}
              </motion.h1>
            </div>
            <div className={raleway.className}>
              <motion.p 
                className={styles.tagline}
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                {lineToAnimate2.split('').map((char, index) => {
                  return (
                    <motion.span key={char + '-' + index} variants={letter}>
                      {char}
                    </motion.span>
                  )
                })}
              </motion.p>
            </div>
            <div className={styles.linkRow}>
            <Link href='/blogs'>
                <p className={styles.link}>All posts</p>
              </Link>
              <Link href='https://medium.com/@smith7t'>
                
                <p className={styles.link}> <BsMedium className={styles.icon}  /> Medium</p>
              </Link>
              <Link href='/about'>
                <p className={styles.link}><AiOutlineTwitter className={styles.icon}/> Twitter</p>
              </Link>
              <Link href='/about'>
                <p className={styles.link}><AiOutlineInstagram className={styles.icon}/> Instagram</p>
              </Link>
              <Link href='/about'>
                <p className={styles.link}><FaDev className={styles.icon}/> Dev</p>
              </Link>
            </div>
          </div>
          
        </div>
        <div className={raleway.className}>
        {/*  */}
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/private_files/lf30_ymkcydpu.json"
          style={{ height: '100px', width: '300px' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
          <div className={styles.desc}>
            <div className={styles.descHeader}>Creating wealth through knowledge <FaHandHoldingUsd className={styles.iconMain}/> </div>
            
            <div className={styles.divider}/>
              <p>
                Welcome to The Knowledge Shak, where we provide true and unbiased content for the modern monkey. 
                In an era of endless noise, it can be overwhelming to sort through all the information out there 
                and find what is actually true and relevant. That's where we come in. Our team of modern monkeys works 
                tirelessly to bring you the facts, without any spin or agenda. We believe that <strong>knowledge is power</strong>, and 
                it's our mission to empower you with the information you need to make informed decisions.
              </p>
            </div>
          </div>
      </div>
      <div className={styles.mainFilter}>
        {/* <div className={styles.filterItem}></div> */}
          <button onClick={filterPosts.bind(this, 'All')} className={activeFilter === 'All' ? styles.activeFilter : styles.filterButton}>All</button>
          <button onClick={filterPosts.bind(this, 'Technology')} className={activeFilter === 'Technology' ? styles.activeFilter : styles.filterButton}>Technology</button>
          <button className={activeFilter === 'Business' ? styles.activeFilter : styles.filterButton}>Business</button>
          <button className={activeFilter === 'Politics' ? styles.activeFilter : styles.filterButton}>Politics</button>
          <button className={activeFilter === 'Sports' ? styles.activeFilter : styles.filterButton}>Sports</button>
          <button className={activeFilter === 'Entertainment' ? styles.activeFilter : styles.filterButton}>Entertainment</button>
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
