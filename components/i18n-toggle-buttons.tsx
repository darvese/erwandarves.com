import * as React from 'react'
import { FRSvg, ENSvg } from '@/components/svg-flags'
import { useI18n, I18nEnum } from '@/contexts/i18n'

const I18nToggleButton = () => {
  const { i18n, toggleI18n } = useI18n()

  return (
    <button className='flex p-2 text-blue-400 hover:glow' onClick={toggleI18n} aria-label={i18n}>
      {i18n && (i18n === I18nEnum.EN ? <ENSvg /> : <FRSvg />)}
    </button>
  )
}

export default I18nToggleButton
