import { PrivacyPolicy } from '@/components/Pages/PrivacyPolicy'
import SEO from '@/components/SEO'

export default function Privacy() {
  return (
    <>
      <SEO />
      <PrivacyPolicy />
    </>
  )
}

// export async function getServerSideProps(context) {
//   const urls = ['/posts']
//   const data = await fetchMultipleUrls(urls)

//   return {
//     props: {
//       data
//     }
//   }
// }
