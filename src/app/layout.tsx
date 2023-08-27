import 'src/global.css';

// ----------------------------------------------------------------------

import Script from 'next/script';

import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';
import { LocalizationProvider } from 'src/locales';
import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';
import { NextAuthProvider } from 'src/components/AuthProvider/provider';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'RCA Capital',
  description: 'Descripción de RCA Capital pendiente',
  keywords: 'trading,learning,academy,profit,exchange,admin,capital,invest',
  themeColor: '#000000',
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <Script src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`} />
        <NextAuthProvider>
          <LocalizationProvider>
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </LocalizationProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
