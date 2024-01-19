import Link from 'next/link'
import Image from 'next/image'
import onda from '../../../public/onda.png'
import ondaDark from '../../../public/ondaDark.png'
import banner4 from '../../../public/banner4.png'
import blog6 from '../../../public/blog6.webp'
import blog7 from '../../../public/blog7.webp'
import blog8 from '../../../public/blog8.webp'
import blog9 from '../../../public/blog9.webp'
import blog10 from '../../../public/blog10.webp'
import image8 from '../../../public/image8.png'

import { IoLogoWhatsapp } from 'react-icons/io'
import { PaginationDemo } from '@/app/_components/pagination2'

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

        <section className="container2 p-4 flex lg:space-x-8 mx-auto justify-center">
          <section className="lg:w-3/12 flex-col space-y-8 hidden lg:block">
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
            <div className="w-full rounded-xl shadow-md bg-white p-4 text-slate-500 tracking-wide text-base">
              <h2 className="text-2xl font-bold mb-2 text-slate-700">
                Últimas Postagens
              </h2>
              <div className="mb-4 hover:text-primary hover:scale-105">
                <a href="/blog/constelacao-familiar-como-essa-terapia-pode-promover-relacionamentos-saudaveis">
                  <h3 className="font-bold text-slate-600">
                    Constelação Familiar
                  </h3>
                  <p className="text-justify">
                    A Constelação Familiar é uma abordagem terapêutica
                  </p>
                </a>
              </div>
              <div className="mb-4 hover:text-primary hover:scale-105">
                <a href="/blog/libertacao-de-crencas-limitantes-o-processo-de-libertacao">
                  <h3 className="font-bold text-slate-600">
                    Libertação de Crenças Limitantes
                  </h3>
                  <p className="text-justify">
                    A libertação de crenças limitantes envolve um mergulho
                    profundo em nossa psique
                  </p>
                </a>
              </div>
              <div className="mb-4 hover:text-primary hover:scale-105">
                <a href="/blog/thetahealing-na-pratica-experiencias-e-beneficios-na-jornada-do-autoconhecimento">
                  <h3 className="font-bold text-slate-600">
                    Thetahealing na Prática
                  </h3>
                  <p className="text-justify">
                    O Thetahealing é mais do que uma terapia
                  </p>
                </a>
              </div>
            </div>
          </section>
          <div className="lg:w-7/12 rounded-xl shadow-md bg-white grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 tracking-wide text-base">
            <div className="md:col-span-2 p-4">
              <a href="/blog/leitura-de-aura-e-intuicao">
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
                <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                  Leitura de Aura e Intuição{' '}
                </h2>

                <p
                  className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base"
                  style={{ textIndent: '30px' }}
                >
                  A Leitura de Aura é como desvendar um livro sagrado escrito
                  nas cores da sua energia. Cada tonalidade conta uma história
                  única sobre suas emoções, saúde e potencial de vida.
                  Prepare-se para uma jornada fascinante rumo ao
                  autoconhecimento.
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="container2 p-4 flex lg:space-x-8 mx-auto justify-center">
          <section className=" lg:w-3/12 flex-col space-y-4 hidden lg:block">
            <div className="w-full rounded-xl shadow-md bg-white"></div>
          </section>
          <div className="lg:w-7/12 rounded-xl grid grid-cols-2 lg:p-0 md:grid-cols-2 gap-4 tracking-wide text-base">
            <div className="col-span-4 grid md:grid-cols-2 gap-6 mb-16">
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/constelacao-familiar-e-as-dinamicas-inconscientes">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog7}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />

                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Constelação Familiar e as Dinâmicas Inconscientes
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    A Constelação Familiar é como uma viagem no tempo e espaço
                    do seu sistema familiar. Vamos explorar como as dinâmicas
                    inconscientes se manifestam, impactando nossas vidas no
                    presente. Prepare-se para uma jornada profunda e reveladora!
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/thetahealing-e-autoconhecimento">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog8}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />

                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Thetahealing e Autoconhecimento
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    O Thetahealing é uma técnica terapêutica que utiliza a
                    frequência cerebral theta para acessar o subconsciente e
                    promover curas profundas. Vamos desvendar os mistérios por
                    trás dessa abordagem única e entender como ela pode abrir
                    portas para a sua evolução pessoal.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/traumas-cicatrizes-invisiveis-que-afetam-profundamente">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog9}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Traumas: Cicatrizes Invisíveis que Afetam Profundamente
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Traumas podem deixar cicatrizes invisíveis, impactando nossa
                    vida de maneiras que nem sempre percebemos. Vamos mergulhar
                    fundo nesse tema sensível, compreendendo como os traumas se
                    manifestam e por que é crucial liberá-los para viver com
                    plenitude.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/a-magia-da-leitura-de-aura">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog10}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    A Magia da Leitura de Aura
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    A aura, essa energia que nos envolve, reflete os aspectos
                    mais profundos da nossa alma. Vamos desvendar os segredos
                    por trás das cores, formas e padrões, entendendo como a
                    leitura de aura pode revelar insights incríveis sobre nossa
                    saúde, emoções e potencial de crescimento.
                  </p>
                </a>
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
