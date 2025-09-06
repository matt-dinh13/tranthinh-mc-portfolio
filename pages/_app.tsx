import type { AppProps } from 'next/app';
import '../src/app/globals.css';
import { LanguageProvider } from '../src/contexts/LanguageContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
