import { useState } from "react";
import perfil1 from "../assets/perfil1.jpg";
import perfil2 from "../assets/perfil2.jpg";
import perfil3 from "../assets/perfil3.jpg";
import "./Testimonials.css";

function Testimonials() {
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            img: perfil1,
            text: "A EUMA superou todas as nossas expectativas. O projeto foi entregue no prazo, com atenção impecável aos detalhes e uma qualidade de construção excepcional.",
            name: "Marcos Silva",
            role: "Fundador e CEO, NovaEstrut, Lda"
        },
        {
            img: perfil2,
            text: "Trabalhar com a EUMA foi uma experiência incrível. Desde o primeiro contacto até à entrega final, tudo foi conduzido com profissionalismo.",
            name: "Ana Costa",
            role: "Investidora Imobiliária"
        },
        {
            img: perfil3,
            text: "A equipa demonstrou um elevado nível de competência técnica e atenção ao detalhe. O resultado final superou as nossas expectativas.",
            name: "João Mendes",
            role: "Diretor Executivo, BuildGroup"
        }
    ];

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section id="testimonials" className="testimonials container flex flex-col items-center py-10 px-4 md:p-10 mx-auto text-center">
            <h2>Testemunhos</h2>
            <h3>FEEDBACKS VALIOSOS QUE FALAM POR SI</h3>

            <div className="carousel-wrapper relative w-full max-w-6xl pt-10 md:py-10 overflow-hidden mx-auto">

                <div
                    className="carousel-track flex transition-transform duration-700 ease-out"
                    style={{
                        transform: `translateX(-${current * 100}%)`
                    }}
                >

                    {testimonials.map((item, index) => (
                        <div key={index} className="min-w-full flex justify-center items-center">

                            {/* CARD CENTRALIZADO */}
                            <div className="container-testimonials h-full w-full p-8 rounded-3xl flex flex-col md:flex-row gap-10 mb-10 md:mb-0">

                                <div>
                                    <img
                                        src={item.img}
                                        className="w-full h-60 md:w-120 md:h-80 rounded-xl object-cover"
                                        alt={item.name}
                                    />
                                </div>

                                <div className="relative flex flex-col justify-between text-start">
                                    <div className="leading-relaxed text-justify">
                                        <p className="aspas absolute text-8xl">&ldquo;</p>
                                        <p className="mt-16">{item.text}</p>
                                    </div>

                                    <div className="my-6 md:my-0">
                                        <p className="text-lg font-semibold">{item.name}</p>
                                        <p>{item.role}</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                <div className="absolute right-3/9 md:right-14 bottom-8 md:bottom-18 flex justify-center gap-2">
                    <button onClick={prevSlide} className="carousel-btn">
                        <i className="fa-solid fa-circle-arrow-left"></i>
                    </button>

                    <button onClick={nextSlide} className="carousel-btn">
                        <i className="fa-solid fa-circle-arrow-right"></i>
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Testimonials;