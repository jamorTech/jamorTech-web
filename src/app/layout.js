import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

  export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://jamorweb.netlify.app"), // Base URL of your site
    title: {
      default: "Welcome to JamorTech - Your Pathway to Tech Careers",
    },
    description: "Join JamorTech to kickstart your tech career with our internship programs.",
    openGraph: {
      title: "Welcome to JamorTech - Your Pathway to Tech Careers",
      description: "Join JamorTech to kickstart your tech career with our internship programs.",
      type: "website",
      locale: "en_US",
      url: "https://jamorweb.netlify.app",
      siteName: "JamorTech",
      // images: "assets/images/og-image.jpg"
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/react-quiz-app-5507a.appspot.com/o/og-image.jpg?alt=media&token=b55b609c-477b-4c3a-93a1-ddf81f0f6e02", // The relative path to the image
          width: 1200,
          height: 630,
          alt: "JamorTech - Pathway to Tech Careers",
        },
      ],
    },
    twitter: { 
      card: "summary_large_image",
      title: "Welcome to JamorTech - Your Pathway to Tech Careers",
      description: "Join JamorTech to kickstart your tech career with our internship programs.",
      images: ["https://firebasestorage.googleapis.com/v0/b/react-quiz-app-5507a.appspot.com/o/og-image.jpg?alt=media&token=b55b609c-477b-4c3a-93a1-ddf81f0f6e02"], // The same relative path for Twitter image
    },
  };
  


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div style={{minHeight: "40vh"}}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
