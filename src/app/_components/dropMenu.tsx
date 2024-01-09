'use client'
import { FaBars } from 'react-icons/fa6'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const MyDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaBars className="text-4xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href="/">Home</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/sobre">Sobre</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/servicos">Serviços</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/blog">Blog</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/contatos">Contatos</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
