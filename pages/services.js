import { useRouter } from 'next/router'
import styles from '../styles/Services.module.css'


export default function Blog({}) {
    console.log('main blog page')
    return (
        <div className={styles.layoutFormat}>
            <h1>Services</h1>
        </div>
    )
}
