import Link from 'next/link'
import Image from 'next/image'
import onda from '../../public/onda.png'
import ondaDark from '../../public/ondaDark.png'
import banner4 from '../../public/banner4.png'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Blog(): JSX.Element {
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
                  Explore o nosso blog
                  <br />
                  para insights diários,
                </span>
                <span className="leading-snug text-slate-700 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-widest">
                  que inspiram e renovam
                  <br />
                  sua vida.
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-2 lg:grid lg:justify-start">
              <Link href="/">
                <Image
                  className="min-w-[200px] w-[525px]"
                  src={banner4}
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
