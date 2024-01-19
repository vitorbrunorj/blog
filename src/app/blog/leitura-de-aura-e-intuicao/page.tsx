import Link from 'next/link'
import Image from 'next/image'
import onda from '../../../public/onda.png'
import ondaDark from '../../../public/ondaDark.png'
import banner4 from '../../../public/banner4.png'
import blog6 from '../../../public/blog6.webp'

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
              src={blog6}
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
                  Leitura de Aura e Intuição{' '}
                </h1>
              </header>

              <section className="mt-4">
                <h2 className="text-lg font-bold mt-8 mb-4">
                  Olá, amantes da transformação! Aqui é a Elaine Keyko, pronta
                  para nos aventurarmos juntos no fascinante mundo da Leitura de
                  Aura e Intuição. Preparados para descobrir as cores da sua
                  alma? 🌈✨
                </h2>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Desvendando a Linguagem das Cores: A Arte da Leitura de Aura
                </h2>

                <p className="mt-4" style={{ textIndent: '30px' }}>
                  A Leitura de Aura é como desvendar um livro sagrado escrito
                  nas cores da sua energia. Cada tonalidade conta uma história
                  única sobre suas emoções, saúde e potencial de vida.
                  Prepare-se para uma jornada fascinante rumo ao
                  autoconhecimento.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  A Intuição como Guia: Conectando-se com a Sabedoria Interna{' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  A intuição é a bússola da alma. Neste artigo, exploraremos
                  como cultivar e confiar nesse guia interno. Afinal, a Leitura
                  de Aura e a intuição trabalham em harmonia para revelar
                  aspectos profundos do seu ser.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Presencial no Rio de Janeiro ou Online: A Escolha é Sua!
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Seja você um carioca raiz ou esteja conectado(a) virtualmente,
                  a experiência de Leitura de Aura está ao seu alcance. Atendo
                  tanto presencialmente, proporcionando uma experiência única no
                  Rio de Janeiro, quanto online, para que você inicie sua
                  jornada a partir do conforto do seu lar.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  A Jornada Interior Começa Agora: Embarque Nessa Viagem!
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Se a curiosidade sobre as cores da sua alma e o chamado da
                  intuição estão falando alto, é hora de iniciar essa jornada
                  interior. A Leitura de Aura é o passaporte para compreender
                  seu mundo interior de maneira mais profunda.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Desperte Sua Percepção Sutil: Agende sua Leitura de Aura
                  Agora!{' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Estou aqui para guiá-lo(a) nessa incrível jornada. Agende sua
                  Leitura de Aura e permita-se despertar para uma nova
                  compreensão do seu ser. Vamos explorar juntos as nuances que
                  tornam a sua alma única.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Que as Cores da Sua Alma Sejam Reveladas! 🌟{' '}
                </h2>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
