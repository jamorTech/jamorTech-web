import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Welcome to JamorTech - Your Pathway to Tech Careers",
  },
  description: "Join JamorTech to kickstart your tech career with our internship programs.",
  openGraph: {
    title: "Welcome to JamorTech - Your Pathway to Tech Careers",
    description: "Join JamorTech to kickstart your tech career with our internship programs.",
    type: "website",
    locale: "en_Us",
    url: "https://jamorweb.netlify.app/",
    siteName: "JamorTech"
  },
  twitter: { 
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div style={{minHeight: "80vh"}}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
