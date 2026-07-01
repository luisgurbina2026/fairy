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
  metadataBase: new URL('https://fairylegacyclean.com'),
  title: {
    template: '%s | Fairy Legacy Clean',
    default: 'Fairy Legacy Clean | Professional Cleaning Services',
  },
  description:
    'Fairy Legacy Clean delivers impeccable residential, deep cleaning, move in/out, and Airbnb cleaning services. Premium, consistent, and photo-documented.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fairylegacyclean.com',
    siteName: 'Fairy Legacy Clean',
    title: 'Fairy Legacy Clean | Professional Cleaning Services',
    description:
      'Impeccable cleaning, unforgettable legacy. Premium residential, deep, move in/out, and Airbnb cleaning services. Photo-documented quality.',
    images: [
      {
        url: '/img/og/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Fairy Legacy Clean — Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairy Legacy Clean | Professional Cleaning Services',
    description: 'Impeccable cleaning, unforgettable legacy.',
    images: ['/img/og/og-home.jpg'],
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
