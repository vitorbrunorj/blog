import Link from 'next/link'
import Image from 'next/image'
import onda from '../../public/onda.png'
import ondaDark from '../../public/ondaDark.png'
import banner3 from '../../public/banner3.png'

export default function Contato(): JSX.Element {
  return (
    <>
      <main>
        <section className="container3 bg-gradient-to-b from-primary to-white dark:bg-gradient-to-b dark:from-darkPrimary dark:to-neutral-300">
          <div className="bg-gradient-to-b from-primary to-white dark:bg-gradient-to-b dark:from-darkPrimary dark:to-neutral-300 min-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-2 relative">
            <div className="flex items-start justify-center h-full">
              <h1 className="grid leading-snug text-slate-50 text-4xl sm:text-5xl tracking-wider py-6 lg:container lg:grid lg:justify-end lg:px-2 lg:py-36 ">
                <span className="font-heading">
                  Descubra terapias
                  <br />
                  integrativas e cursos
                  <br />
                </span>
                <span className="leading-snug text-slate-800 py-2 text-2xl sm:text-3xl font-semibold tracking-wider">
                  projetados para nutrir seu
                  <br />
                  bem-estar e harmonia interior.
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-6 lg:container lg:grid lg:justify-start">
              <Link href="/">
                <Image
                  className="min-w-[200px] w-[525px]"
                  src={banner3}
                  alt="Keyko Terapias imagem"
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center absolute z-10 bottom-[-1px] dark:hidden">
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
      </main>
    </>
  )
}
