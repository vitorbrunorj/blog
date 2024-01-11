'use client'
import { FaBars } from 'react-icons/fa6'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { ActiveLinkMenu } from '../../components/active-link-menu'

export const MyDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaBars className="text-4xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem>
          <ActiveLinkMenu href="/">Home</ActiveLinkMenu>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ActiveLinkMenu href="/sobre">Sobre</ActiveLinkMenu>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ActiveLinkMenu href="/servicos">Serviços</ActiveLinkMenu>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ActiveLinkMenu href="/blog">Blog</ActiveLinkMenu>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ActiveLinkMenu href="/contatos">Contatos</ActiveLinkMenu>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
