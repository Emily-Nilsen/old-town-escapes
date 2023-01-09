import { Cover } from '@/components/Cover'
import { Heading } from '@/components/Heading'
import { Paragraph } from '../Paragraph/Paragraph'
import { theme } from '@/utils/theme'

export const BlockRenderer = ({ blocks = [] }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case 'core/paragraph': {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
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
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
        )
      }
      case 'core/cover': {
        console.log('BLOCK: ', block)
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      default:
        return null
    }
  })
}
