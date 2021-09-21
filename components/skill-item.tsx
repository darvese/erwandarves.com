import * as React from 'react'
import SvgIcon, { ComplexSvgIcon, IComplexSvgIcon, ISvgIcon } from '@/components/svg'

interface ISkillItem {
  hoverClassName: string
  label: string
  iconProps?: ISvgIcon
  iconComplexProps?: IComplexSvgIcon
  classNames?: string
}

const SkillItem = ({ hoverClassName, label, iconProps, iconComplexProps, classNames }: ISkillItem) => {
  const hoverClassNames = `transition-colors duration-200 ${hoverClassName} svg-skill-icon`
  const textClassName = `text-center mt-2 mb-0 ${hoverClassNames}`

  return (
    <li className={`${classNames} group flex flex-col flex-auto items-center mx-2 my-4 w-24`} aria-label={label}>
      {iconProps ? (
        <SvgIcon className={`${iconProps.className} ${hoverClassNames}`} {...iconProps} />
      ) : (
        <ComplexSvgIcon className={`${iconComplexProps.className} ${hoverClassNames}`} {...iconComplexProps} />
      )}
      <p className={textClassName}>{label}</p>
    </li>
  )
}

export default SkillItem
