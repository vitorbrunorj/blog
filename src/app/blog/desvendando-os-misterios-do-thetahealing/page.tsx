import Link from 'next/link'
import Image from 'next/image'
import onda from '../../../public/onda.png'
import ondaDark from '../../../public/ondaDark.png'
import banner4 from '../../../public/banner4.png'
import blog1 from '../../../public/blog1.webp'

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
              src={blog1}
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
                  Desvendando os Mistérios do Thetahealing
                </h1>
              </header>

              <section className="mt-4">
                <h2 className="text-lg font-bold mt-8 mb-4">
                  Oi, querido(a)! Eu sou a Elaine Keyko, e hoje estou aqui para
                  compartilhar algo verdadeiramente mágico e transformador - o
                  Thetahealing. 🌟
                </h2>

                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Imagine se você pudesse acessar um lugar dentro de si repleto
                  de possibilidades, onde as crenças limitantes são desfeitas
                  como se fossem fios de uma teia. Isso é exatamente o que o
                  Thetahealing proporciona - uma jornada mágica para desvendar
                  os mistérios do seu próprio ser.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Thetahealing: Magia que Transforma Vidas
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Imagine se você pudesse acessar um lugar dentro de si repleto
                  de possibilidades, onde as crenças limitantes são desfeitas
                  como se fossem fios de uma teia. Isso é exatamente o que o
                  Thetahealing proporciona - uma jornada mágica para desvendar
                  os mistérios do seu próprio ser.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  A Dança das Ondas Cerebrais Theta
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  O Thetahealing utiliza as ondas cerebrais theta, aquelas que
                  emergem quando estamos em estados meditativos ou de sonho. É
                  como entrar em um mundo encantado dentro de você, onde as
                  transformações acontecem num ritmo suave e harmonioso.
                </p>

                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Atendimento Online ou Presencial: Onde a Magia Acontece para
                  Você
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Se você está se perguntando como começar essa jornada mágica,
                  eu ofereço duas portas de entrada. Para aqueles além das
                  fronteiras do Rio de Janeiro, o atendimento online é a varinha
                  mágica que ultrapassa distâncias. E se você está por aqui, no
                  Rio, temos a opção presencial, onde a magia se desdobra diante
                  dos seus olhos.
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
                  Desbloqueie Seu Potencial Mágico
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Ao escolher embarcar nessa jornada mágica comigo, você está
                  prestes a desbloquear o potencial mágico que sempre esteve
                  dentro de você. Este é o início de uma história que vai além
                  das palavras, onde a transformação pessoal é o conto que
                  escrevemos juntos.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  A Magia do Thetahealing Espera por Você
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  Então, querido(a), está pronto(a) para desvendar os mistérios
                  do Thetahealing? A magia espera por você. Agende sua sessão e
                  deixe-me guiá-lo(a) nessa jornada de descobertas e
                  encantamentos.
                </p>
                <h2 className="text-lg font-bold mt-8 mb-4 text-center">
                  {' '}
                  Sua História Mágica Começa Agora
                </h2>
                <p className="mt-4" style={{ textIndent: '30px' }}>
                  A magia está no ar, e sua história mágica de Thetahealing está
                  prestes a começar. Vamos juntos nessa jornada extraordinária!
                  ✨
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
