import Link from 'next/link'
import Image from 'next/image'
import onda from '../../public/onda.png'
import ondaDark from '../../public/ondaDark.png'
import banner3 from '../../public/banner3.png'
import image5 from '../../public/image5.webp'
import image4 from '../../public/image4.webp'
import image3 from '../../public/image3.webp'

import { IoLogoWhatsapp } from 'react-icons/io'

export default function Contato(): JSX.Element {
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
                  Descubra terapias <br />
                  integrativas e cursos
                </span>
                <span className="leading-snug text-slate-700 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-widest">
                  projetados para nutrir seu <br /> bem-estar e harmonia
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-2 lg:grid lg:justify-start">
              <Link href="/servicos">
                <Image
                  className="min-w-[200px] w-[525px]"
                  src={banner3}
                  alt="Keyko Terapias imagem"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center absolute z-10 bottom-[-1px] dark:hidden">
              <Link href="/servicos">
                <Image
                  className="object-cover"
                  src={onda}
                  alt="Keyko Terapias onda"
                />
              </Link>
            </div>
            <div className="flex-col justify-end absolute z-10 bottom-[-1px] hidden dark:flex w-full">
              <Link href="/servicos">
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
        <section className="container mx-auto p-4">
          <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
            <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
              Descubra o Poder da Transformação:
              <br /> Nossos Serviços Exclusivos
            </h2>
          </div>
          <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold">
                Terapia Individual:
                <br /> Sua Jornada Pessoal de Autodescoberta
              </h2>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base"
                style={{ textIndent: '30px' }}
              >
                Em nossa Terapia Individual, mergulhe em uma jornada única de
                autodescoberta. Esteja pronto para explorar emoções profundas,
                superar obstáculos e atingir objetivos significativos. Com
                orientação personalizada, você romperá padrões limitantes,
                conquistando uma vida plena e libertadora.
              </p>

              <ul className="list-disc p-4 ml-auto leading-relaxed text-justify mx-auto max-w-[550px]">
                <li>
                  Vivencie um espaço seguro e dedicado para explorar suas
                  emoções, superar desafios e atingir seus objetivos.
                </li>
                <li>
                  Orientação personalizada para uma transformação profunda,
                  focada em suas necessidades exclusivas.
                </li>
                <li>
                  Liberte-se de padrões limitantes e alcance uma vida mais plena
                  e significativa.
                </li>
              </ul>
            </div>
            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
                src={image5}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ width: '390px', height: '390px' }}
              />
            </div>
          </div>

          <div className="flex justify-center leading-relaxed text-justify mx-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=5521980943935&text&type=phone_number&app_absent=0"
              aria-label="Whatsapp"
              className="mt-4 mb-14 bg-primary text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
            >
              Agende uma Sessão
            </a>
          </div>
        </section>
        <section className="container mx-auto p-4">
          <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold">
                Workshops Transformadores:
                <br /> Conecte-se e Evolua Junto com a Comunidade
              </h2>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base"
                style={{ textIndent: '30px' }}
              >
                Conecte-se com uma comunidade apaixonada por crescimento
                pessoal. Nossos workshops oferecem não apenas experiências
                envolventes e interativas, mas também oportunidades de construir
                conexões autênticas. Acesse ferramentas práticas, estratégias
                comprovadas e acelere seu processo de autotransformação com a
                sinergia de grupo.
              </p>

              <ul className="list-disc p-4 ml-auto leading-relaxed text-justify mx-auto max-w-[550px]">
                <li>
                  Participe de experiências envolventes e interativas,
                  promovendo conexões valiosas com outros buscadores de
                  crescimento pessoal.
                </li>
                <li>
                  Acesse ferramentas práticas e estratégias comprovadas para
                  aplicar em sua vida diária.
                </li>
                <li>
                  A sinergia do grupo amplifica o impacto positivo, acelerando o
                  processo de autotransformação.
                </li>
              </ul>
            </div>
            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
                src={image3}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ width: '390px', height: '390px' }}
              />
            </div>
          </div>

          <div className="flex justify-center leading-relaxed text-justify mx-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=5521980943935&text&type=phone_number&app_absent=0"
              aria-label="Whatsapp"
              className="mt-4 mb-14 bg-primary text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
            >
              Agende uma Sessão
            </a>
          </div>
        </section>
        <section className="container mx-auto p-4">
          <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold">
                Fuja da Rotina,
                <br /> Abra Portas para a Renovação:
              </h2>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base"
                style={{ textIndent: '30px' }}
              >
                Nossos Retiros Terapêuticos oferecem uma fuga revigorante da
                rotina diária. Em um ambiente projetado para introspecção,
                entregue-se a uma experiência imersiva que desbloqueará seu
                potencial máximo.
              </p>

              <ul className="list-disc p-4 ml-auto leading-relaxed text-justify mx-auto max-w-[550px]">
                <li>
                  Escape da rotina e mergulhe em um ambiente propício à
                  introspecção e renovação.
                </li>
                <li>
                  Desfrute de uma experiência holística, integrando práticas
                  terapêuticas, meditação e reconexão com a natureza.
                </li>
                <li>
                  Uma oportunidade única para desbloquear seu potencial máximo e
                  vivenciar uma verdadeira transformação.
                </li>
              </ul>
            </div>
            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
                src={image4}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ width: '390px', height: '390px' }}
              />
            </div>
          </div>

          <div className="flex justify-center leading-relaxed text-justify mx-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=5521980943935&text&type=phone_number&app_absent=0"
              aria-label="Whatsapp"
              className="mt-4 mb-14 bg-primary text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
            >
              Agende uma Sessão
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
