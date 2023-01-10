import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

import OldTownLogo from '@/images/old-town-logo.png'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-stone-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  const NavLinks = () => {
    let [hoveredIndex, setHoveredIndex] = useState(null)

    return (items || []).map((item, index) => (
      <Link
        key={item.id}
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
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <span className="relative z-10">{item.label}</span>
        {!!item.subMenuItems?.length && (
          <div className="absolute left-0 top-full -mt-1.5 hidden w-max flex-col space-y-1 rounded-lg bg-white p-3 text-sm text-stone-600 transition delay-150 duration-300 ease-in-out group-hover:flex">
            {item.subMenuItems.map((subMenuItem) => (
              <div
                className="px-3 py-2 transition duration-300 ease-out rounded-lg hover:bg-amber-50 hover:text-stone-900"
                key={subMenuItem.id}
              >
                <Link href={subMenuItem.destination}>{subMenuItem.label}</Link>
              </div>
            ))}
          </div>
        )}
      </Link>
    ))
  }

  return (
    <header className="bg-amber-100">
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <div className="flex items-center">
              <Link href="/" aria-label="Home">
                <Image alt="logo" src={OldTownLogo} width={80} height={80} />
              </Link>
            </div>

            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-stone-900 p-2 hover:bg-stone-200/50 hover:stroke-stone-600 active:stroke-stone-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="w-6 h-6" />
                      ) : (
                        <MenuIcon className="w-6 h-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-stone-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 px-6 pt-32 pb-6 origin-top shadow-2xl rounded-b-2xl bg-amber-50 shadow-stone-900/20"
                        >
                          <div className="space-y-4">
                            {(items || []).map((item) => (
                              <MobileNavLink
                                href={item.destination}
                                key={item.id}
                              >
                                {item.label}
                                {!!item.subMenuItems?.length && (
                                  <div className="flex-col px-3 py-2 mx-3 mt-3 mb-6 space-y-1 overflow-hidden transition duration-300 ease-in-out delay-150 rounded-lg bg-t bg-white/70 text-stone-600 group-hover:flex">
                                    {item.subMenuItems.map((subMenuItem) => (
                                      <div
                                        className="px-3 py-2 transition duration-300 ease-out rounded-lg hover:bg-amber-50 hover:text-stone-900"
                                        key={subMenuItem.id}
                                      >
                                        <Link href={subMenuItem.destination}>
                                          {subMenuItem.label}
                                        </Link>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </MobileNavLink>
                            ))}
                          </div>
                          <div className="flex flex-col gap-4 mt-8">
                            <Link href={callToActionDestination}>
                              <Button className="w-full">
                                {callToActionLabel}
                              </Button>
                            </Link>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>

            <ButtonLink
              className="hidden lg:block"
              href={callToActionDestination}
            >
              {callToActionLabel}
            </ButtonLink>
          </div>
        </Container>
      </nav>
    </header>
  )
}
