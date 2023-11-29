import Link from 'next/link'
import Image from 'next/image'
import banner from '@/public/banner.png'

export default function Home() {
  return (
    <main>
      <div className="flex bg-gradient-to-b from-primary to-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-center flex-1 py-4 h-full">
              <h1 className="text-slate-50 text-5xl tracking-wider h-full">
                Bem-vindo à Jornada de Transformação
                <br />
                <span className="text-slate-800 text-4xl font-heading font-semibold tracking-wider">
                  com Elaine Keyko, Terapeuta Integrativa!
                </span>
              </h1>
            </div>

            <div className="flex flex-col justify-end flex-1">
              <Link href="/">
                <Image
                  className="object-cover"
                  src={banner}
                  alt="Keyko Terapias logo"
                  height={540}
                  layout="intrinsic"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto text-center">
        <h1 className="px-1 py-1 text-base tracking-wider">
          Olá, sou Elaine Keyko, Terapeuta Integrativa, dedicada a conduzir
          indivíduos em uma jornada de autodescoberta e libertação. Minha
          abordagem valoriza a integralidade biopsicossocial, fundamentada em
          uma visão holística.
        </h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1 className="text-base font-bold tracking-wider text-black h-full">
          Ofereço uma abordagem única, combinando a experiência da minha
          formação acadêmica com as transformações pessoais vividas através das
          Terapias Integrativas. O objetivo é auxiliar na superação de
          obstáculos emocionais e permitir a manifestação da melhor versão de
          cada
        </h1>
      </div>
    </main>
  )
}
