import Link from 'next/link'
import Image from 'next/image'
import onda from '../../public/onda.png'
import ondaDark from '../../public/ondaDark.png'
import banner4 from '../../public/banner4.png'
import image5 from '../../public/image5.webp'
import image8 from '../../public/image8.png'
import { IoLogoWhatsapp } from 'react-icons/io'
import { PaginationDemo } from '@/app/_components/pagination'

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
              <Link href="/blog">
                <Image
                  className="min-w-[200px] w-[525px]"
                  src={banner4}
                  alt="Keyko Terapias imagem"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center absolute z-10 bottom-[-1px] dark:hidden">
              <Link href="/blog">
                <Image
                  className="object-cover"
                  src={onda}
                  alt="Keyko Terapias onda"
                />
              </Link>
            </div>
            <div className="flex-col justify-end absolute z-10 bottom-[-1px] hidden dark:flex w-full">
              <Link href="/blog">
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
            <IoLogoWhatsapp className="text-green-500 text-5xl sm:text-6xl hover:scale-110" />
          </a>
        </div>
        <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
          <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
            Seu refúgio diário para dicas <br />e transformações.
          </h2>
        </div>

        <section className="container2 p-4 flex space-x-8 mx-auto justify-center">
          <section className="flex w-3/12 flex-col space-y-8">
            <div className="w-full rounded-xl shadow-md bg-white p-4 text-justify">
              <Image
                className="object-cover z-10 w-full h-auto mx-auto justify-center"
                src={image8}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{
                  maxWidth: '100px',
                  maxHeight: '420px'
                }}
              />
              <div className="p-4 text-center mt-2 text-slate-500 tracking-wide text-base space ">
                <h2 className="font-heading text-xl mb-2 text-slate-600">
                  Elaine Keyko
                </h2>
                <p className="text-sm text-justify">
                  Certificada como Consultora do Bem-Estar Mental, minha missão
                  é criar um equilíbrio de vida que prioriza o bem-estar
                  integral.
                </p>
                <div className="mt-4">
                  <a href="/sobre" className="text-blue-500 hover:underline">
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl shadow-md bg-white p-4 text-justify text-slate-500 tracking-wide text-base">
              <h2 className="text-2xl font-bold mb-2 text-slate-700">
                Últimas Postagens
              </h2>
              <div className="mb-4">
                <h3 className="font-bold text-slate-600">Título do Destaque</h3>
                <p>imagem e descrição imagem e descrição imagem e descrição</p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-slate-600">Título do Destaque</h3>
                <p>imagem e descrição imagem e descrição imagem e descrição</p>
              </div>
            </div>
          </section>
          <div className="w-7/12 rounded-xl shadow-md bg-white grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 tracking-wide text-base">
            <div className="md:col-span-2 p-4">
              <Image
                className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                src={image5}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{
                  maxWidth: '780px',
                  maxHeight: '482px'
                }}
              />
              <a href="/postagem-principal">
                <h2 className="font-heading text-center leading-normal text-2xl md:text-3xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                  Título da Postagem
                </h2>
              </a>

              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base"
                style={{ textIndent: '30px' }}
              >
                Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                Postagem resumo Resumo da Postagem resumo Resumo da Postagem
                resumo Resumo da Postagem resumo Resumo da Postagem resumo
                Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                Postagem resumo
              </p>
            </div>
          </div>
        </section>

        <section className="container2 p-4 flex space-x-8 mx-auto justify-center">
          <section className="flex w-3/12 flex-col space-y-4">
            <div className="w-full rounded-xl shadow-md bg-white"></div>
          </section>
          <div className="w-7/12 rounded-xl grid grid-cols-2 md:grid-cols-2 gap-4 tracking-wide text-base">
            <div className="col-span-4 grid grid-cols-2 gap-6 mb-16">
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <Image
                  className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                  src={image5}
                  alt="Keyko Terapias pessoas na roda"
                  loading="lazy"
                  style={{
                    maxWidth: '6680px',
                    maxHeight: '420px'
                  }}
                />
                <a href="/postagem-principal">
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-3xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Título da Postagem
                  </h2>
                </a>
                <p
                  className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                  style={{ textIndent: '30px' }}
                >
                  Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                  Postagem resumo Resumo da Postagem resumo Resumo da Postagem
                  resumo Resumo da Postagem resumo Resumo da Postagem resumo
                  Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                  Postagem resumo
                </p>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <Image
                  className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                  src={image5}
                  alt="Keyko Terapias pessoas na roda"
                  loading="lazy"
                  style={{
                    maxWidth: '6680px',
                    maxHeight: '420px'
                  }}
                />
                <a href="/postagem-principal">
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-3xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Título da Postagem
                  </h2>
                </a>
                <p
                  className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                  style={{ textIndent: '30px' }}
                >
                  Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                  Postagem resumo Resumo da Postagem resumo Resumo da Postagem
                  resumo Resumo da Postagem resumo Resumo da Postagem resumo
                  Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                  Postagem resumo
                </p>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <Image
                  className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                  src={image5}
                  alt="Keyko Terapias pessoas na roda"
                  loading="lazy"
                  style={{
                    maxWidth: '6680px',
                    maxHeight: '420px'
                  }}
                />
                <a href="/postagem-principal">
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-3xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Título da Postagem
                  </h2>
                </a>
                <p
                  className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                  style={{ textIndent: '30px' }}
                >
                  Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                  Postagem resumo Resumo da Postagem resumo Resumo da Postagem
                  resumo Resumo da Postagem resumo Resumo da Postagem resumo
                  Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                  Postagem resumo
                </p>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <Image
                  className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                  src={image5}
                  alt="Keyko Terapias pessoas na roda"
                  loading="lazy"
                  style={{
                    maxWidth: '6680px',
                    maxHeight: '420px'
                  }}
                />
                <a href="/postagem-principal">
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-3xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Título da Postagem
                  </h2>
                </a>
                <p
                  className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                  style={{ textIndent: '30px' }}
                >
                  Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                  Postagem resumo Resumo da Postagem resumo Resumo da Postagem
                  resumo Resumo da Postagem resumo Resumo da Postagem resumo
                  Resumo da Postagem resumo Resumo da Postagem resumo Resumo da
                  Postagem resumo
                </p>
              </div>
              <div className="justify-center items-center">
                <PaginationDemo />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
