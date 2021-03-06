import * as React from 'react'
import { useTheme, ThemeEnum } from '@/contexts/theme'
import SvgIcon, { moonIcon, sunIcon } from '@/components/svg'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()
  const [label, icon, iconLabel] =
    theme === ThemeEnum.DARK ? ['Light mode', sunIcon, 'Sun icon'] : ['Dark mode', moonIcon, 'Moon icon']

  return (
    <button className='flex p-2 text-yellow-400 hover:glow' onClick={toggleTheme} aria-label={label}>
      <SvgIcon className='w-5' d={icon} title={iconLabel} viewBox='0 0 512 512' />
    </button>
  )
}

export default ThemeToggleButton
