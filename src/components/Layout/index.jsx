import Footer from '@/components/UI/Footer'
import Header from '@/components/UI/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
