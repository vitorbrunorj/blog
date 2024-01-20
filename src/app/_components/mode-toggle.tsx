'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { ThemeStatus } from './themeStatus'
import { useEffect, useState } from 'react'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  // Certifique-se de que o componente só seja renderizado no cliente
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex h-6 w-6 px-0 ml-2"
          aria-label="Modo de alternância"
        >
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-none">
        {theme === 'light' && (
          <DropdownMenuItem
            className=""
            onSelect={() => {
              setTheme('dark')
            }}
          >
            Dark Mode
          </DropdownMenuItem>
        )}
        {theme === 'dark' && (
          <DropdownMenuItem
            className=" "
            onSelect={() => {
              setTheme('light')
            }}
          >
            Light Mode
          </DropdownMenuItem>
        )}
        {theme === 'system' && (
          <DropdownMenuItem
            className=" "
            onSelect={() => {
              setTheme('light')
            }}
          >
            Light Mode
          </DropdownMenuItem>
        )}
        {theme === 'system' && (
          <DropdownMenuItem
            className=" "
            onSelect={() => {
              setTheme('dark')
            }}
          >
            Dark Mode
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
      <ThemeStatus />
    </DropdownMenu>
  )
}
