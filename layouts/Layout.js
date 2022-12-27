import Header from '../components/Header';
import Nav from '../components/Nav';
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {/* <main className='max-width-container' style={{ padding: '50px 30px' }}> */}
      <main className='max-width-container' style={{ padding: '50px 30px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
