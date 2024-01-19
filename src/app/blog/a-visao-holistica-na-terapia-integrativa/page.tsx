import Link from 'next/link'
import Image from 'next/image'
import onda from '../../../public/onda.png'
import ondaDark from '../../../public/ondaDark.png'
import banner4 from '../../../public/banner4.png'
import blog3 from '../../../public/blog3.webp'

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
              src={blog3}
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
                  A Visão Holística na Terapia Integrativa
                </h1>
              </header>

              <section className="mt-4">
                <h2 className="text-lg font-bold mt-8 mb-4">
                  Oi, querido(a)! Aqui é a Elaine Keyko, e hoje quero te levar
                  para uma viagem extraordinária através da visão holística na
                  Terapia Integrativa. 🌈
                </h2>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  A Magia da Visão Holística
                </h2>

                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Imagine enxergar sua vida como um quadro completo, onde cada
                  pincelada é essencial para a obra final. Isso é a visão
                  holística - uma abordagem que considera corpo, mente e
                  espírito como um só.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  A Jornada Pessoal de Cura: Online ou Presencial no Rio de
                  Janeiro
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Seja lá onde você estiver, essa jornada de cura está ao seu
                  alcance. Com atendimento online ou presencial aqui no Rio de
                  Janeiro, a Terapia Integrativa é uma celebração da
                  singularidade de cada indivíduo.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  A Arte da Cura Integral
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Ao adotar a visão holística, mergulhamos na arte da cura
                  integral. Cada sessão é uma oportunidade de explorar as raízes
                  dos desafios, desfazer nós emocionais e permitir que a
                  harmonia se estabeleça.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Crie um Novo Capítulo na Sua Jornada
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  A Terapia Integrativa é um convite para criar um novo capítulo
                  na sua jornada. É aprender a se ouvir, se compreender e,
                  finalmente, se curar. Se você está pronto(a) para abraçar essa
                  visão holística, a transformação espera por você.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Meu Convite para Você: Junte-se à Magia Thetahealing
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Não se trata apenas de uma técnica terapêutica; é uma jornada
                  de magia, autocura e autoconhecimento. É um convite para uma
                  dança cósmica consigo mesmo(a), onde você é o(a) protagonista
                  da sua história encantada.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Desvendando o Potencial de Cura
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Vamos desvendar o potencial de cura que reside dentro de você.
                  A visão holística na Terapia Integrativa é como abrir as
                  cortinas para um novo amanhecer na sua vida.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Conecte-se com Sua Essência
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Quero te convidar a se conectar com sua essência mais
                  profunda. Sua jornada de autodescoberta e cura começa agora.
                  Agende sua sessão e dê o primeiro passo rumo a uma vida mais
                  plena.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Sua Jornada Holística Começa Aqui
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Sua jornada holística está prestes a começar. Vamos juntos
                  explorar os caminhos da Terapia Integrativa e criar uma
                  sinfonia harmoniosa de saúde e bem-estar. Estou aqui para
                  guiá-lo(a)! 🌟
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
