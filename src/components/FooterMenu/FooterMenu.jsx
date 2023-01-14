import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import qrCode from '@/images/qr-code.svg'
import OldTownLogo from '@/images/old-town-escapes.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function FooterMenu({ items }) {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <footer className="border-t border-stone-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-stone-900">
              <Link href="/" aria-label="Home">
                <div className="flex items-center text-stone-900">
                  <Image alt="logo" src={OldTownLogo} width={70} height={70} />
                </div>
              </Link>
              <div className="ml-4">
                <p className="text-base font-semibold">Old Town Escapes</p>
                <p className="mt-1 text-sm">
                  Discover the magic of Europe’s historic towns.
                </p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              {(items || []).map((item, index) => (
                <div
                  className="group relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-stone-700 transition-colors delay-150 hover:text-stone-900 hover:delay-[0ms]"
                  key={item.id}
                >
                  <div>
                    <Link
                      href={item.destination}
                      className="group relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-stone-700 transition-colors delay-150 hover:text-stone-900 hover:delay-[0ms]"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <AnimatePresence>
                        {hoveredIndex === index && (
                          <motion.span
                            className="absolute inset-0 rounded-lg bg-amber-50"
                            layoutId="hoverBackground"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: { duration: 0.15 },
                            }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0.15, delay: 0.2 },
                            }}
                          />
                        )}
                      </AnimatePresence>
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </div>
                  {!!item.subMenuItems?.length && (
                    <div className="absolute left-0 bottom-full -mt-1.5 hidden w-max flex-col space-y-1 rounded-lg bg-amber-100 p-3 text-sm text-stone-600 transition delay-150 duration-300 ease-in-out group-hover:flex">
                      {item.subMenuItems.map((subMenuItem) => (
                        <div
                          className="rounded-lg px-3 py-2 transition duration-300 ease-out hover:bg-white hover:text-stone-900"
                          key={subMenuItem.id}
                        >
                          <Link href={subMenuItem.destination}>
                            {subMenuItem.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-stone-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-stone-300 transition-colors group-hover:stroke-rose-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-stone-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-stone-700">
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-stone-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="rose" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-stone-500 md:mt-0">
            &copy; Old Town Escapes {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
