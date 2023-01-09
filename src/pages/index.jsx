import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

import client from 'client'
import { gql } from '@apollo/client'
import { BlockRenderer } from '@/components/BlockRenderer'
import { cleanAndTransformBlocks } from '@/utils/cleanAndTransformBlocks'
import { mapMainMenuItems } from '@/utils/mapMainMenuItems'

export default function Home(props) {
  console.log('PROPS: ', props)
  return (
    <>
      <Head>
        <title>Old Town Escapes - Discover the magic</title>
        <meta
          name="description"
          content="Experience the magic and charm of Europe's Historic Towns."
        />
      </Head>
      <Header />
      <main>
        {/* <Hero /> */}
        <BlockRenderer blocks={props.blocks} />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}

        {/* <Reviews /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        pages {
          nodes {
            title
          }
        }
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
  })
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON)
  return {
    props: {
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      blocks,
    },
  }
}
