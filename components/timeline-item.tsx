import { I18nEnum, useI18n } from '@/contexts/i18n'
import * as React from 'react'

type TimelineItemType = 'education' | 'travel' | 'work'

interface ITimelineItem {
  date: string
  title: string
  current?: boolean
  dateEnd?: string
}

const TimelineItem = ({ children, date, title, current, dateEnd }: React.PropsWithChildren<ITimelineItem>) => {
  const { i18n } = useI18n()

  const dateFormat = new Intl.DateTimeFormat(i18n === I18nEnum.FR ? 'fr-FR' : 'en-GB', {
    year: 'numeric',
    month: 'long',
  })
  const dateString = dateFormat.format(new Date(date))
  const dateEndString = dateEnd ? dateFormat.format(new Date(dateEnd)) : undefined

  return (
    <li className='flex flex-col'>
      <div className='flex items-center py-2'>
        <span className='border-2 rounded-full border-neon-blue dark:border-green w-4 h-4'></span>
        <time className='text-lg font-semibold px-4' dateTime={date}>
          {dateString}
          {current ? ' - Present' : ' - ' + dateEndString}
        </time>
      </div>
      <div className='flex flex-col pl-8 text-gray-800 dark:text-gray-400 relative -z-1 before:bg-gray-800 dark:before:bg-gray-400 before:h-full before:w-[2px] before:absolute before:left-[0.45em]'>
        <h3 className='text-text-midnight dark:text-gray-100'>{title}</h3>
        {children}
      </div>
    </li>
  )
}

export default TimelineItem
