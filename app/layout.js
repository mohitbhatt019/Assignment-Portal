import './globals.css';
import Footer from "./components/Footer";
import { AuthProvider } from './context/AuthContext';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <body className="bg-gray-100 flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
