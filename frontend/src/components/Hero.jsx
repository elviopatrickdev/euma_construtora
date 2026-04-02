import { useNavigate } from "react-router-dom";
import './Hero.css'
function Hero() {

    const navigate = useNavigate();

    return (

        <section className="relative w-full mx-auto px-4 pt-23 overflow-hidden">

            <div className="hero h-full flex flex-col justify-between p-6 sm:p-12 xl:p-16 z-0">

                {/* Texto Hero */}
                <div className='z-30'>
                    <h1 className='text-5xl md:text-8xl lg:text-8xl font-bold text-white'>ENGENHARIA QUE <br /> TRANSFORMA</h1>
                    <p className='hero-subtitle text-2xl md:text-5xl text-white mb-2 md:mb-10'>QUALIDADE, SEGURANÇA <br /> E COMPROMISSO</p>
                    <button className="btn-projects text-sm md:text-lg font-semibold pl-5 py-2 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300 ease-out hover:shadow-xl active:scale-95" onClick={() => navigate("/projects")}>
                        Ver Portfólio
                        <lord-icon
                            src="https://cdn.lordicon.com/jeuxydnh.json"
                            trigger="loop"
                            stroke="bold"
                            delay="1500"
                            colors="primary:#121331,secondary:#71BC42"
                            style={{ width: '24px', height: '24px', marginRight: '18px', marginBottom: '1px' }}
                        ></lord-icon>
                    </button>
                </div>
            </div>



        </section>
    )

}

export default Hero