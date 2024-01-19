import Link from 'next/link'
import Image from 'next/image'
import onda from '../../../public/onda.png'
import ondaDark from '../../../public/ondaDark.png'
import banner4 from '../../../public/banner4.png'
import blog2 from '../../../public/blog2.webp'

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
        <div className="container2 mx-auto p-4 flex flex-col items-center justify-center mt-10 mb-10">
          <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
            <Image
              className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
              src={blog2}
              alt="Keyko Terapias pessoas na roda"
              loading="lazy"
              style={{
                width: '780px',
                height: '482px'
              }}
            />

            <article className="leading-relaxed text-justify max-w-lg mx-auto tracking-wide text-base text-slate-500 px-4">
              <header>
                <h1 className="font-heading text-center leading-normal text-2xl md:text-3xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all transform hover:scale-105">
                  Uma Jornada com a Constelação Familiar
                </h1>
              </header>

              <section className="mt-4">
                <h2 className="text-lg font-bold mt-8 mb-4">
                  Oi, querido(a)! Aqui é a Elaine Keyko, e hoje quero
                  compartilhar contigo algo incrível que pode transformar sua
                  vida - a Constelação Familiar. 🌌
                </h2>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Constelação Familiar: Desvendando os Laços Invisíveis
                </h2>

                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Imagina poder enxergar além das aparências, compreender os
                  laços familiares que moldam nossa jornada. É isso que a
                  Constelação Familiar proporciona - uma viagem às raízes, onde
                  o invisível se torna visível.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Dançando com as Energias Familiares{' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Na Constelação Familiar, dançamos com as energias familiares,
                  trazendo à luz dinâmicas muitas vezes enterradas no
                  inconsciente. É como uma coreografia cósmica que revela
                  padrões e permite a cura.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Atendimento Online ou Presencial: Um Convite para a
                  Transformação
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Independente de onde você esteja, quero te convidar para essa
                  jornada - seja online, atravessando distâncias, ou presencial,
                  aqui nas terras cariocas. A Constelação Familiar é um convite
                  à transformação, e você é a estrela dessa constelação.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Embarque na Jornada de Descobertas
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  A Constelação Familiar é uma jornada de descobertas profundas.
                  É como desvendar um livro ancestral, onde cada capítulo revela
                  aspectos ocultos que influenciam sua história.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Desvendando Nossas Histórias Familiares
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Ao escolher embarcar nessa jornada comigo, você estará
                  desvendando as histórias familiares que moldam sua vida. A
                  Constelação é um convite à compreensão, à cura e à criação de
                  novos capítulos.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Ative a Transformação na Sua Vida
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Aqui, o foco é a transformação, é permitir que as energias se
                  movam para criar novas possibilidades. Se você está pronto(a)
                  para ativar essa transformação na sua vida, a Constelação
                  Familiar é o caminho.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Inicie Sua Jornada de Transformação
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Estou aqui para guiá-lo(a) nessa jornada incrível. Seja online
                  ou pessoalmente, sua jornada de transformação através da
                  Constelação Familiar começa agora. Agende sua sessão e dê o
                  primeiro passo rumo a uma vida mais plena.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Seu Espaço de Transformação Está Preparado
                </h2>
                <p className="mt-4 mb-10" style={{ textIndent: '30px' }}>
                  Seu espaço na constelação está pronto. Vamos juntos desvendar
                  os laços invisíveis e criar uma história familiar cheia de
                  amor, compreensão e cura. Sua jornada começa aqui! 🌟
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
