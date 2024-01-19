import Link from 'next/link'
import Image from 'next/image'
import onda from '../../../public/onda.png'
import ondaDark from '../../../public/ondaDark.png'
import banner4 from '../../../public/banner4.png'
import blog7 from '../../../public/blog7.webp'

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
              src={blog7}
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
                  Constelação Familiar e as Dinâmicas Inconscientes
                </h1>
              </header>

              <section className="mt-4">
                <h2 className="text-lg font-bold mt-8 mb-4">
                  Oi, pessoal! Sou a Elaine Keyko, e estou empolgada para
                  compartilhar um pouco mais sobre a incrível jornada que é a
                  Constelação Familiar. 🌌✨
                </h2>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Viajando no Tempo e no Espaço Familiar: O que é Constelação
                  Familiar?
                </h2>

                <p className="mt-4" style={{ textIndent: '30px' }}>
                  A Constelação Familiar é como uma viagem no tempo e espaço do
                  seu sistema familiar. Vamos explorar como as dinâmicas
                  inconscientes se manifestam, impactando nossas vidas no
                  presente. Prepare-se para uma jornada profunda e reveladora!
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Presencial no Rio de Janeiro ou Online: A Escolha é Sua!
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Esteja você aqui na Cidade Maravilhosa ou em qualquer lugar do
                  mundo, a Constelação Familiar está ao seu alcance. Atendo
                  presencialmente no Rio de Janeiro, proporcionando uma
                  experiência única, ou online, para sua comodidade. A
                  transformação está a apenas um clique de distância.
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
                  O Poder da Compreensão Sistêmica: Desvendando Nós e
                  Emaranhados{' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Vamos mergulhar fundo para compreender como os emaranhados
                  familiares influenciam nossos relacionamentos, saúde e
                  prosperidade. A Constelação Familiar é uma ferramenta poderosa
                  para desfazer nós e permitir que a energia flua livremente.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Iniciando Sua Jornada de Transformação: A Hora é Agora!
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Se você sente que é hora de compreender melhor as dinâmicas da
                  sua família e liberar amarras do passado, a Constelação
                  Familiar é a chave. Estamos prontos para iniciar essa jornada
                  de transformação juntos.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Liberte-se e Reconstrua Vínculos: Agende Sua Constelação
                  Familiar!
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Estou aqui para guiar você na desconstrução de padrões
                  limitantes e na reconstrução de vínculos saudáveis. Agende sua
                  sessão de Constelação Familiar e permita-se liberar o
                  potencial transformador que existe em você.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Vamos Desvendar Juntos as Dinâmicas do Seu Universo Familiar!
                  🌟{' '}
                </h2>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
