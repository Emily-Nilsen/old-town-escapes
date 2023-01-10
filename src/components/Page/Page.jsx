import Head from 'next/head'

import { MainMenu } from '../MainMenu/MainMenu'
import { BlockRenderer } from '../BlockRenderer/BlockRenderer'
import { FooterMenu } from '../FooterMenu'

export const Page = (props) => {
  return (
    <>
      <Head>
        <title>Old Town Escapes - Discover the magic</title>
        <meta
          name="description"
          content="Experience the magic and charm of Europe's Historic Towns."
        />
      </Head>
      <main>
        <MainMenu
          items={props.mainMenuItems}
          callToActionLabel={props.callToActionLabel}
          callToActionDestination={props.callToActionDestination}
        />
        <BlockRenderer blocks={props.blocks} />
        <FooterMenu items={props.mainMenuItems} />
      </main>
    </>
  )
}
