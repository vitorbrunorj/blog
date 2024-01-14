'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-slate-50 dark:bg-transparent container space-y-6 mx-auto p-4"
    >
      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
          FAQ
        </h2>
      </div>
      <div className="max-w-[550px] mx-auto text-center p-4 tracking-wide">
        <Accordion type="single" collapsible className="w-full leading-relaxed">
          <AccordionItem value="item-1 justify-start">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              1. O que é Terapia Integrativa?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                A Terapia Integrativa é uma abordagem holística que considera
                mente, corpo e espírito. Elaine Keyko utiliza diversas técnicas
                para promover o equilíbrio e a transformação pessoal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              2. Quais benefícios a Terapia Integrativa pode oferecer?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                A Terapia Integrativa pode proporcionar benefícios como redução
                do estresse, melhoria nas relações interpessoais,
                autoconhecimento e promoção do bem-estar emocional.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3 justify-start">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              3. Como funciona uma sessão de Terapia Integrativa com Elaine
              Keyko?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Cada sessão é única e personalizada, adaptada às necessidades
                individuais do cliente. Elaine utiliza diversas abordagens para
                promover a transformação profunda e duradoura.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              4. Qual a diferença entre Terapia Integrativa e outras formas de
              terapia?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                A Terapia Integrativa se destaca por integrar diferentes
                abordagens terapêuticas, proporcionando uma visão holística do
                indivíduo, enquanto outras terapias podem focar em aspectos
                específicos.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              5. Quem pode se beneficiar da Terapia Integrativa?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                A Terapia Integrativa é indicada para qualquer pessoa que busque
                autoconhecimento, equilíbrio emocional e transformação pessoal,
                independentemente do contexto ou desafio enfrentado.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              6. Quantas sessões são necessárias para perceber resultados?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                A quantidade de sessões varia conforme as necessidades e metas
                individuais. Alguns clientes experimentam benefícios desde as
                primeiras sessões, enquanto outros preferem um acompanhamento
                contínuo.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              7. A Terapia Integrativa é indicada para quais tipos de desafios
              emocionais?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Elaine Keyko trabalha com uma variedade de desafios emocionais,
                como ansiedade, estresse, traumas, dificuldades nos
                relacionamentos e questões ligadas ao autoconhecimento.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              8. É possível combinar a Terapia Integrativa com outros
              tratamentos?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Sim, a Terapia Integrativa pode ser combinada com outros
                tratamentos, integrando-se a abordagens médicas, psicológicas e
                alternativas para potencializar os resultados.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              9. Como agendar uma sessão com Elaine Keyko?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Para agendar uma sessão, basta entrar em contato através do
                nosso site ou dos canais de comunicação disponíveis. Estamos
                aqui para guiá-lo em sua jornada de transformação.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              10. Elaine Keyko oferece serviços online ou presenciais?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Atualmente, Elaine Keyko oferece tanto sessões presenciais
                quanto online, proporcionando flexibilidade e acessibilidade aos
                clientes, independentemente de sua localização.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              11. Qual é a Duração de uma Sessão de Terapia com Elaine Keyko?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Cada sessão de Terapia Integrativa com Elaine Keyko tem uma
                duração específica, geralmente variando entre 60 a 90 minutos.
                Essa extensão permite uma exploração mais profunda e resultados
                mais significativos.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              12. Quais Métodos de Pagamento são Aceitos para as Sessões?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Aceitamos diferentes métodos de pagamento para proporcionar
                comodidade aos clientes. Informações detalhadas sobre formas de
                pagamento estarão disponíveis no momento do agendamento.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FaqSection
