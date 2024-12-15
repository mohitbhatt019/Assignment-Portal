// app/layout.js
import './globals.css';
import Footer from "./components/Footer";
import { AuthProvider } from './context/AuthContext';
import Navbar from "./components/Navbar";  // Move Navbar import to the top

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      {/* Bootstrap CSS CDN */}
      <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-pzjw8f+ua7Kw1TIq0s8FqFJjiGYxFeFTN5DX0oR6hVyu7rr5q5aBhI4s1e26j9s0"
            crossorigin="anonymous"
          />
      </head>
      <body className="bg-gray-100">
        
        <AuthProvider> {/* Wrap the entire layout in AuthProvider */}
          <Navbar />
          {children}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
