import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://fairylegacycleaning.com'),
  title: {
    template: '%s | Fairy Legacy Cleaning',
    default: 'Fairy Legacy Cleaning | Professional Cleaning Services',
  },
  description:
    'Fairy Legacy Cleaning delivers impeccable residential, deep cleaning, move in/out, and Airbnb cleaning services. Premium, eco-friendly, 5-star rated.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fairylegacycleaning.com',
    siteName: 'Fairy Legacy Cleaning',
    title: 'Fairy Legacy Cleaning | Professional Cleaning Services',
    description:
      'Impeccable cleaning, unforgettable legacy. Premium residential, deep, move in/out, and Airbnb cleaning services. Eco-friendly. 5-Star rated.',
    images: [
      {
        url: '/img/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Fairy Legacy Cleaning — Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairy Legacy Cleaning | Professional Cleaning Services',
    description: 'Impeccable cleaning, unforgettable legacy.',
    images: ['/img/og-default.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
