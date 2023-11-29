import { useTheme } from 'next-themes'

export function ThemeStatus() {
  const { theme } = useTheme()

  return <p className="px-1">{theme}</p>
}
