import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Khang Ngo - Web Developer Portfolio',
  description: "Hi, my name is Khang Ngo. I'm a web developer.",
  keywords: "web developer, persona 5, portfolio",
  authors: [{ name: "Khang Ngo" }],
  openGraph: {
    title: "K's Site",
    url: "/",
    images: ["/banner.avif"]
  },
  twitter: {
    title: "K's Site",
    description: "Hi, my name is Khang Ngo. I'm a web developer.",
    images: ["/banner.avif"],
    card: "K's Site"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      
      <body className="phantom-gradient font-persona">
        {children}
        
        {/* Custom Scrollbar */}
        <div id="custom-scrollbar-container">
          <div className="lightning-track"></div>
          <div className="scroll-indicator"></div>
          <div id="scrollbar-thumb">
            <div className="lightning-bolt">
              <div className="lightning-segment"></div>
              <div className="lightning-segment"></div>
              <div className="lightning-segment"></div>
              <div className="lightning-segment"></div>
              <div className="lightning-segment"></div>
            </div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
        
        {/* Client-side initialization scripts */}
        <Script id="client-scripts" strategy="afterInteractive">
          {`
            // Initialize any client-side code that requires window object
            // This will only run on the client side after the component is interactive
          `}
        </Script>
      </body>
    </html>
  )
}
