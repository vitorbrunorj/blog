import Link from 'next/link'
import Image from 'next/image'
import onda from '../../../public/onda.png'
import ondaDark from '../../../public/ondaDark.png'
import banner4 from '../../../public/banner4.png'
import blog4 from '../../../public/blog4.webp'

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
              src={blog4}
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
                  Explorando as Cores da Alma
                </h1>
              </header>

              <section className="mt-4">
                <h2 className="text-lg font-bold mt-8 mb-4">
                  Olá, queridos amigos! Aqui está a Elaine Keyko, pronta para
                  mergulhar em um universo de cores e energias - a Leitura de
                  Aura. 🌈
                </h2>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Desvendando Mistérios Através das Cores
                </h2>

                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Entrar no fascinante mundo da Leitura de Aura é como abrir um
                  livro cheio de mistérios e descobrir a linguagem única da sua
                  alma. Cada cor revela uma história, uma emoção, uma parte da
                  sua jornada.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  O Espetáculo de Cores da Sua Essência
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Já pensou em ter um espetáculo de cores representando a
                  essência da sua vida? Na Leitura de Aura, as cores dançam e
                  contam histórias, revelando aspectos ocultos e destacando os
                  belos matizes da sua verdade interior.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Leitura de Aura Online ou Presencial no Rio de Janeiro
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  A boa notícia é que, não importa onde você esteja, podemos
                  explorar juntos essas cores mágicas. Ofereço sessões de
                  Leitura de Aura tanto online quanto presencialmente aqui no
                  Rio de Janeiro.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Sintonizando-se com as Vibrações Positivas{' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Ao mergulhar na Leitura de Aura, sintonizamo-nos com as
                  vibrações positivas e compreendemos melhor os desafios que a
                  vida nos apresenta. É como ter um guia interno que ilumina o
                  caminho da autoconsciência.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  A Jornada Começa com um Arco-Íris de Possibilidades
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Se você está pronto para iniciar uma jornada de
                  autoconhecimento e descobrir as muitas facetas coloridas da
                  sua alma, a Leitura de Aura é o ponto de partida perfeito.
                  Cada sessão é uma jornada única, uma viagem emocionante
                  através do seu mundo interior.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  A Arte de Conectar-se Consigo Mesmo(a){' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Mais do que uma prática, a Leitura de Aura é uma arte de se
                  conectar consigo mesmo(a). É sobre abraçar a complexidade da
                  sua existência e entender que cada cor, cada energia, é parte
                  integrante do seu ser.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Agende Sua Sessão e Desperte as Cores da Sua Alma
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Estou aqui, pronta para guiá-lo(a) nessa aventura de cores e
                  significados. Agende sua sessão de Leitura de Aura e dê o
                  primeiro passo para despertar as verdadeiras cores da sua
                  alma.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Que Seu Arco-Íris Interior Brilhe Sempre! 🌟{' '}
                </h2>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
