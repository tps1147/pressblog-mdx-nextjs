import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { AiTwotoneStar, AiOutlineMail, AiOutlinePhone, AiOutlineGooglePlus, AiOutlineFacebook, AiOutlineInstagram  } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
 // requires a loader






export default function Footer() {

    
    return (
      <>
        <div className={styles.footer}>
          <div className={styles.footerRow}>
            <div className={styles.footerColumn}>
              <h3>The Knowledge Shak</h3>
              <div className={styles.divider}/>
              <div className={styles.copyRow}>
                <p>&copy; Site ppl Co.</p>
                <p>terms & privacy</p>
                </div>
              </div>
              </div>
              <div className={styles.footerColumn}>
              <h2>Contact</h2>
                <p>create@siteppl.com</p>
                <div className={styles.socialsRow}>
                <AiOutlineGooglePlus className={styles.socialsIcon} />
                <AiOutlineFacebook className={styles.socialsIcon} />
                <AiOutlineInstagram className={styles.socialsIcon} />
                </div>
              </div>
        </div>
        </>
    )

}