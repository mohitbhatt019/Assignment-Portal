import './globals.css';
import Footer from "./components/Footer";
import { AuthProvider } from './context/AuthContext';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import SessionWrapper from './components/SessionWrapper';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <link rel="preload" href="/images/ass-1.jpg" as="image" />
      <link rel="preload" href="/images/ass-2.jpg" as="image" />
      <link rel="preload" href="/images/ass-3.jpg" as="image" />
      <link rel="preload" href="/images/ass-4.jpg" as="image" />
      <body className="bg-gray-100 flex flex-col min-h-screen">
        <AuthProvider>
      <SessionWrapper>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </SessionWrapper>
        </AuthProvider>

        <Footer />
      </body>
    </html>
  );
}
