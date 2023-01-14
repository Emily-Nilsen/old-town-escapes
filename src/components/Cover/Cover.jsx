import Image from 'next/image'
import { Container } from '@/components/Container'

export const Cover = ({ children, background }) => {
  return (
    <div className="relative min-h-[50vh] overflow-hidden bg-amber-100 py-20 text-white sm:py-32 lg:pb-32 xl:pb-36">
      <Image
        priority
        className="object-cover"
        fill
        alt="The beauty of Europe"
        src={background}
      />

      <Container>
        <div className="relative z-10">{children}</div>
      </Container>
    </div>
  )
}
