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
      className="bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          FAQ
        </h2>
      </div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>1. O que é Terapia Integrativa?</AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                A Terapia Integrativa é uma abordagem holística que considera
                mente, <br />
                corpo e espírito. Elaine Keyko utiliza diversas técnicas para
                promover <br /> o equilíbrio e a transformação pessoal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. Quais benefícios a Terapia Integrativa pode oferecer?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                A Terapia Integrativa pode proporcionar benefícios como redução
                do estresse,
                <br />
                melhoria nas relações interpessoais, autoconhecimento e promoção
                <br /> do bem-estar emocional.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              3. Como funciona uma sessão de Terapia Integrativa com Elaine
              Keyko?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                Cada sessão é única e personalizada, adaptada às necessidades
                individuais do cliente. <br /> Elaine utiliza diversas
                abordagens para promover a transformação profunda e duradoura.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. Qual a diferença entre Terapia Integrativa e outras formas de
              terapia?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                A Terapia Integrativa se destaca por integrar diferentes
                abordagens terapêuticas, <br />
                proporcionando uma visão holística do indivíduo, enquanto outras
                terapias <br />
                podem focar em aspectos específicos.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              5. Quem pode se beneficiar da Terapia Integrativa?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                A Terapia Integrativa é indicada para qualquer pessoa que busque
                autoconhecimento,
                <br />
                equilíbrio emocional e transformação pessoal, independentemente
                do contexto <br /> ou desafio enfrentado.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              6. Quantas sessões são necessárias para perceber resultados?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                A quantidade de sessões varia conforme as necessidades e metas
                individuais. <br />
                Alguns clientes experimentam benefícios desde as primeiras
                sessões, <br />
                enquanto outros preferem um acompanhamento contínuo.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              7. A Terapia Integrativa é indicada para quais tipos de desafios
              emocionais?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                Elaine Keyko trabalha com uma variedade de desafios emocionais,
                como ansiedade, <br />
                estresse, traumas, dificuldades nos relacionamentos e questões
                ligadas ao autoconhecimento.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              8. É possível combinar a Terapia Integrativa com outros
              tratamentos?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                Sim, a Terapia Integrativa pode ser combinada com outros
                tratamentos, <br />
                integrando-se a abordagens médicas, psicológicas e alternativas
                para potencializar os resultados.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              9. Como agendar uma sessão com Elaine Keyko?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                Para agendar uma sessão, basta entrar em contato através do
                nosso site <br />
                ou dos canais de comunicação disponíveis. <br />
                Estamos aqui para guiá-lo em sua jornada de transformação.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              10. Elaine Keyko oferece serviços online ou presenciais?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                Atualmente, Elaine Keyko oferece tanto sessões presenciais
                quanto online, <br />
                proporcionando flexibilidade e acessibilidade aos clientes,{' '}
                <br />
                independentemente de sua localização.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>
              11. Qual é a Duração de uma Sessão de Terapia com Elaine Keyko?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                Cada sessão de Terapia Integrativa com Elaine Keyko tem uma
                duração específica, <br />
                geralmente variando entre 60 a 90 minutos. <br />
                Essa extensão permite uma exploração mais profunda e resultados
                mais significativos.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>
              12. Quais Métodos de Pagamento são Aceitos para as Sessões?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                Aceitamos diferentes métodos de pagamento para proporcionar
                comodidade aos clientes. <br />
                Informações detalhadas sobre formas de pagamento estarão
                disponíveis <br /> no momento do agendamento.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FaqSection
