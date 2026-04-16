import Navbar from './Navbar';
import BottomNav from './BottomNav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow pb-16 md:pb-0">
        {children}
      </main>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Layout;
