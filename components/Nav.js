import Head from 'next/head'
import { React, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { Button, Drawer } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai'

export default function Nav() {

    const [visible, setVisible] = useState(false);


      const showDrawer = () => {
        setVisible(true);
      };
      const onClose = () => {
        setVisible(false);
        };
      
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.navLeft}>
                    <img src="/houseLogo.png" alt="logo" width={70} height={70} />
                </div>
                <div>
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
                    <li className={styles.navItem}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <div className={styles.navCollapsed}>
                <AiOutlineMenu onClick={showDrawer} className={styles.menuIcon} />
                    <Drawer
                        placement="right"   
                        closable={false}
                        onClose={onClose}
                        visible={visible}
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
        </div>
    )
}