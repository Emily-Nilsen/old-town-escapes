import React from 'react'
import { getFontSizeForHeading, getTextAlign } from '@/utils/fonts'

export const Heading = ({ textAlign, content, level }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-md mb-4 leading-tight ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  })
  return tag
}
