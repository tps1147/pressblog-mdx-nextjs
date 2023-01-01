import Header from '../components/Header';
import Nav from '../components/Nav';
import remarkGfm from 'remark-gfm'



const Layout = ({ children }) => {
  return (
    <div>
      {/* <main className='max-width-container' style={{ padding: '50px 30px' }}> */}
      <main className='max-width-container' style={{ padding: '0px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
