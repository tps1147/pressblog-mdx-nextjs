import { useRouter } from 'next/router'
import styles from '../styles/Contact.module.css'

export default function Blog({}) {
    console.log('main blog page')
    return (
        <div className={styles.layoutFormat}>
            <h1>Contact</h1>
        </div>
    )
}
