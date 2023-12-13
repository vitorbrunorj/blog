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
import FaqSection from '@/app/_components/faq-section'
import { FaCompass } from 'react-icons/fa'
import { PiFlowerLotusFill, PiHandsPrayingFill } from 'react-icons/pi'
import { GiLifeInTheBalance, GiBrain } from 'react-icons/gi'
import { BsPersonArmsUp } from 'react-icons/bs'

export default function Home() {
  return (
    <main>
      <section className="container3 bg-gradient-to-b from-primary to-white dark:bg-gradient-to-b dark:from-darkPrimary dark:to-neutral-300">
        <div className="bg-gradient-to-b from-primary to-white dark:bg-gradient-to-b dark:from-darkPrimary dark:to-neutral-300 min-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-2 relative">
          <div
            suppressHydrationWarning={true}
            className="flex items-start justify-center h-full"
          >
            <h1
              suppressHydrationWarning={true}
              className="grid leading-snug text-slate-50 text-5xl tracking-wider py-6 lg:container lg:grid lg:justify-end lg:px-2 lg:py-24 "
            >
              Bem-vindo à Jornada
              <br />
              de Transformação
              <br />
              <span
                suppressHydrationWarning={true}
                className="leading-snug text-slate-800 text-4xl font-heading font-semibold tracking-wider"
              >
                com Elaine Keyko,
                <br />
                Terapeuta Integrativa!
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center lg:mt-6 lg:container lg:grid lg:justify-start">
            <Link href="/">
              <Image
                suppressHydrationWarning={true}
                className="object-cover min-w-[200px] w-[520px]"
                src={banner}
                alt="Keyko Terapias imagem"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-end absolute z-10 bottom-[-1px] dark:hidden">
            <Link href="/">
              <Image
                className="object-cover"
                src={onda}
                alt="Keyko Terapias onda"
              />
            </Link>
          </div>
          <div className="flex-col justify-end absolute z-10 bottom-[-1px] hidden dark:flex w-full">
            <Link href="/">
              <Image
                className="object-cover"
                src={ondaDark}
                alt="Keyko Terapias onda dark"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="container2 px-2 mx-auto text-center">
        <div className="mx-auto">
          <h3 className="leading-relaxed text-base text-center font-light tracking-wider py-6 ">
            Olá, sou Elaine Keyko, Terapeuta Integrativa, <br />
            dedicada a conduzir indivíduos em uma
            <br />
            jornada de autodescoberta e libertação.
            <br />
            Mergulho na essência da integralidade biopsicossocial, <br />
            fundamentada em uma visão holística que transforma vidas. <br />
            <br />
            Ofereço uma abordagem única, <br />
            combinando a experiência <br />
            da minha formação acadêmica <br />
            com as transformações pessoais vividas
            <br />
            através das Terapias Integrativas.
            <br />
            O objetivo é auxiliar na superação
            <br />
            de obstáculos emocionais
            <br />
            e permitir a manifestação da melhor
            <br />
            versão de cada indivíduo.
          </h3>
        </div>
      </section>
      <section className="container2 flex">
        <div className="container py-2.5 px-2.5 flex justify-center items-center">
          <Image
            className="object-cover w-full h-full border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 hover:border-pink-100 ease-in-out z-10 "
            src={image2}
            alt="Keyko Terapias pessoas na roda"
          />
        </div>
      </section>
      <div className="container2 px-2 flex flex-col items-center justify-center">
        <h2 className="py-12 font-heading text-center text-2xl tracking-wider font-semibold">
          Desperte sua Melhor Versão
        </h2>
      </div>

      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50">
            <div className="p-5">
              <h5 className="font-heading text-slate-700 text-center text-2xl tracking-wider font-semibold p-2">
                <span className="flex items-center justify-center py-4">
                  <FaCompass size={40} />
                </span>
                Jornada Personalizada
              </h5>
              <p className="text-gray-500 mb-4 text-center">
                Orientação única para sua evolução. <br />
                Cada sessão é moldada para desbloquear <br />
                seu potencial máximo.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-5">
              <h5 className="font-heading text-slate-700 text-center text-2xl tracking-wider font-semibold p-2">
                <span className="flex items-center justify-center py-4">
                  <PiFlowerLotusFill size={40} />
                </span>
                Transformação Interior
              </h5>
              <p className="text-gray-500 mb-4 text-center">
                Como uma flor que desabrocha, <br />
                liberte-se de bloqueios emocionais <br />e descubra uma nova
                expressão de si mesmo.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-5">
              <h5 className="font-heading text-slate-700 text-center text-2xl tracking-wider font-semibold p-2">
                <span className="flex items-center justify-center py-4">
                  <GiLifeInTheBalance size={40} />
                </span>
                Equilíbrio Holístico
              </h5>
              <p className="text-gray-500 mb-4 text-center">
                Integro mente, corpo e espírito <br />
                para uma jornada completa <br />
                em direção à paz interior.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-5">
              <h5 className="font-heading text-slate-700 text-center text-2xl tracking-wider font-semibold p-2">
                <span className="flex items-center justify-center py-4">
                  <PiHandsPrayingFill size={40} />
                </span>
                Conexão Espiritual
              </h5>
              <p className="text-gray-500 mb-4 text-center">
                Alcance um nível mais profundo <br />
                de autoconhecimento, <br />
                conectando-se espiritualmente <br />à sua essência interior.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-5">
              <h5 className="font-heading text-slate-700 text-center text-2xl tracking-wider font-semibold p-2">
                <span className="flex items-center justify-center py-4">
                  <GiBrain size={40} />
                </span>
                Resiliência Emocional
              </h5>
              <p className="text-gray-500 mb-4 text-center">
                Fortaleça-se emocionalmente <br />
                como uma árvore resistente,
                <br />
                superando desafios com determinação.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <div className="p-5">
              <h5 className="font-heading text-slate-700 text-center text-2xl tracking-wider font-semibold p-2">
                <span className="flex items-center justify-center py-4">
                  <BsPersonArmsUp size={40} />
                </span>
                Empoderamento Pessoal
              </h5>
              <p className="text-gray-500 mb-4 text-center">
                Capacito você a manifestar sua melhor versão. <br />A
                transformação começa <br />
                quando você se empodera.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container2 px-2 flex flex-col items-center justify-center">
        <h2 className="py-12 font-heading text-center text-2xl tracking-wider font-semibold">
          Nossos cursos
        </h2>
      </div>
      <section className="container2 px-5 grid grid-cols-1 md:grid-cols-3 gap-14 ">
        {[
          'workshops 18/11',
          'Retiro Ilumina em Lumiar',
          'Terapia Individual'
        ].map((title, index) => (
          <div
            key={index}
            className="bg-primary border-4 border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              className="object-cover w-full"
              src={index === 0 ? image3 : index === 1 ? image4 : image5}
              alt="Keyko Terapias mão dadas"
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
                href="/contatos"
                className="inline-block bg-secondary text-center py-2 px-4 text-white font-semibold tracking-wider rounded-full transition-colors duration-400 hover:bg-white hover:text-primary transform hover:scale-105"
              >
                Ver Curso
              </Link>
            </div>
          </div>
        ))}
      </section>
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-200 hover:bg-pink-50 hover:opacity-90">
            <h3 className="font-bold mb-4 text-gray-700">Fernanda H.</h3>
            <p className="text-slate-500">
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
            <p className="text-slate-500">
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
            <p className="text-slate-500">
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
      <section className="container mx-auto px-6 py-8 bg-white dark:bg-neutral-50 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-700">
          Compromisso com o Bem-Estar: Transformando Vidas, Nutrindo Almas
        </h2>
        <div className="text-slate-500 text-center">
          <h3 className="font-bold mt-4 text-slate-700 tracking-wider font-heading text-lg py-2">
            1. Transformação Profunda:
          </h3>
          <p className="">
            Estamos comprometidos em proporcionar uma transformação profunda{' '}
            <br />
            que vá além das superfícies, abordando os alicerces de suas
            experiências e emoções.
          </p>
          <p className="font-semibold text-slate-600 py-2 tracking-widest text-sm">
            Cada sessão é uma oportunidade de mergulhar nas camadas mais <br />
            profundas, desbloqueando potenciais ocultos.
          </p>

          <h3 className="font-bold mt-4 text-slate-700 tracking-wider font-heading text-lg py-2">
            2. Abordagem Personalizada:
          </h3>
          <p>
            Sua jornada é única, e nossa abordagem é moldada para atender <br />
            especificamente às suas necessidades individuais.
          </p>
          <p className="font-semibold text-slate-600  py-2 tracking-widest text-sm">
            Não há soluções universais; cada estratégia é cuidadosamente <br />
            adaptada para refletir sua singularidade.
          </p>

          <h3 className="font-bold mt-4 text-slate-700 tracking-wider font-heading text-lg py-2">
            3. Integralidade Biopsicossocial:
          </h3>
          <p>
            Enxergamos você em sua totalidade, reconhecendo a interconexão entre
            corpo, mente e espírito.
          </p>
          <p className="font-semibold text-slate-600  py-2 tracking-widest text-sm">
            Ao honrar essa integralidade, promovemos um equilíbrio <br />
            que vai além do físico, permeando o âmago de sua existência.
          </p>

          <h3 className="font-bold mt-4 text-slate-700 tracking-wider font-heading text-lg py-2">
            4. Apoio Contínuo:
          </h3>
          <p>
            Nosso compromisso transcende as sessões individuais; <br />
            estamos aqui para apoiá-lo ao longo de sua jornada contínua.
          </p>
          <p className="font-semibold text-slate-600  py-2 tracking-widest text-sm">
            Seu crescimento não é linear; estamos aqui para fornecer suporte{' '}
            <br />
            constante em cada passo, mesmo nos momentos desafiadores.
          </p>

          <h3 className="font-bold mt-4 text-slate-700 tracking-wider font-heading text-lg py-2">
            5. Sementes de Empoderamento:
          </h3>
          <p>
            Plantamos sementes de empoderamento, nutrindo a autonomia <br />e a
            capacidade de autorregulação.
          </p>
          <p className="font-semibold text-slate-600 py-2 tracking-widest text-sm">
            Não apenas buscamos solucionar desafios imediatos, mas também <br />
            capacitamos você a enfrentar futuros obstáculos com confiança.
          </p>

          <h3 className="font-bold mt-4 text-slate-700 tracking-wider font-heading text-lg py-2">
            Sua Transformação é Nosso Compromisso:
          </h3>
          <p className="py-2 tracking-widest text-sm">
            Em cada interação, nossa missão é clara: promover uma transformação{' '}
            <br />
            profunda e duradoura, nutrindo sua jornada de autodescoberta. <br />
            Seu bem-estar holístico é mais do que um objetivo; <br />
            é a essência do nosso compromisso. <br /> Juntos, embarcamos na
            busca contínua pela sua melhor versão.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Inicie Sua Jornada de Transformação Agora: Agende uma Sessão com
          Elaine Keyko
        </h2>
        <div className="">
          <div>
            <p>
              Você está pronto para embarcar em uma jornada de autodescoberta e
              transformação? <br />
              Elaine Keyko está aqui para guiá-lo nesse caminho único e pessoal.
              Sua jornada começa com um simples passo.
            </p>
            <h3 className="font-bold mt-4">
              Por Que Agendar uma Sessão com Elaine Keyko?
            </h3>
            <ul className="list-disc ml-5">
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
            <p className="mt-4">Não Espere, Inicie Agora:</p>

            <div className="flex justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=5521980943935&text&type=phone_number&app_absent=0"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block transition-all duration-200 hover:scale-105"
              >
                Agende uma Sessão
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
