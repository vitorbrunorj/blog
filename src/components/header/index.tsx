import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'

import { FaBars, FaYoutube, FaTelegram, FaLocationDot } from 'react-icons/fa6'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'

export function Header() {
  return (
    <header>
      {/* Header superior */}
      <div className="grid bg-light ">
        <div className="container">
          <div className="h-r36px hidden sm:flex flex flex-wrap px-2 justify-around">
            <div className="flex opacity-80 items-center space-x-2 ">
              <Link href="https://www.facebook.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaFacebookSquare className="text-lg" color="#3b5998" />
              </Link>
              <Link href="https://www.instagram.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaInstagramSquare className="text-lg" color="#E1306C" />
              </Link>
              <Link href="https://www.whatsapp.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaWhatsappSquare className="text-lg" color="#25D366" />
              </Link>
              <Link href="https://www.gmail.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <SiGmail className="text-lg" color="#D44638" />
              </Link>

              <Link href="https://www.telegram.com/your-telegram-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaTelegram className="text-lg" color="#0088cc" />
              </Link>
              <Link href="https://www.youtube.com/your-youtube-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaYoutube className="text-lg" color="#FF0000" />
              </Link>
            </div>

            <div className="sm:flex text-black text-xs  font-light tracking-widest text-shadow items-center px-2 py-2 space-x-2">
              <div className="text-gray-600">
                <BsFillTelephoneFill />
              </div>
              <span>Telefone: (21) 98094-3965 </span>
            </div>

            <div className="hidden lg:flex text-black text-xs  font-light tracking-wide text-shadow items-center px-2 space-x-2">
              <div className="text-gray-600 ">
                <FaLocationDot />
              </div>
              <span>
                R. Visc. de Pirajá, 572 - 6 andar - Ipanema, Rio de Janeiro -
                RJ, 22410-002
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header Inferior */}

      <div className="grid text-white font-medium tracking-wider bg-primary sticky top-0">
        <div className="container h-r60px flex items-center justify-between px-2 py-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Keyko Terapias logo"
              width={136} // Adicione a largura aqui
              height={40} // Adicione a altura aqui
              className="cursor-pointer"
            />
          </Link>

          <div className="hidden sm:flex flex-grow justify-center space-x-8 font-heading tracking-widest">
            <Link
              href="/"
              className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110"
            >
              Sobre
            </Link>
            <Link
              href="/agendamento"
              className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110"
            >
              Agendamento
            </Link>
            <Link
              href="/servicos"
              className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110"
            >
              Serviços
            </Link>
            <Link
              href="/contatos"
              className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110"
            >
              Contatos
            </Link>
            <Link
              href="/blog"
              className="transition ease-in-out duration-1200 hover:text-secondary hover:scale-110"
            >
              Blog
            </Link>
          </div>

          <div className="sm:hidden py-1 px-1">
            <FaBars className="text-4xl" />
          </div>
        </div>
      </div>
    </header>
  )
}
