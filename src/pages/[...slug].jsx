import { gql } from '@apollo/client'
import client from 'client'
import { BlockRenderer } from '@/components/BlockRenderer'
import { cleanAndTransformBlocks } from '@/utils/cleanAndTransformBlocks'

export default function Page(props) {
  console.log('PAGE PROPS: ', props)
  return (
    <div>
      <BlockRenderer blocks={props.blocks} />
    </div>
  )
}

export const getStaticProps = async (context) => {
  console.log('CONTEXT: ', context)
  const uri = `/${context.params.slug.join('/')}/`
  console.log('URI: ', uri)
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        pages {
          nodes {
            title
          }
        }
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
    variables: { uri },
  })
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON)
  return {
    props: {
      title: data.nodeByUri.title,
      blocks,
    },
  }
}

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  })
  const paths = data.pages.nodes.map((page) => ({
    params: {
      slug: page.uri.substring(1, page.uri.length - 1).split('/'),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
