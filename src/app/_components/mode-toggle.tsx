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

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

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
        <DropdownMenuItem
          className="hidden"
          onSelect={() => {
            setTheme('system')
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
      <ThemeStatus />
    </DropdownMenu>
  )
}
