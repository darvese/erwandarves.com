import * as React from 'react'
import Link from '@/components/link'
import SvgIcon, { githubIcon, linkedinIcon, stackoverflowIcon } from '@/components/svg'

interface FooterLinkProps {
  href: string
  label: string
}

const FooterLisItem: React.FunctionComponent<FooterLinkProps> = ({ children, href, label }) => (
  <li className='p-4'>
    <Link
      href={href}
      className='flex text-gray-800 focus-outline hover:text-neon-blue dark:text-gray-400 dark:hover:text-green'
      label={label}
      external
    >
      {children}
    </Link>
  </li>
)

const Footer = () => {
  const currentYear = new Date().getUTCFullYear()

  return (
    <footer className='flex flex-col justify-center items-center w-full max-w-3xl mx-auto p-4'>
      <ul className='flex items-center'>
        <FooterLisItem href='https://www.github.com/darvese' label='GitHub'>
          <SvgIcon className='w-8 h-8' d={githubIcon} title='GitHub logo' viewBox='0 0 32 32' />
        </FooterLisItem>
        <FooterLisItem href='https://stackoverflow.com/users/16951254/edarv' label='Stack Overflow'>
          <SvgIcon className='w-8 h-8' d={stackoverflowIcon} title='Stack Overflow logo' viewBox='-5 -4 32 32' />
        </FooterLisItem>
        <FooterLisItem href='https://www.linkedin.com/in/erwan-darves' label='LinkedIn'>
          <SvgIcon className='w-8 h-8' d={linkedinIcon} title='LinkedIn logo' viewBox='0 0 32 32' />
        </FooterLisItem>
      </ul>
      <p className='text-center text-sm'>Erwan Darves © {currentYear}</p>
    </footer>
  )
}

export default Footer
