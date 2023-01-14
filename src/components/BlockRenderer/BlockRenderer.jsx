import Image from 'next/image'
import { Cover } from '@/components/Cover'
import { Heading } from '@/components/Heading'
import { Paragraph } from '../Paragraph/Paragraph'
import { CallToActionButton } from '../CallToActionButton/CallToActionButton'
import { PropertySearch } from '../PropertySearch/PropertySearch'
import { PostTitle } from '../PostTitle/PostTitle'
import { theme } from '@/utils/theme'
import { Columns } from '../Columns'
import { Column } from '../Column/Column'
import { Container } from '../Container'

export const BlockRenderer = ({ blocks = [] }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'acf/propertysearch': {
        return <PropertySearch key={block.id} />
      }
      case 'acf/ctabutton': {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || '/'}
            align={block.attributes.data.align}
          />
        )
      }
      case 'core/paragraph': {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        )
      }
      case 'core/heading': {
        console.log('HEADING')
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        )
      }
      case 'core/post-title': {
        console.log('POST TITLE', block)
        return (
          <PostTitle
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            key={block.id}
          />
        )
      }
      case 'core/cover': {
        console.log('COVER BLOCK: ', block)
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      case 'core/columns': {
        console.log('COLUMNS: ', block)
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        )
      }
      case 'core/column': {
        return (
          <Column key={block.id} width={block.attributes.width}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        )
      }
      case 'core/block':
      case 'core/group': {
        return (
          <Container key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Container>
        )
      }
      case 'core/image': {
        return (
          <div
            key={block.id}
            className="relative w-full h-64 overflow-hidden rounded-xl md:h-full"
          >
            <Image
              key={block.id}
              src={block.attributes.url}
              width={block.attributes.width}
              height={block.attributes.height}
              alt={block.attributes.alt || 'Image'}
              fill={
                block.attributes.width && block.attributes.height ? true : true
              }
              className="object-cover"
            />
          </div>
        )
      }
      default: {
        console.log('UNKNOWN: ', block)
        return null
      }
    }
  })
}
