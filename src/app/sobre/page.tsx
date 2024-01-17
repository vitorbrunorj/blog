import Link from 'next/link'
import Image from 'next/image'
import onda from '../../public/onda.png'
import ondaDark from '../../public/ondaDark.png'
import banner2 from '../../public/banner2.png'
import image7 from '../../public/image7.webp'
import image7Dark from '../../public/image7Dark.webp'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Sobre(): JSX.Element {
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
                  Conheça Elaine Keyko <br />e DESCUBRA:
                </span>
                <span className="leading-snug text-slate-700 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-widest">
                  A fonte de inspiração por <br /> trás das transformações.
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-2 lg:grid lg:justify-start">
              <Link href="/sobre">
                <Image
                  className="min-w-[200px] w-[525px]"
                  src={banner2}
                  alt="Keyko Terapias imagem"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center absolute z-10 bottom-[-1px] dark:hidden">
              <Link href="/sobre">
                <Image
                  className="object-cover"
                  src={onda}
                  alt="Keyko Terapias onda"
                />
              </Link>
            </div>
            <div className="flex-col justify-end absolute z-10 bottom-[-1px] hidden dark:flex w-full">
              <Link href="/sobre">
                <Image
                  className="object-cover"
                  src={ondaDark}
                  alt="Keyko Terapias onda dark"
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="container mx-auto p-4">
          <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
            <h2 className="py-10 font-heading text-center leading-normal mx-auto text-3xl md:text-4xl tracking-wider font-semibold">
              SOBRE ELAINE KEYKO:
            </h2>
          </div>
          <div className="p-4 grid grid-cols-1 mx-auto lg:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <h2 className="font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold max-w-[360px] mx-auto items-center mt-12">
                JORNADA DE UMA TERAPEUTA INTEGRATIVA
              </h2>

              <p
                className="leading-relaxed text-justify max-w-[600px] mx-auto tracking-wide text-base mt-2"
                style={{ textIndent: '30px' }}
              >
                Meu nome é Elaine Keyko, e minha jornada como Terapeuta
                Integrativa é marcada por uma paixão profunda pela transformação
                e bem-estar integral. Ao longo dos anos, venho dedicando meu
                trabalho ao valorizar o ser humano em sua totalidade
                biopsicossocial, fundamentando-me em uma visão holística que
                reconhece a interconexão entre mente, corpo e espírito.
              </p>

              <h2 className="font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold max-w-[360px] mx-auto items-center mt-12">
                Descobrindo a Transformação nas Terapias Integrativas:
              </h2>

              <p
                className="leading-relaxed text-justify max-w-[600px] mx-auto tracking-wide text-base mt-2"
                style={{ textIndent: '30px' }}
              >
                Minha jornada nas Terapias Integrativas começou com uma busca
                pessoal por superação e evolução. Aprofundei-me em práticas como
                Thetahealing, Constelação Familiar, Leitura de Aura,
                Renascimento, entre outras, buscando caminhos inovadores para
                auxiliar as pessoas na libertação de crenças limitantes.
              </p>

              <h2 className="font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold max-w-[360px] mx-auto items-center mt-12">
                Uma Trajetória Profissional Dedicada:
              </h2>

              <p
                className="leading-relaxed text-justify max-w-[600px] mx-auto tracking-wide text-base mt-2"
                style={{ textIndent: '30px' }}
              >
                Com uma trajetória acadêmica sólida, sou graduada há 24 anos em
                Fonoaudiologia pela UFRJ, com pós-graduação em Voz - USP e
                especialização em Psicomotricidade - UERJ. Aprofundei-me no
                conhecimento, sempre comprometida com o desenvolvimento pessoal
                e espiritual. Após um divórcio traumático em 2012, deparei-me
                com desafios pessoais que me conduziram ao universo das Terapias
                Integrativas.
              </p>

              <h2 className="font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold max-w-[360px] mx-auto items-center mt-12">
                Uma Nova Missão: Ajudar Outros na Sua Jornada:
              </h2>

              <p
                className="leading-relaxed text-justify max-w-[600px] mx-auto tracking-wide text-base mt-2"
                style={{ textIndent: '30px' }}
              >
                A vivência pessoal me mostrou a eficácia transformadora das
                Terapias Integrativas, e, sem planejar, tornei-me uma ponte para
                o bem-estar de amigos e conhecidos. A aceitação e validação
                dessas transformações foram o ponto de partida para minha
                transição de carreira, saindo da área hospitalar para dedicar-me
                integralmente às Terapias Integrativas.
              </p>

              <h2 className="font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold max-w-[360px] mx-auto items-center mt-12">
                Missão Atual: A Melhor Versão de Cada Indivíduo:
              </h2>

              <p
                className="leading-relaxed text-justify max-w-[600px] mx-auto tracking-wide text-base mt-2"
                style={{ textIndent: '30px' }}
              >
                Certificada como Consultora do Bem-Estar Mental, minha missão é
                criar um equilíbrio de vida que prioriza o bem-estar integral,
                celebrando cada aspecto autêntico de quem você é. Meu propósito
                é ajudar pessoas a encontrarem a melhor versão de si mesmas,
                proporcionando transformações profundas em diversas áreas,
                inclusive na prosperidade.
              </p>

              <p
                className="leading-relaxed text-justify max-w-[600px] mx-auto tracking-wide text-base mt-4"
                style={{ textIndent: '30px' }}
              >
                Seja bem-vindo(a) à minha jornada, onde meu compromisso é guiar,
                apoiar e auxiliar você em seu processo de autodescoberta e
                libertação. É hora de nutrir seu corpo e alma, abraçando a saúde
                e vivendo plenamente. Juntos, vamos escrever um novo capítulo na
                sua história, focado na construção de uma vida mais feliz e
                realizada.
              </p>
            </div>

            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover w-full h-full border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden lg:block dark:hidden"
                src={image7}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ height: '1420px' }}
              />
              <Image
                className="object-cover w-full h-full border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden sm:hidden dark:lg:block"
                src={image7Dark}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ height: '1420px' }}
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
      </main>
    </>
  )
}
