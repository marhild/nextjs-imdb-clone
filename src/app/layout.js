import './globals.css'
import Header from '@/components/Header'
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          <Navbar />

          {/* SearchBox */}

          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
