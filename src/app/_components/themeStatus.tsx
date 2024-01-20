/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import { useTheme } from 'next-themes'

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function ThemeStatus() {
  const { theme } = useTheme()

  return (
    <p className="px-2 font-heading tracking-widest text-sm ">
      {theme ? capitalizeFirstLetter(theme) : ''}
    </p>
  )
}
