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
import resources from '@/i18n'
import { useI18n } from '@/contexts/i18n'

const HomePage = () => {
  const sectionClassName = 'flex flex-col px-4 tablet:px-8'
  const { theme } = useTheme()
  const { i18n } = useI18n()

  return (
    <>
      <Head>
        <link rel='canonical' href='https://erwandarves.com' />
      </Head>
      <main className='grid-wrapper min-h-content'>
        <h1 className='px-4 tablet:px-8'>
          {resources[i18n]?.main?.greeting} <span className='inline-block'>Erwan Darves</span>
        </h1>
        <section className={sectionClassName} aria-label='Summary'>
          <p>{resources[i18n]?.main?.greetingText}</p>
          <p>
            {resources[i18n]?.main?.greetingCurrentWork}
            <Link className='focus-outline' href='https://bouyguestelecom.fr' external>
              Bouygues Telecom
            </Link>
            .
          </p>
          <p>{resources[i18n]?.main?.greetingTechnology}</p>
        </section>
        <section className={sectionClassName} aria-labelledby='tech-skills'>
          <h2 id='tech-skills'>{resources[i18n]?.main?.skillsTitle}</h2>
          <p>{resources[i18n]?.main?.skillsText}</p>
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
          <h2 id='timeline'>{resources[i18n]?.main?.workTitle}</h2>
          <ul>
            <TimelineItem current date='2020-08-17' title={resources[i18n]?.main?.job1Title}>
              <p>{resources[i18n]?.main?.job1Text1}</p>
              <p>{resources[i18n]?.main?.job1Text2}</p>
              <p>{resources[i18n]?.main?.job1Text3}</p>
              <p>{resources[i18n]?.main?.job1Text4}</p>
            </TimelineItem>
            <TimelineItem dateEnd='2020-08-10' date='2020-02-10' title={resources[i18n]?.main?.job2Title}>
              <p>{resources[i18n]?.main?.job2Text1}</p>
              <p>{resources[i18n]?.main?.job2Text2}</p>
              <p>{resources[i18n]?.main?.job2Text3}</p>
            </TimelineItem>
            <TimelineItem dateEnd='2019-01-18' date='2018-09-18' title={resources[i18n]?.main?.job3Title}>
              <p>{resources[i18n]?.main?.job3Text1}</p>
            </TimelineItem>
            <TimelineItem dateEnd='2017-07-20' date='2017-05-20' title={resources[i18n]?.main?.job4Title}>
              <p>{resources[i18n]?.main?.job4Text1}</p>
            </TimelineItem>
          </ul>
          <h2 id='timeline'>Education</h2>
          <ul>
            <TimelineItem dateEnd='2020-08-10' date='2015-09-01' title={resources[i18n]?.main?.epitaTitle}>
              <p>{resources[i18n]?.main?.epitaText1}</p>
              <p>{resources[i18n]?.main?.epitaText2}</p>
              <p>{resources[i18n]?.main?.epitaText3}</p>
            </TimelineItem>
          </ul>
        </section>
        <section className={sectionClassName} aria-labelledby='contact'>
          <h2 id='contact'>Contact</h2>
          <p>
            {resources[i18n]?.main?.contactText1}{' '}
            <Link className='focus-outline' href='mailto:erwan.darves@gmail.com' external>
              email
            </Link>
            {'. '}
            {resources[i18n]?.main?.contactText2}
          </p>
        </section>
      </main>
    </>
  )
}

export default HomePage
