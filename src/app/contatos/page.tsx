import Link from 'next/link'
import Image from 'next/image'
import onda from '../../public/onda.png'
import ondaDark from '../../public/ondaDark.png'
import banner5 from '../../public/banner5.png'
import { IoLogoWhatsapp } from 'react-icons/io'
import image6 from '../../public/image6.webp'

export default function Contato(): JSX.Element {
  return (
    <>
      <main>
        <section className="container3 bg-gradient-to-b from-primary to-white dark:bg-gradient-to-b dark:from-darkPrimary dark:to-neutral-300">
          <div className="bg-gradient-to-b from-primary to-white dark:bg-gradient-to-b dark:from-darkPrimary dark:to-neutral-300 min-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-2 relative">
            <div
              className="flex mt-10 sm:mt-16 items-center justify-center lg:justify-end lg:ml-auto mx-auto lg:mx-0 lg:-mt-16"
              style={{ maxWidth: '700px' }}
            >
              <h1 className="grid leading-snug text-slate-50 text-4xl sm:text-5xl lg:text-5xl tracking-widest lg:grid">
                <span className="font-heading">
                  Dê o primeiro passo <br />
                  para a mudança
                </span>
                <span className="leading-snug text-slate-700 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-widest">
                  e descubra como
                  <br /> podemos ajudar.
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-2 lg:grid lg:justify-start">
              <Link href="/">
                <Image
                  className="min-w-[200px] w-[525px]"
                  src={banner5}
                  alt="Keyko Terapias imagem"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center absolute z-10 bottom-[-1px] dark:hidden">
              <Link href="/">
                <Image
                  className="object-cover"
                  src={onda}
                  alt="Keyko Terapias onda"
                />
              </Link>
            </div>
            <div className="flex-col justify-end absolute z-10 bottom-[-1px] hidden dark:flex w-full">
              <Link href="/">
                <Image
                  className="object-cover"
                  src={ondaDark}
                  alt="Keyko Terapias onda dark"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto p-4">
          <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
            <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
              Estamos a um clique de distância,
              <br /> Aguardando seu contato!
            </h2>
          </div>
          <div className="p-4 grid grid-cols-1 items-center mx-auto md:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5521980943935&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="pt-2 tracking-wide text-2xl hover:scale-105 ">
                  Tel: (21) 98094-3965
                </p>
              </a>
              <p className="text-2xl hover:scale-105">
                <a href="mailto:elakeikoyamada@gmail.com">
                  elakeikoyamada@gmail.com
                </a>
              </p>
              <a
                href="https://www.google.com/maps/dir//r.+visc.+de+piraj%C3%A1,+572+-+6+andar+-+ipanema,+rio+de+janeiro+-+rj,+22410-002+keyko+terapia/@-22.9726455,-43.2124974,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9bd5e5c19d28d5:0x6bb43b2960152aae!2m2!1d-43.2120193!2d-22.9834866?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <address className="text-2xl hover:scale-105">
                  <p>Rua Visc. de Pirajá, 572 - 6º andar</p>
                  <p>Ipanema, Rio de Janeiro - RJ</p>
                </address>
              </a>
            </div>
            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
                src={image6}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ width: '242px', height: '390px' }}
              />
            </div>
          </div>
          <div className="flex justify-center leading-relaxed text-justify mx-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=5521980943935&text&type=phone_number&app_absent=0"
              aria-label="Whatsapp"
              className="mt-4 mb-14 bg-primary text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
            >
              Agende uma Sessão
            </a>
          </div>
        </section>

        <div className="fixed right-0 bottom-6 mb-4 mr-4 z-20">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=5521980943935&text&type=phone_number&app_absent=0"
            aria-label="Whatsapp"
          >
            <IoLogoWhatsapp className="text-green-500 text-5xl sm:text-6xl" />
          </a>
        </div>
      </main>
    </>
  )
}
