import * as React from 'react'
import NextLink from 'next/link'
import { useI18n } from '@/contexts/i18n'
import resources from '@/i18n'

interface LinkProps {
  className?: string
  external?: boolean
  href: string
  label?: string
}

const Link: React.FunctionComponent<LinkProps> = ({ children, className, external = false, href, label }) => {
  const { i18n } = useI18n()
  if (external) {
    return (
      <a href={href} className={className} aria-label={label} rel='noopener noreferrer' target='_blank'>
        {children}
        <span className='sr-only'>{resources[i18n]?.link?.newWindow}</span>
      </a>
    )
  }

  return (
    <NextLink href={href}>
      <a className={className} aria-label={label}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
