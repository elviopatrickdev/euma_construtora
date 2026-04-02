import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import MapComponent from "./MapComponent";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, message } = formData;

        // Número que vai receber a mensagem (SEU número com código do país)
        const whatsappNumber = "351912814170"; 

        // Monta a mensagem
        const text =
            `Olá Eng. Djamilton, meu nome é ${name}.
            Meu número: ${phone}.
            Mensagem: ${message}`;

        // Codifica para URL
        const encodedText = encodeURIComponent(text);

        // Link do WhatsApp
        const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        // Abre o WhatsApp
        window.open(url, "_blank");

        // Reset do formulário
        setFormData({
            name: "",
            phone: "",
            message: ""
        });
    };

    return (
        <section id="contact" className="contact container flex flex-col items-center justify-center pt-8 max-w-7xl mx-auto py-10 px-4 md:p-10">
            <h2 className="text-4xl font-bold mb-2 text-gray-800">Contacto</h2>
            <h3 className="text-xl mb-10 text-gray-600">SOLICITE O SEU ORÇAMENTO</h3>

            <div className="flex flex-col lg:flex-row gap-12 w-full">

                {/* Formulário */}
                <div className="w-full lg:w-1/3 bg-white py-10 px-4 md:p-10 rounded-xl shadow-lg">
                    <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
                        <div>
                            <h5 className="text-center"><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</h5>
                            <p className="text-center text-base font-bold mb-3">Envie sua Mensagem via WhatsApp</p>
                        </div>
                        <label htmlFor="name">Nome Completo</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Djamilton Lima"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            required
                        />
                        <label htmlFor="phone">Número de WhatsApp</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="+238 992 93 33"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            required
                        />
                        <label htmlFor="message">Sua Mensagem:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Olá, gostaria de discutir sobre serviços e orçamentos."
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg p-2 w-full h-20"
                            required
                        />
                        <p className="text-center text-xs text-gray-500 mt-2 mb-5">Sua mensagem será enviada diretamente para nossa equipe no WhatsApp para um atendimento imediato.</p>
                        <button
                            type="submit"
                            className="btn-contact flex justify-center items-center gap-2 transition-all duration-300 ease-out hover:shadow-xl active:scale-95"
                        >
                            ENVIAR VIA WHATSAPP
                            <FontAwesomeIcon size="2x" icon={faWhatsapp} />
                        </button>
                    </form>
                </div>

                {/* Mapa */}
                <div className="w-full lg:w-2/3 py-10 px-4 md:p-10 rounded-xl shadow-lg">
                    <div className="sticky top-24 rounded-xl overflow-hidden">
                        <MapComponent
                            lat={16.177}
                            lng={-22.918}
                            address="Ilha da Boavista, Cabo Verde"
                            height="500px"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;