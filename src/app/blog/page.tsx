import Link from 'next/link'
import Image from 'next/image'
import onda from '../../public/onda.png'
import ondaDark from '../../public/ondaDark.png'
import banner4 from '../../public/banner4.png'
import blog1 from '../../public/blog1.webp'
import blog2 from '../../public/blog2.webp'
import blog3 from '../../public/blog3.webp'
import blog4 from '../../public/blog4.webp'
import blog5 from '../../public/blog5.webp'
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
              <a href="/blog/desvendando-os-misterios-do-thetahealing">
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
                <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                  Desvendando os Mistérios do Thetahealing
                </h2>

                <p
                  className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base"
                  style={{ textIndent: '30px' }}
                >
                  Imagine se você pudesse acessar um lugar dentro de si repleto
                  de possibilidades, onde as crenças limitantes são desfeitas
                  como se fossem fios de uma teia. Isso é exatamente o que o
                  Thetahealing proporciona - uma jornada mágica para desvendar
                  os mistérios do seu próprio ser.
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
                <a href="/blog/contelacao-familiar">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog2}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />

                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Uma Jornada com a Constelação Familiar
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Imagina poder enxergar além das aparências, compreender os
                    laços familiares que moldam nossa jornada. É isso que a
                    Constelação Familiar proporciona - uma viagem às raízes,
                    onde o invisível se torna visível.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/a-visao-holistica-na-terapia-integrativa">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog3}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />

                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    A Visão Holística na Terapia Integrativa
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Na Terapia Integrativa, não tratamos apenas sintomas
                    isolados; buscamos entender a complexidade da sua história,
                    conectando cada peça do quebra-cabeça da sua saúde. É como
                    uma dança harmoniosa entre os aspectos físicos, emocionais e
                    espirituais.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/leitura-de-aura-explorando-as-cores-da-alma">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog4}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Explorando as Cores da Alma
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Entrar no fascinante mundo da Leitura de Aura é como abrir
                    um livro cheio de mistérios e descobrir a linguagem única da
                    sua alma. Cada cor revela uma história, uma emoção, uma
                    parte da sua jornada.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/libertacao-de-crencas-limitantes">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog5}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Libertação de Crenças Limitantes
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Imagine que dentro de nós existem muros invisíveis, crenças
                    que nos limitam e nos impedem de alcançar nosso potencial
                    pleno. Romper essas barreiras é a essência das Terapias
                    Integrativas.
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
