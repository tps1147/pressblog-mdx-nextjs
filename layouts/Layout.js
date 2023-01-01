import Header from '../components/Header';
import Nav from '../components/Nav';
import remarkGfm from 'remark-gfm'
import styles from '../styles/Home.module.css';



const Layout = ({ children }) => {
  console.log('Layout.js: children = ', children);
  return (
    <div>
      <Nav />
      {/* <main className='max-width-container' style={{ padding: '50px 30px' }}> */}
      <main className={styles.layoutContainer} style={{ padding: '0px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
