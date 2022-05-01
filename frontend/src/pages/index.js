import React from "react"
import Articles from "../components/articles"
import { Banner } from '../components'
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { useContext } from "react"
import { GlobalContext } from "../pages/_app"

const Home = ({ articles, homepage }) => {
  const { defaultSeo, logo } = useContext(GlobalContext)

  console.log(logo.data[1].attributes.url)
  return (
    <>
      <Seo seo={homepage.attributes.seo} />
      <Banner logo={logo.data[1].attributes.url} />
      <div className="uk-section">
        
        <div className="uk-container uk-container-large">
          <Articles articles={articles} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
