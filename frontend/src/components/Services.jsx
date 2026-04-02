import service1 from "../assets/orcamento.png";
import service2 from "../assets/construcao.png";
import service3 from "../assets/fiscalizacao.png";
import service4 from "../assets/elaboracao.png";
import service5 from "../assets/avaliacao.png";
import service6 from "../assets/reformas.png";
import "./Services.css";

const servicesData = [
    {
        img: service1,
        title: "Orçamento e Planejamento",
        description: "Planejamento financeiro preciso para cada projeto, garantindo custo-benefício e transparência total.",
        icon: (
            <lord-icon
                src="https://cdn.lordicon.com/ytklkgsc.json"
                trigger="loop"
                stroke="bold"
                delay="1500"
                colors="primary:#ffffff,secondary:#ffffff"
            />
        )
    },
    {
        img: service2,
        title: "Execução de Obras",
        description: "Execução de obras com máxima qualidade, segurança e tecnologia de ponta, do início ao fim.",
        icon: (
            <lord-icon
                src="https://cdn.lordicon.com/zkboyyym.json"
                trigger="loop"
                stroke="bold"
                delay="1500"
                colors="primary:#ffffff,secondary:#ffffff"
            />
        )
    },
    {
        img: service3,
        title: "Fiscalização",
        description: "Monitoramento contínuo e rigoroso para garantir que cada etapa do projeto atenda aos padrões.",
        icon: (
            <lord-icon
                src="https://cdn.lordicon.com/snxksidl.json"
                trigger="loop"
                stroke="bold"
                delay="1500"
                colors="primary:#ffffff,secondary:#ffffff"
            />
        )
    },
    {
        img: service4,
        title: "Elaboração de Projetos",
        description: "Planejamento e desenvolvimento detalhado de projetos, incluindo estudo, design e execução de ideias.",
        icon: (
            <lord-icon
                src="https://cdn.lordicon.com/hmpomorl.json"
                trigger="loop"
                stroke="bold"
                delay="1500"
                colors="primary:#ffffff,secondary:#ffffff"
            />
        )
    },
    {
        img: service5,
        title: "Avaliação de Imóveis",
        description: "Análise e determinação do valor de imóveis, considerando localização, condições e mercado.",
        icon: (
            <lord-icon
                src="https://cdn.lordicon.com/tjjwskjx.json"
                trigger="loop"
                stroke="bold"
                delay="1500"
                colors="primary:#ffffff,secondary:#ffffff"
            />
        )
    },
    {
        img: service6,
        title: "Reformas e Ampliações",
        description: "Modernização, melhoria ou expansão de imóveis existentes, adaptando os espaços às novas necessidades.",
        icon: (
            <lord-icon
                src="https://cdn.lordicon.com/jkpegboq.json"
                trigger="loop"
                stroke="bold"
                delay="1500"
                colors="primary:#ffffff,secondary:#ffffff"
            />
        )
    },
];

function Services() {
    return (
        <section id="services" className="services container flex flex-col items-center py-10 px-4 md:p-10 mx-auto">
            <h2>Nossos Serviços</h2>
            <h3>QUALIDADE EM CADA ETAPA</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-w-7xl mx-auto">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.img} alt={service.title} className="service-image" />
                        <div className="service-card-content p-10">
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                        <div className="service-icon">
                            {service.icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;