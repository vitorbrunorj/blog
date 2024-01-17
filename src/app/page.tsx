/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import Image from 'next/image'
import onda from '../public/onda.png'
import ondaDark from '../public/ondaDark.png'
import banner from '../public/banner.png'
import image2 from '../public/image2.webp'
import image3 from '../public/image3.webp'
import image4 from '../public/image4.webp'
import image5 from '../public/image5.webp'
import image6 from '../public/image6.webp'
import image6Dark from '../public/image6Dark.webp'
import FaqSection from '@/app/_components/faq-section'
import { FaCompass } from 'react-icons/fa'
import { PiFlowerLotusFill, PiHandsPrayingFill } from 'react-icons/pi'
import { GiLifeInTheBalance, GiBrain } from 'react-icons/gi'
import { BsPersonArmsUp } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Home() {
  return (
    <main>
      <section className="container3 bg-gradient-to-b from-primary to-white dark:bg-gradient-to-b dark:from-darkPrimary dark:to-neutral-300">
        <div className="bg-gradient-to-b from-primary to-white dark:bg-gradient-to-b dark:from-darkPrimary dark:to-neutral-300 min-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-2 relative">
          <div
            className="flex mt-10 sm:mt-16 items-center justify-center lg:justify-end lg:ml-auto mx-auto lg:mx-0 lg:-mt-16"
            style={{ maxWidth: '700px' }}
          >
            <h1 className="grid leading-snug text-slate-50 text-4xl sm:text-5xl lg:text-5xl tracking-widest lg:grid">
              <span className="font-heading">
                Bem-vindo à Jornada <br />
                de Transformação
              </span>
              <span className="leading-snug text-slate-700 text-3xl sm:text-4xl lg:text-4xl font-bold tracking-widest">
                com Elaine Keyko, <br /> Terapeuta Integrativa!
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center lg:mt-2 lg:grid lg:justify-start">
            <Link href="/">
              <Image
                className="min-w-[200px] w-[525px]"
                src={banner}
                alt="Keyko Terapias imagem"
                loading="eager"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center absolute z-10 bottom-[-1px] dark:hidden">
            <Link href="/">
              <Image
                className="object-cover"
                src={onda}
                alt="Keyko Terapias onda"
                loading="eager"
              />
            </Link>
          </div>
          <div className="flex-col justify-end absolute z-10 bottom-[-1px] hidden dark:flex w-full">
            <Link href="/">
              <Image
                className="object-cover"
                src={ondaDark}
                alt="Keyko Terapias onda dark"
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="container2 p-4 text-center">
        <div className="flex items-center justify-center">
          <h2 className="leading-relaxed p-2 text-lg text-justify font-light tracking-wider max-w-[650px]">
            <p style={{ textIndent: '30px' }}>
              {' '}
              Olá, sou Elaine Keyko, Terapeuta Integrativa, dedicada a guiar
              indivíduos em uma jornada de autoconhecimento e libertação.
              Profundizo-me na essência da integralidade biopsicossocial,
              embasada em uma visão holística que promove transformações
              significativas.{' '}
            </p>
            <br />
            <p style={{ textIndent: '30px' }}>
              Ofereço uma abordagem única, aliada à experiência adquirida em
              minha formação acadêmica, conduzindo transformações pessoais por
              meio das Terapias Integrativas.{' '}
            </p>{' '}
            <br />
            <p style={{ textIndent: '30px' }}>
              {' '}
              Meu propósito é auxiliar na superação de obstáculos emocionais,
              possibilitando a manifestação da melhor versão de cada indivíduo.
              Bem-vindo à sua jornada de transformação com Elaine Keyko,
              Terapeuta Integrativa!
            </p>
          </h2>
        </div>
      </section>

      <section className="container2 flex">
        <div className="container mx-auto p-4 flex justify-center items-center">
          <Image
            className="object-cover w-full h-full border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 z-10 "
            src={image2}
            alt="Keyko Terapias pessoas na roda"
            loading="lazy"
          />
        </div>
      </section>
      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
          Desperte sua Melhor Versão
        </h2>
      </div>

      <section className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4">
                <FaCompass size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold">
                    Jornada Personalizada
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="text-gray-500 text-center leading-relaxed  mt-2 mb-2">
                    Orientação única para sua evolução. <br />
                    Cada sessão é moldada para <br />
                    desbloquear seu potencial <br /> máximo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4">
                <PiFlowerLotusFill size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold">
                    Transformação Interior
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="text-gray-500 leading-relaxed  text-center mt-2 mb-2">
                    Como uma flor que desabrocha,
                    <br />
                    liberte-se de bloqueios
                    <br />
                    emocionais e descubra <br />
                    uma nova expressão <br /> de si mesmo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4">
                <GiLifeInTheBalance size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold">
                    Equilíbrio Holístico
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="text-gray-500 leading-relaxed text-center mt-2 mb-2">
                    Integro mente, corpo e espírito
                    <br />
                    para uma jornada completa
                    <br />
                    em direção à paz interior.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4">
                <PiHandsPrayingFill size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold">
                    Conexão Espiritual
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="text-gray-500 leading-relaxed text-center mt-2 mb-2">
                    Alcance um nível mais profundo de
                    <br />
                    autoconhecimento, conectando-se <br />
                    espiritualmente à sua essência
                    <br />
                    interior.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4">
                <GiBrain size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold">
                    Resiliência Emocional
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="text-gray-500 leading-relaxed text-center mt-2 mb-2">
                    Fortaleça-se emocionalmente <br />
                    como uma árvore resistente, <br />
                    superando desafios com
                    <br /> determinação.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4">
                <BsPersonArmsUp size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold">
                    Empoderamento Pessoal
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="text-gray-500 leading-relaxed text-center mt-2 mb-2">
                    Capacito você a manifestar sua
                    <br />
                    melhor versão. A transformação <br />
                    começa quando você se <br /> empodera
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
          Nossos cursos
        </h2>
      </div>
      <section className="container2 mx-auto p-4  grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {[
          'workshops 18/11',
          'Retiro Ilumina em Lumiar',
          'Terapia Individual'
        ].map((title, index) => (
          <div
            key={index}
            className="bg-primary border-4 border-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              className="object-cover w-full"
              src={index === 0 ? image3 : index === 1 ? image4 : image5}
              alt="Keyko Terapias mão dadas"
              loading="lazy"
            />
            <div className="text-white text-center p-6">
              <h2 className="font-heading text-lg tracking-wider mb-2">
                {title}
              </h2>
              <hr className="border-slate-50" />
              <p className="mt-4 mb-8">
                {index === 0 ? 'Encerrado' : index === 1 ? '30 h' : '1 h'}
                <br />
              </p>
              <Link
                href="/servicos"
                className="inline-block bg-white text-center py-2 px-4 text-primary font-bold tracking-wider rounded-full transition-colors duration-400 hover:bg-white hover:text-primary transform hover:scale-105"
              >
                VER CURSO
              </Link>
            </div>
          </div>
        ))}
      </section>
      <section className="container mx-auto p-4">
        <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
          <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
            Depoimentos
          </h2>
        </div>
        <div className="grid grid-cols-1 max-w-[650px] mx-auto lg:grid-cols-3 lg:max-w-none gap-8">
          <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <h3 className="font-bold mb-4 text-gray-700 ">Fernanda H.</h3>
            <p className="text-slate-500 text-justify justify-center tracking-wider leading-relaxed ">
              "Minha jornada com Elaine Keyko foi verdadeiramente
              transformadora. Encontrei nela não apenas uma terapeuta
              experiente, mas uma guia compassiva. Sua abordagem única e
              personalizada desbloqueou caminhos para minha autodescoberta e
              resiliência emocional. Hoje, sou grata por ter iniciado essa
              jornada de cura."
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <h3 className="font-bold mb-4 text-gray-700">Rafael G.</h3>
            <p className="text-slate-500 text-justify justify-center tracking-wider leading-relaxed ">
              "Conhecer a Elaine foi um divisor de águas na minha vida. Sua
              integração de terapias como Thetahealing e Constelação Familiar
              criou um espaço seguro para explorar profundamente minhas
              questões. Os resultados foram além das minhas expectativas,
              proporcionando uma nova perspectiva e clareza emocional. Recomendo
              suas terapias a todos em busca de transformação genuína."
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <h3 className="font-bold mb-4 text-gray-700">Bruna F.</h3>
            <p className="text-slate-500 text-justify justify-center tracking-wider leading-relaxed ">
              "Elaine Keyko é mais do que uma terapeuta; é uma facilitadora de
              mudanças positivas. Sua atenção individualizada e compreensão
              profunda me ajudaram a superar bloqueios emocionais que eu
              carregava por anos. Cada sessão foi uma jornada única, e os
              resultados são evidentes em como enfrento a vida com mais
              equilíbrio e paz. Grata por sua orientação inspiradora."
            </p>
          </div>
        </div>
      </section>
      <FaqSection />
      <section className="container p-4 mx-auto bg-white dark:bg-neutral-50 shadow-md rounded-lg">
        <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
          <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
            Compromisso com o Bem-Estar
          </h2>
        </div>
        <div className="text-center p-4">
          <h3 className="tracking-widest font-heading text-xl text-slate-600 py-6 ">
            1. Transformação Profunda:
          </h3>

          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Estamos comprometidos em proporcionar uma transformação profunda que
            vá além das superfícies, abordando os alicerces de suas experiências
            e emoções. Cada sessão é uma oportunidade de mergulhar nas camadas
            mais profundas, desbloqueando potenciais ocultos.
          </p>

          <h3 className="tracking-widest font-heading text-xl text-slate-600 py-6 ">
            2. Abordagem Personalizada:
          </h3>

          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Sua jornada é única, e nossa abordagem é moldada para atender
            especificamente às suas necessidades individuais. Não há soluções
            universais; cada estratégia é cuidadosamente adaptada para refletir
            sua singularidade.
          </p>

          <h3 className="tracking-widest font-heading text-xl text-slate-600 py-6 ">
            3. Integralidade Biopsicossocial:
          </h3>
          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Enxergamos você em sua totalidade, reconhecendo a interconexão entre
            corpo, mente e espírito. Ao honrar essa integralidade, promovemos um
            equilíbrio que vai além do físico, permeando o âmago de sua
            existência.
          </p>

          <h3 className="tracking-widest font-heading text-xl text-slate-600 py-6 ">
            4. Apoio Contínuo:
          </h3>
          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Nosso compromisso transcende as sessões individuais; estamos aqui
            para apoiá-lo ao longo de sua jornada contínua. Seu crescimento não
            é linear; estamos aqui para fornecer suporte constante em cada
            passo, mesmo nos momentos desafiadores.
          </p>

          <h3 className="tracking-widest font-heading text-xl text-slate-600 py-6 ">
            5. Sementes de Empoderamento:
          </h3>
          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Plantamos sementes de empoderamento, nutrindo a autonomiae a
            capacidade de autorregulação. Não apenas buscamos solucionar
            desafios imediatos, mas também capacitamos você a enfrentar futuros
            obstáculos com confiança.
          </p>

          <h3 className="tracking-widest font-heading text-xl text-slate-600 py-6 ">
            Sua Transformação é Nosso Compromisso:
          </h3>
          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base mb-14"
            style={{ textIndent: '30px' }}
          >
            Em cada interação, nossa missão é clara: promover uma transformação
            profunda e duradoura, nutrindo sua jornada de autodescoberta. Seu
            bem-estar holístico é mais do que um objetivo; é a essência do nosso
            compromisso. Juntos, embarcamos na busca contínua pela sua melhor
            versão.
          </p>
        </div>
      </section>

      <section className="container mx-auto p-4">
        <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
          <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
            Inicie Sua Jornada de Transformação Agora: <br /> Agende uma Sessão
            com Elaine Keyko
          </h2>
        </div>
        <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
          <div className="p-4">
            <p
              className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base"
              style={{ textIndent: '30px' }}
            >
              Você está pronto para embarcar em uma jornada de autodescoberta e
              transformação? Elaine Keyko está aqui para guiá-lo nesse caminho
              único e pessoal. Sua jornada começa com um simples passo.
            </p>
            <h3 className="font-bold p-4 text-justify mx-auto max-w-[550px]">
              Por Que Agendar uma Sessão com Elaine Keyko?
            </h3>
            <ul className="list-disc p-4 ml-auto leading-relaxed text-justify mx-auto max-w-[550px]">
              <li>
                Abordagem Personalizada: Cada sessão é adaptada às suas
                necessidades exclusivas.
              </li>
              <li>
                Transformação Profunda: Vá além dos sintomas, explorando as
                raízes para uma mudança duradoura.
              </li>
              <li>
                Bem-Estar Holístico: Integre mente, corpo e espírito para
                alcançar equilíbrio e plenitude.
              </li>
            </ul>
            <p className="mt-4 p-4 leading-relaxed text-justify mx-auto max-w-[550px] text-lg font-bold">
              Não Espere, Inicie Agora:
            </p>
          </div>
          <div className="container mx-auto p-4 flex justify-center items-center">
            <Image
              className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block dark:hidden"
              src={image6}
              alt="Keyko Terapias pessoas na roda"
              loading="lazy"
              style={{ width: '242px', height: '390px' }}
            />
            <Image
              className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden dark:md:block w-full"
              src={image6Dark}
              alt="Keyko Terapias pessoas na roda"
              loading="lazy"
              style={{ width: '242px', height: '390px' }}
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
  )
}
