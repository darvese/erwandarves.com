import React, { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'i18n'

export enum I18nEnum {
  fr = 'fr',
  EN = 'en',
}

interface II18nContext {
  toggleI18n: () => void
  i18n: I18nEnum
}

const I18nContext = createContext<II18nContext>({
  i18n: I18nEnum.EN,
  toggleI18n: undefined,
})

interface II18nProvider {}

export const useI18n = () => useContext<II18nContext>(I18nContext)

const getUntoggledI18n = (i18n: I18nEnum) => {
  return i18n === I18nEnum.EN ? I18nEnum.fr : I18nEnum.EN
}

export const I18nProvider: React.FunctionComponent<II18nProvider> = ({ children }) => {
  const [i18n, setI18n] = useState(() => {
    if (typeof window === 'undefined') {
      return undefined
    }
    const storedI18n = window.localStorage.getItem(STORAGE_KEY)
    return (storedI18n as I18nEnum) || I18nEnum.EN
  })

  const toggleI18n = () => setI18n(getUntoggledI18n(i18n))

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, i18n)
    document.documentElement.classList.add(i18n)
    document.documentElement.classList.remove(getUntoggledI18n(i18n))
  }, [i18n])

  return <I18nContext.Provider value={{ toggleI18n, i18n }}>{children}</I18nContext.Provider>
}
