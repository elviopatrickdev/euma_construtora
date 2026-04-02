import { useState } from "react";
import FaqItem from "./FaqItem";
import FaqsPic from "../assets/faqs.jpg";
import "./Faqs.css";

function Faqs() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "É seguro investir em propriedades na Boavista através da EUMA?",
      answer:
        "Absolutamente. Trabalhamos dentro da legislação cabo-verdiana, garantindo transparência, segurança jurídica e acompanhamento completo do processo de aquisição e construção.",
    },
    {
      question: "Vocês oferecem projetos personalizados de alto padrão?",
      answer:
        "Sim. Desenvolvemos projetos sob medida, adaptados ao estilo de vida, preferências estéticas e objetivos de investimento de cada cliente, garantindo excelência em cada detalhe.",
    },
    {
      question: "A empresa oferece suporte para investidores internacionais?",
      answer:
        "Sim. Auxiliamos clientes estrangeiros com documentação, licenciamento e processos legais necessários para investir e construir em Cabo Verde, tornando tudo mais simples e seguro.",
    },
    {
      question: "Posso acompanhar o progresso da obra à distância?",
      answer:
        "Sim. Oferecemos relatórios detalhados, atualizações fotográficas e reuniões online, permitindo que investidores acompanhem cada fase do projeto, mesmo à distância.",
    },
    {
      question: "Oferecem consultoria para valorização e rentabilidade do imóvel?",
      answer:
        "Sim. Oferecemos consultoria especializada para ajudar nossos clientes a maximizar a valorização e rentabilidade de seus imóveis, através de estratégias personalizadas e análise de mercado.",
    },
  ];

  return (
    <section id="faqs" className="faqs container flex flex-col items-center justify-center py-10 px-4 md:p-10 max-w-7xl mx-auto">

      {/* Títulos */}
      <h2>FAQs</h2>
      <h3>QUALIDADE EM CADA ETAPA</h3>

      {/* Conteúdo */}
      <div className="flex flex-col lg:flex-row mt-8 gap-8 lg:gap-20 w-full items-center">
        <div className="lg:w-1/3 flex flex-col justify-center">
          <img
            src={FaqsPic}
            alt="FAQ"
            className="max-w-full h-103 rounded-lg object-cover"
          />
          <p className="text-img-faq m-3">
            TEM DÚVIDAS? <br /> A EUMA TEM AS RESPOSTAS.
          </p>
        </div>

        <div className="lg:w-2/3">
          <p className="title-faq text-center lg:text-start text-7xl mb-4">PERGUNTAS FREQUENTES</p>

          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              panel={`panel${index + 1}`}
              expanded={expanded}
              handleChange={handleChange}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;