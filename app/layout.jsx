import '@/assets/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import AuthProvider from '@/components/AuthProvider';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from '@/context/GlobalContext';

export const metadata = {
  title: 'Obroi Real Estate | Find The Perfect Rental',
  description: 'Find Your Dream Rental property',
  keywords: 'rental,find rentals,find properties',
};
function MainLayout({ children }) {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <NavBar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default MainLayout;
