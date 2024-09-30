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
    locale: "en_US", // corrected locale formatting
    url: "https://jamorweb.netlify.app/",
    siteName: "JamorTech",
    images: [
      {
        url: "/assets/images/og-image.jpg", // path to your OpenGraph image
        width: 1200, // recommended width
        height: 630,  // recommended height
        alt: "JamorTech - Pathway to Tech Careers", // alt text for accessibility
      },
    ],
  },
  twitter: { 
    card: "summary_large_image", // this ensures your image will display large on Twitter
    title: "Welcome to JamorTech - Your Pathway to Tech Careers",
    description: "Join JamorTech to kickstart your tech career with our internship programs.",
    images: ["/assets/images/og-image.jpg"], // also use the same OpenGraph image for Twitter
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
