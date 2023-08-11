import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Layout;
