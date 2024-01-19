import Link from 'next/link'
import Image from 'next/image'
import onda from '../../../public/onda.png'
import ondaDark from '../../../public/ondaDark.png'
import banner4 from '../../../public/banner4.png'
import blog8 from '../../../public/blog8.webp'

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
              src={blog8}
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
                  Thetahealing e Autoconhecimento
                </h1>
              </header>

              <section className="mt-4">
                <h2 className="text-lg font-bold mt-8 mb-4">
                  Oi, pessoal! Aqui é a Elaine Keyko, e hoje estou super animada
                  para compartilhar com vocês sobre uma ferramenta incrível de
                  transformação pessoal: o Thetahealing. Vamos explorar juntos
                  esse universo fascinante e descobrir como ele pode ser o ponto
                  de partida para a sua jornada de autoconhecimento. 🌈💖
                </h2>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Thetahealing: O que é e Como Funciona?{' '}
                </h2>

                <p className="mt-4" style={{ textIndent: '30px' }}>
                  O Thetahealing é uma técnica terapêutica que utiliza a
                  frequência cerebral theta para acessar o subconsciente e
                  promover curas profundas. Vamos desvendar os mistérios por
                  trás dessa abordagem única e entender como ela pode abrir
                  portas para a sua evolução pessoal.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Presencial no Rio de Janeiro ou Online: Você Escolhe!{' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Esteja você nas maravilhosas paisagens do Rio de Janeiro ou em
                  qualquer lugar do mundo, o Thetahealing está disponível para
                  transformar sua vida. Ofereço sessões presenciais,
                  proporcionando uma experiência única, ou atendimento online
                  para sua conveniência. A mudança está ao seu alcance!
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Despertando o Potencial Interior: Autoconhecimento Profundo{' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Vamos explorar como o Thetahealing pode ser uma poderosa
                  ferramenta de autoconhecimento, ajudando você a identificar e
                  transformar crenças limitantes que impedem seu crescimento.
                  Descubra como essa técnica pode ser o ponto de partida para
                  uma jornada de autodescoberta.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Inicie Sua Jornada de Transformação: Thetahealing com Elaine
                  Keyko!{' '}
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Se você busca mais autoconhecimento, cura emocional e
                  crescimento espiritual, o Thetahealing é para você. Estou aqui
                  para guiar você nessa jornada, ajudando-o a liberar o
                  potencial interior e transformar sua vida de dentro para fora.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  Thetahealing: Sua Jornada de Autoconhecimento Começa Agora! 🌟
                </h2>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
