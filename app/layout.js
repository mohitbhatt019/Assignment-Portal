// app/layout.js
import './globals.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
