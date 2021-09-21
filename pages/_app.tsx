import '@/styles/app.css'
import { ThemeProvider } from '@/contexts/theme'
import { I18nProvider } from '@/contexts/i18n'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider><I18nProvider><Component {...pageProps} /></ I18nProvider></ThemeProvider>
}

export default MyApp
