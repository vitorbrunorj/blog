import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { FaYoutube } from 'react-icons/fa6'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { ActiveLinkFooter } from '../active-link-footer'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-primary ">
          <div className="container px-2 py-3 ">
            <nav className="flex justify-between text-white h-40 px-1">
              <section>
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Keyko Terapias logo"
                    width={166}
                    height={50}
                    className="cursor-pointer"
                  />
                </Link>

                <p
                  suppressHydrationWarning={true}
                  className=" pt-2 tracking-wide text-xs sm:text-sm"
                >
                  Tel: (21) 98094-3965
                </p>
                <p
                  suppressHydrationWarning={true}
                  className="py-2 text-xs sm:text-sm"
                >
                  exemplo@empresa.com
                </p>
                <address className="text-xs sm:text-sm">
                  {' '}
                  <p suppressHydrationWarning={true}>
                    Rua Visc. de Pirajá, 572 - 6º andar
                  </p>
                  <p suppressHydrationWarning={true}>
                    Ipanema, Rio de Janeiro - RJ
                  </p>
                </address>
              </section>
              <SiteLinks />
              <SocialLinks />
            </nav>
          </div>
        </div>
      </footer>

      <div className=" ">
        <div className="container flex items-center justify-center px-2 py-2 h-8 ">
          <hr />
          <p suppressHydrationWarning={true}>
            © 2023 Keyko Terapias - Created by Vitor Bruno{' '}
          </p>
        </div>
      </div>
    </>
  )
}

function SiteLinks() {
  return (
    <div className="hidden sm:flex flex-col ">
      <h2 className="font-heading tracking-widest">Site</h2>
      <ul className="py-1 text-xs sm:text-sm font-light tracking-wide flex-col items-center flex-grow space-y-1">
        <li className="transform transition-transform duration-200  hover:text-secondary hover:scale-110 hover:font-semibold">
          <ActiveLinkFooter href="/">Home</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary hover:scale-110 hover:font-semibold">
          <ActiveLinkFooter href="/sobre">Sobre</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary hover:scale-110 hover:font-semibold">
          <ActiveLinkFooter href="/servicos">Serviços</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary hover:scale-110 hover:font-semibold">
          <ActiveLinkFooter href="/blog">Blog</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary hover:scale-110 hover:font-semibold">
          <ActiveLinkFooter href="/contatos">Contatos</ActiveLinkFooter>
        </li>
      </ul>
    </div>
  )
}

function SocialLinks() {
  return (
    <div>
      <h2 className="font-heading tracking-widest">Siga-nos</h2>
      <ul className="flex py-2 bg-slate-50 p-3 space-x-2 rounded-full">
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
    </div>
  )
}
