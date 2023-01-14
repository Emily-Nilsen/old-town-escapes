import { getTextAlign } from '@/utils/fonts'
import { relativeToAbsoluteUrls } from '@/utils/relativeToAbsoluteUrls'

export const Paragraph = ({ textAlign = 'left', content, textColor }) => {
  return (
    <p
      className={`max-w-md leading-relaxed ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  )
}
