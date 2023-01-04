import MeetMe from '../components/MeetMe.js';
import Link from 'next/link';
import PostItem from '../components/PostItem';
import styles from '../styles/Services.module.css';
import Meta from '../components/Meta';
import { useState, useEffect } from 'react';
import { getPosts } from '../scripts/utils.js';
import { Raleway } from '@next/font/google'
import { motion } from 'framer-motion'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Modal } from 'antd';
import { Button, Checkbox, Form, Input, Space } from 'antd';

const raleway = Raleway({ weights: [400, 500, 600, 700], subsets: ['latin'] })

const Home = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [visible, setVisible] = useState(false);

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
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ overflow: 'hidden'}}>
      <Modal title="Contact the knowledge shak" okText='Send' open={visible} onCancel={() => setVisible(false)}>
      <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 18,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="inquiry" name="message">
        <Input.TextArea />
      </Form.Item>
    </Form>
      </Modal>
      <Meta title='PressBlog - Your one stop blog for anything React Native' />
      <div className={styles.mainPageHeader}>
            <div className={raleway.className}>
              <h1 className={styles.title}>Modern copywriting and content creation</h1>
            </div>
            <div className={raleway.className}>
                <p className={styles.desc}>
                    The Knowledge Shak offers professional
                    copywriting and content creation services. Our team of experienced writers can craft compelling and engaging
                    content for your website, blog, or marketing materials. We specialize in creating SEO-friendly content that 
                    will help your business or brand stand out online. Whether you need website copy, blog posts, social media content, or something else entirely, we have the skills and expertise to deliver high-quality content that meets your needs. 
                    Contact us today to learn more about our content creation services and how we can help you reach your audience. View more details below, our contact us and get a custom quote.
                </p>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={() => setVisible(true)}>
                Contact us
              </button>
              <button className={styles.button}>
                  View reviews
              </button>
            </div>
      </div>
      <div className={styles.ServiceArea}>
            <div className={styles.ServiceAreaColLeft}>
              <div className={styles.serviceHeader}>Copywriting</div>
              <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_mghrk3kq.json"
            style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>
            <div className={raleway.className}>
            <p className={styles.desc}>
            Our team of experienced writers is dedicated to crafting compelling and engaging copy that speaks to your audience and helps you stand out from the competition. But what sets us apart from other copywriting services?
            First and foremost, we use AI-powered tools to ensure that our content is error-free and grammatically correct. We understand that proper grammar and spelling are crucial for building trust and credibility with your audience, and our AI-assisted proofreading helps us deliver the best possible content.
            In addition to being error-free, our content is also written in proper English. Whether you&apos;re targeting a global or a local audience, we have the language skills and cultural knowledge to create content that resonates with your readers.
            But it&apos;s not just about the technical aspects of writing. At The Knowledge Shak, we also understand the importance of creating content that is engaging and informative. Our writers are experts at developing ideas and structuring content that is easy to read and informative. We take the time to understand your business, your goals, and your audience, so we can create content that truly speaks to them.
            So if you&apos;re in need of high-quality, professional copywriting services, look no further than The Knowledge Shak. Contact us today to learn more about how we can help you reach your audience and achieve your goals.
            </p>
            </div>
          </div>
          <div className={styles.ServiceAreaCol}>
          
          </div>
      
        </div>
        <div className={styles.ServiceArea}>
            <div className={styles.ServiceAreaColLeft}>
              <div className={styles.serviceHeader}>Video and media creation</div>
              <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_zpz526tf.json"
            style={{ height: '300px', width: '300px' }}
            >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
            <div className={raleway.className}>
            <p className={styles.desc}>
            Our team of experienced videographers and editors are dedicated to creating high-quality videos that capture your brand&apos;s message and personality. We understand the importance of visually appealing and well-produced content, and we strive to create videos that will engage and inform your audience.
            What sets us apart from other video content providers? First and foremost, we use the latest video production equipment and techniques to ensure that our videos look professional and polished. From lighting and sound to camera angles and editing, we pay attention to the details to create videos that stand out.
            In addition to the technical aspects of video production, we also understand the importance of storytelling. Whether you&apos;re looking to create promotional videos, educational videos, or something else entirely, our team is skilled at developing ideas and crafting compelling narratives. We take the time to understand your business, your goals, and your audience, so we can create videos that truly speak to them.
            </p>
            </div>
          </div>
          <div className={styles.ServiceAreaCol}>
         
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
