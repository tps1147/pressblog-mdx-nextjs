import Head from 'next/head'
import { React, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { Button, Drawer } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai'
import { Raleway } from '@next/font/google'

const raleway = Raleway({ weights: [400, 500, 600, 700], subsets: ['latin'] })

export default function Nav() {

    const [visible, setVisible] = useState(false);


      const showDrawer = () => {
        setVisible(true);
      };
      const onClose = () => {
        setVisible(false);
        };
        const myLoader = ({ src, width, quality }) => {
            return `${src}?w=${width}&q=${quality || 75}`
            }
      
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={raleway.className}>
                <ul className={styles.navRight}>
                    <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <Image src="/shaklogo.png" alt="logo" width={80} loader={myLoader} height={70} className={styles.logoImage} />
                    <li className={styles.navItem}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="https://siteppl.com">Site ppl</Link>
                    </li>
                </ul>
                </div>
                <div className={styles.navCollapsed}>
                <AiOutlineMenu onClick={showDrawer} className={styles.menuIcon} />
                <img src="/shaklogo.png" alt="logo" width={80} height={70} />
                    <Drawer
                        placement="right"   
                        closable={false}
                        onClose={onClose}
                        open={visible}
                        key="right"
                        >
                        <ul className={styles.navDrawer}>
                            <li className={styles.navItem}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/services">Services</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/photos">Photos</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href="/reviews">Reviews</Link>
                            </li>
                        </ul>
                    </Drawer>
                </div>
 
            </div>
        </div>
    )
}