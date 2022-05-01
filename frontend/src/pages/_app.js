import App from "next/app"
import Head from "next/head"
import { createContext } from "react"
import { ThemeProvider } from "styled-components"
import Layout from '../components/layout'
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import GlobalStyle from '../styles/Global'
import theme from '../styles/theme'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global, sections } = pageProps
  console.log(global.attributes, sections)
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout
            sections={sections}
            logo={global.attributes.logo.data[0].attributes}
            footer={global.attributes.footer}
          >
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  

  const [globalRes, categoriesRes, sectionsRes] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
  ])
  // Pass the data to our page via props
  return { ...appProps, pageProps: {
      global: globalRes.data,
      categories: categoriesRes.data,
      sections: globalRes.data.attributes
        .sections.data.map(sec => ({
          title: sec.attributes.title,
          section_id: sec.attributes.section_id,
          type: sec.attributes.type,
          description: sec.attributes.description
        }))
    }
  }
}

export default MyApp
