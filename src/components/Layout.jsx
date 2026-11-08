import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import ScrollManager from './ScrollManager';

/*
  The #site-header / #site-footer wrappers are kept from the original markup on purpose:
  they are the containing blocks the original CSS (e.g. the sticky header) was resolved against.
*/
export default function Layout() {
  return (
    <>
      <ScrollManager />
      <div id="site-header">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <div id="site-footer">
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
}
