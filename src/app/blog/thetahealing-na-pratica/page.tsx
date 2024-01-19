import Link from 'next/link'
import Image from 'next/image'
import onda from '../../../public/onda.png'
import ondaDark from '../../../public/ondaDark.png'
import banner4 from '../../../public/banner4.png'
import blog12 from '../../../public/blog12.webp'

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
              src={blog12}
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
                  Thetahealing na Prática{' '}
                </h1>
              </header>

              <section className="mt-4">
                <h2 className="text-lg font-bold mt-8 mb-4">
                  Olá, queridos leitores! Sou Elaine Keyko, Terapeuta
                  Integrativa, e estou emocionada em compartilhar com vocês um
                  mergulho profundo no universo do Thetahealing. Preparem-se
                  para uma jornada de autoconhecimento repleta de experiências
                  transformadoras e benefícios extraordinários. 🌈💖
                </h2>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Desvendando o Thetahealing
                </h2>

                <p className="mt-4" style={{ textIndent: '30px' }}>
                  O Thetahealing é mais do que uma terapia; é uma jornada de
                  descoberta interior. Nesse método, exploramos a onda cerebral
                  theta, um estado profundo de relaxamento que permite acessar e
                  reprogramar crenças limitantes. Ao longo dessa prática, tenho
                  testemunhado verdadeiras revoluções na vida das pessoas.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Experiências Surpreendentes
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Cada sessão de Thetahealing é única, pois trabalhamos nas
                  questões mais profundas da mente, desbloqueando padrões que
                  impedem o crescimento pessoal. Os relatos de experiências
                  surpreendentes vão desde a liberação emocional até curas
                  físicas impressionantes.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Benefícios que Transformam Vidas
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Os benefícios do Thetahealing são vastos. Desde o alívio do
                  estresse e ansiedade até a manifestação de relacionamentos
                  mais saudáveis e abundância na vida. Essa prática vai além,
                  conectando-nos com nossa verdadeira essência e potencial
                  ilimitado.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Atendimento Online ou Presencial no Rio de Janeiro
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Se você está em busca de uma jornada de autoconhecimento e
                  cura, o Thetahealing é uma escolha poderosa. Meu compromisso é
                  oferecer um espaço seguro para sua transformação, seja no
                  atendimento online ou presencial aqui no Rio de Janeiro.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Inicie Sua Jornada Thetahealing{' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Está pronto(a) para desvendar os mistérios do Thetahealing?
                  Entre em contato e inicie sua jornada de autoconhecimento.
                  Vamos juntos explorar o poder transformador dessa técnica
                  extraordinária.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Elaine Keyko, Terapeuta Integrativa Guiando você na descoberta
                  do seu potencial e na manifestação de uma vida plena.{' '}
                </h2>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
