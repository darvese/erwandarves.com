import * as React from 'react'
import Head from 'next/head'
import SkillItem from '@/components/skill-item'
import TimelineItem from '@/components/timeline-item'
import Link from '@/components/link'
import {
  cssIcon,
  cypressContent,
  cypressText,
  htmlIcon,
  javascriptIcon,
  nextjsIcon,
  nodejsIcon,
  reactIcon,
  tailwindIcon,
  typescriptIcon,
  webpackInner,
  webpackOuter,
} from '@/components/svg'
import { ThemeEnum, useTheme } from '@/contexts/theme'

const HomePage = () => {
  const sectionClassName = 'flex flex-col px-4 tablet:px-8'
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <link rel='canonical' href='https://erwandarves.com' />
      </Head>
      <main className='grid-wrapper min-h-content'>
        <h1 className='px-4 tablet:px-8'>
          Hi, I&apos;m <span className='inline-block'>Erwan Darves</span>
        </h1>
        <section className={sectionClassName} aria-label='Summary'>
          <p>
            I&apos;m a <strong>software engineer</strong> specialized in <strong>Frontend Web developement</strong>.
          </p>
          <p>
            I live in France, where I work as a Software architect for{' '}
            <Link className='focus-outline' href='https://bouyguestelecom.fr' external>
              Bouygues Telecom
            </Link>
            .
          </p>
          <p>
            {'My main technology is '}
            <strong>React.js</strong>
            {", and I've been working with it for 3 years now."}
          </p>
        </section>
        <section className={sectionClassName} aria-labelledby='tech-skills'>
          <h2 id='tech-skills'>Tech Skills</h2>
          <p>Here are some of the technologies and tools I use in my projects:</p>
          <ul className='flex flex-wrap tablet:px-4'>
            <SkillItem
              hoverClassName='group-hover:text-[#F0DB4F]'
              label='JavaScript'
              iconProps={{
                title: 'JavaScript logo',
                d: javascriptIcon,
                viewBox: '0 0 50 50',
                hidden: true,
              }}
            />
            <SkillItem
              hoverClassName='group-hover:text-[#007ACC]'
              label='TypeScript'
              iconProps={{
                title: 'TypeScript logo',
                d: typescriptIcon,
                viewBox: '0 0 50 50',
                hidden: true,
              }}
            />
            <SkillItem
              hoverClassName='group-hover:text-[#E34C26]'
              label='HTML'
              iconProps={{
                title: 'HTML logo',
                d: htmlIcon,
                viewBox: '0 0 50 50',
                hidden: true,
              }}
            />
            <SkillItem
              hoverClassName='group-hover:text-[#2965F1]'
              label='CSS'
              iconProps={{
                title: 'CSS logo',
                d: cssIcon,
                viewBox: '0 0 128 128',
                hidden: true,
              }}
            />
            <SkillItem
              hoverClassName='group-hover:text-[#61DBFB]'
              label='React.js'
              iconProps={{
                title: 'React.js logo',
                d: reactIcon,
                viewBox: '0 0 50 50',
                hidden: true,
              }}
            />
            <SkillItem
              hoverClassName='group-hover:text-[#3C873A]'
              label='Node.js'
              iconProps={{
                title: 'Node.js logo',
                d: nodejsIcon,
                viewBox: '0 0 32 32',
                hidden: true,
              }}
            />
            <SkillItem
              classNames='mt-2'
              hoverClassName='group-hover:text-[#1c78c0]'
              label='Webpack'
              iconComplexProps={{
                title: 'Webpack logo',
                dContent: [webpackInner, webpackOuter],
                strokes: ['', ''],
                fills: ['', ''],
                viewBox: '0 0 774 875.7',
                hidden: true,
              }}
              mt-2
            />
            <SkillItem
              hoverClassName='group-hover:text-[#5C5C5E]'
              label='Cypress.io'
              iconComplexProps={{
                title: 'Cypress.io logo',
                dContent: [cypressContent, cypressText],
                strokes: ['', ''],
                fills: ['', theme === ThemeEnum.LIGHT ? 'white' : '#0b0d24'],
                viewBox: '0 0 256 256',
                hidden: true,
              }}
            />
            <SkillItem
              hoverClassName='group-hover:text-[#06B6D4]'
              label='TailwindCSS'
              iconProps={{
                title: 'Tailwind CSS logo',
                d: tailwindIcon,
                viewBox: '0 0 64 64',
                hidden: true,
              }}
            />
            <SkillItem
              hoverClassName='group-hover:text-gray-500'
              label='Next.js'
              iconProps={{
                title: 'Next.js logo',
                d: nextjsIcon,
                viewBox: '0 0 48 48',
                hidden: true,
              }}
            />
          </ul>
        </section>
        <section className={sectionClassName} aria-labelledby='timeline'>
          <h2 id='timeline'>Work Experience</h2>
          <ul>
            <TimelineItem current date='2020-08-17' title='Software Architect at Bouygues Telecom'>
              <p>
                {"Challenged and improved the technical stack of the site's "}
                search engine .
              </p>
              <p>Became the lead developer on the search engine.</p>
              <p>{"Deployed the company's first Micro-Frontend application in production."}</p>
              <p>Assisted in the implementation of the Micro-Frontend architecture on the site.</p>
            </TimelineItem>
            <TimelineItem dateEnd='2020-08-10' date='2020-02-10' title='Software Engineer at Bouygues Telecom'>
              <p>
                Helped in the design and development of a software and technical architecture based on Kubernetes and
                Micro-Frontends.
              </p>
              <p>Implemented a Server-Side Rendering solution in a Micro-Frontend context.</p>
              <p>Developed a React Micro-Frontend application generator similar to Create React App.</p>
            </TimelineItem>
            <TimelineItem dateEnd='2019-01-18' date='2018-09-18' title='Frontend Web Developper at Bouygues Telecom'>
              <p>
                Created and designed an Angular / Typescript internal Web application, for BPMN modeling, with
                authentification and roles.
              </p>
            </TimelineItem>
            <TimelineItem dateEnd='2017-07-20' date='2017-05-20' title='CMS Developper at Netrock'>
              <p>Designed and built an E-Commerce Website using Wordpress and Woo Commerce.</p>
            </TimelineItem>
          </ul>
          <h2 id='timeline'>Education</h2>
          <ul>
            <TimelineItem dateEnd='2020-08-10' date='2015-09-01' title='EPITA (Master)'>
              <p>
                Web Development, 1-year projects (FullStack entrepreneurial project, FullStack Web Application for a
                company)
              </p>
              <p>Algorithms (Graph, Linked list, Binary tree)</p>
              <p>C C++ projects (Recreating standard C library, compiler, interpreter, HTTP server)</p>
            </TimelineItem>
          </ul>
        </section>
        <section className={sectionClassName} aria-labelledby='contact'>
          <h2 id='contact'>Contact</h2>
          <p>
            You can contact me by{' '}
            <Link className='focus-outline' href='mailto:erwan.darves@gmail.com' external>
              email
            </Link>
            . You can also check out my social media presence following the links below.
          </p>
        </section>
      </main>
    </>
  )
}

export default HomePage
