import * as React from 'react'

export const ENSvg = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30' width={40} height={20}>
      <clipPath id='prefix__a'>
        <path d='M0 0v30h60V0z' />
      </clipPath>
      <clipPath id='prefix__b'>
        <path d='M30 15h30v15zv15H0zH0V0zV0h30z' />
      </clipPath>
      <g clipPath='url(#prefix__a)'>
        <path d='M0 0v30h60V0z' fill='#012169' />
        <path d='M0 0l60 30m0-30L0 30' stroke='#fff' strokeWidth={6} />
        <path d='M0 0l60 30m0-30L0 30' clipPath='url(#prefix__b)' stroke='#C8102E' strokeWidth={4} />
        <path d='M30 0v30M0 15h60' stroke='#fff' strokeWidth={10} />
        <path d='M30 0v30M0 15h60' stroke='#C8102E' strokeWidth={6} />
      </g>
    </svg>
  )
}

export const FRSvg = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='144.5 696.5 300 200' width={40} height={20}>
      <switch>
        <g>
          <path fill='#ED2939' d='M144.5 696.5h300v200h-300z' />
          <path fill='#FFF' d='M144.5 696.5h200v200h-200z' />
          <path fill='#002395' d='M144.5 696.5h100v200h-100z' />
        </g>
      </switch>
    </svg>
  )
}
