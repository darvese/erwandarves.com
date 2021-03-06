import * as React from 'react'
import Head from 'next/head'
import Link from '@/components/link'

const Page404 = () => {
  return (
    <>
      <Head>
        <title>{`Page Not Found - Erwan Darves`}</title>
      </Head>
      <main className='grid-wrapper min-h-content'>
        <section className='flex flex-col items-center place-content-center px-4 tablet:px-8' aria-labelledby='404'>
          <h1 id='404'>Page Not Found</h1>
          <p>
            <Link className='focus-outline' href='/'>
              Home
            </Link>
          </p>
        </section>
      </main>
    </>
  )
}

export default Page404
