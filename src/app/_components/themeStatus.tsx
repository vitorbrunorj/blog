'use client'
import { useTheme } from 'next-themes'

export function ThemeStatus() {
  const { theme } = useTheme()

  return <p className="px-1 font-heading tracking-widest text-sm ">{theme}</p>
}
