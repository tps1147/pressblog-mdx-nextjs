import '../styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';
import Layout from '../layouts/Layout';
import remarkGfm from 'remark-gfm'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'


function MyApp({ Component, pageProps }) {
  const [currentRoute, setCurrentRoute] = useState('')
  const [loading, setLoading] = useState(true)
 const router = useRouter()

  return (
    <AnimatePresence 
    initial={true}
    mode="wait"
    onExitComplete={() => window.scrollTo(0, 0)}>
    <motion.div
    key={router.route}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <MDXProvider components={MDXComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
    </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
