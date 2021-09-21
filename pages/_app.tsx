import '@/styles/app.css'
import { ThemeProvider } from '@/contexts/theme'
import { I18nProvider } from '@/contexts/i18n'
import Header from '@/components/header'
import Footer from '@/components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </I18nProvider>
    </ThemeProvider>
  )
}

export default MyApp
