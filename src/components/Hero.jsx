import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative min-h-[50vh] overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="absolute inset-0">
        <Image
          priority
          className="object-cover"
          fill
          alt="The Beauty of Europe"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1673034707/Old%20Town%20Escapes/AdobeStock_312248153_sj4lsd.jpg"
        />{' '}
      </div>
      <Container></Container>
    </div>
  )
}
