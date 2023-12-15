'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode
}

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const pathname = usePathname()

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const isActive = pathname === href.toString()

  return (
    <>
      <Link
        href={href}
        className={`${
          isActive
            ? 'text-secondary font-semibold underline-active shadow-lg transform transition-transform duration-200 hover:scale-110'
            : 'text-white'
        } `}
        {...rest}
      >
        {children}
      </Link>
    </>
  )
}
