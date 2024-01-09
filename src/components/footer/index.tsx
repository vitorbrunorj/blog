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
          <div className="container px-2 py-3 item-center">
            <nav className="flex justify-between text-white h-40">
              <section className="flex flex-col items-center justify-center">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Keyko Terapias logo"
                    width={166}
                    height={50}
                    className="cursor-pointer"
                  />
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=5521980943935&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="pt-2 tracking-wide text-xs sm:text-sm hover:scale-105 hover:fon text-center ">
                    Tel: (21) 98094-3965
                  </p>
                </a>
                <p className="py-2 text-xs sm:text-sm hover:scale-105  text-center">
                  <a href="mailto:elakeikoyamada@gmail.com">
                    elakeikoyamada@gmail.com
                  </a>
                </p>
                <a
                  href="https://www.google.com/maps/dir//r.+visc.+de+piraj%C3%A1,+572+-+6+andar+-+ipanema,+rio+de+janeiro+-+rj,+22410-002+keyko+terapia/@-22.9726455,-43.2124974,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9bd5e5c19d28d5:0x6bb43b2960152aae!2m2!1d-43.2120193!2d-22.9834866?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <address className="text-xs sm:text-sm hover:scale-105  text-center">
                    <p>Rua Visc. de Pirajá, 572 - 6º andar</p>
                    <p>Ipanema, Rio de Janeiro - RJ</p>
                  </address>
                </a>
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
          <p>© 2024 Keyko Terapias - Created by Vitor Bruno </p>
        </div>
      </div>
    </>
  )
}

function SiteLinks() {
  return (
    <div className="hidden sm:flex flex-col overflow-hidden">
      <h2 className="font-heading tracking-widest">Site</h2>
      <ul className="px-1 py-1 text-xs sm:text-sm font-light tracking-wide flex-col items-center flex-grow space-y-1">
        <li className="transform transition-transform duration-200 hover:text-secondary hover:scale-110">
          <ActiveLinkFooter href="/">Home</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200 hover:text-secondary hover:scale-110">
          <ActiveLinkFooter href="/sobre">Sobre</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200 hover:text-secondary hover:scale-110">
          <ActiveLinkFooter href="/servicos">Serviços</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200 hover:text-secondary hover:scale-110">
          <ActiveLinkFooter href="/blog">Blog</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200 hover:text-secondary hover:scale-110">
          <ActiveLinkFooter href="/contatos">Contatos</ActiveLinkFooter>
        </li>
      </ul>
    </div>
  )
}

function SocialLinks() {
  return (
    <div>
      <h2 className="font-heading tracking-widest text-center">Siga-nos</h2>
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
            href="mailto:elakeikoyamada@gmail.com"
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
