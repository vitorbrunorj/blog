import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { ModeToggle } from '@/app/_components/mode-toggle'

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

      <section className="grid bg-slate-50">
        <div className="container">
          <div className="h-8 hidden lg:flex flex-wrap justify-between sticky top-0">
            <ul className="flex opacity-80 items-center space-x-2">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/your-facebook-page"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare
                    className="text-lg transition-all duration-200 hover:scale-125"
                    color="#3b5998"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/keykoterapias/"
                  aria-label="Instagram"
                >
                  <FaInstagramSquare
                    className="text-lg transition-all duration-200 hover:scale-125"
                    color="#E1306C"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send/?phone=5521980943935&text&type=phone_number&app_absent=0"
                  aria-label="Whatsapp"
                >
                  <FaWhatsappSquare
                    className="text-lg transition-all duration-200 hover:scale-125"
                    color="#25D366"
                    alt="Whatsapp"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.gmail.com/your-facebook-page"
                  aria-label="Gmail"
                >
                  <SiGmail
                    className="text-lg transition-all duration-200 hover:scale-125"
                    color="#D44638"
                    alt="Gmail"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.telegram.com/your-telegram-page"
                  aria-label="Telegram"
                >
                  <FaTelegram
                    className="text-lg transition-all duration-200 hover:scale-125"
                    color="#0088cc"
                    alt="Telegram"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@keikoterapiasintegrativas9086"
                  aria-label="Youtube"
                >
                  <FaYoutube
                    className="text-lg transition-all duration-200 hover:scale-125"
                    color="#FF0000"
                    alt="Youtube"
                  />
                </a>
              </li>
            </ul>

            <section className="sm:flex  text-xs font-light tracking-widest text-shadow items-center px-2 py-2 space-x-2">
              <div className="text-slate-500">
                <BsFillTelephoneFill />
              </div>
              <span className="text-slate-700">Telefone: (21) 98094-3965 </span>
            </section>

            <section className="hidden lg:flex  text-xs font-light tracking-wide text-shadow items-center px-2 space-x-2">
              {' '}
              <div className="text-slate-500 ">
                <FaLocationDot />
              </div>
              <span className="text-slate-700">
                R. Visc. de Pirajá, 572 - 6 andar - Ipanema, Rio de Janeiro -
                RJ, 22410-002
              </span>
            </section>
          </div>
        </div>
      </section>

      {/* Header Inferior */}

      <section className="grid text-white font-medium tracking-wider bg-primary">
        <div className="container mx-auto h-14 flex items-center justify-between px-2 py-2 sticky top-0">
          <div className="flex w-28 ">
            <Link href="/">
              <Image
                src={logo}
                alt="Keyko Terapias logo"
                width={136} // Adicione a largura aqui
                height={40} // Adicione a altura aqui
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="hidden sm:flex flex-grow justify-center px-2 space-x-5 font-heading tracking-widest">
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
              href="/servicos"
              className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110"
            >
              Serviços
            </Link>
            <Link
              href="/blog"
              className="transition ease-in-out duration-1200 hover:text-secondary hover:scale-110"
            >
              Blog
            </Link>
            <Link
              href="/contatos"
              className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110"
            >
              Contatos
            </Link>
          </div>
          <div className="flex flex-grow justify  text-xs px-2 space-x-5 font-heading justify-center sm:justify-start">
            <span className="flex items-center">
              <ModeToggle />
            </span>
          </div>

          <div className="sm:hidden py-1 px-1">
            <FaBars className="text-4xl" />
          </div>
        </div>
      </section>
    </header>
  )
}
