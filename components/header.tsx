import * as React from 'react'
import Image from 'next/image'
import Link from '@/components/link'
import dynamic from 'next/dynamic'

const ThemeToggleButton = dynamic(() => import('@/components/theme-toggle-button'), {
  ssr: false,
})

const I18nToggleButton = dynamic(() => import('@/components/i18n-toggle-buttons'), {
  ssr: false,
})

const Header = () => {
  return (
    <header className='sticky top-0 flex flex-row justify-between items-center w-full max-w-3xl mx-auto px-4 tablet:px-8 py-4 bg-white dark:bg-midnight'>
      <Link href='/' className='flex flex-row items-center focus-outline' label='erwandarves.com'>
        <Image
          alt='Erwan Darves'
          className='w-12 h-auto border-2 border-neon-blue dark:border-green rounded-full'
          src='/profile.jpg'
          width='48'
          height='48'
        />
        <span className='pl-3 text-neon-blue dark:text-green text-xl font-semibold'>Erwan Darves</span>
      </Link>
      <div className='flex p-2'>
        <I18nToggleButton />
        <ThemeToggleButton />
      </div>
    </header>
  )
}

export default Header
