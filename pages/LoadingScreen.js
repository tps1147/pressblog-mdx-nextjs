import { useRouter } from 'next/router'
import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'

export default function Loading({}) {
    console.log('main blog page')
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.layoutFormat}>
            <h1>Loading...</h1>
        </motion.div>
    )
}
