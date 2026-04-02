import logo from "../assets/logo_03.png";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import aboutVideo from "../assets/euma_video.mp4";
import './About.css'

function About() {
    return (
        <section id="about" className="about container flex flex-col items-center py-10 px-4 md:p-10 pb-0 mx-auto">
            <h2>Sobre nós</h2>
            <h3>EUMA ENGENHARIA E CONSTRUÇÕES</h3>

            <div className="about-content flex flex-col lg:flex-row items-center mt-8 max-w-7xl">

                <div className="relative lg:w-1/2">
                    <video
                        src={aboutVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-3xl"
                    ></video>
                    <div className="absolute top-2 left-2 w-full text-center">
                        <img
                            src={logo}
                            alt="Logo da EUMA Engenharia e Construções"
                            className="max-h-16"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <p className="leading-relaxed text-justify py-10 px-4 md:p-10">
                        A <span className="font-bold">EUMA Engenharia e Construções</span>, sediada na ilha da Boa Vista, em Cabo Verde,
                        dedica-se ao desenvolvimento de projetos de engenharia e construção com elevados
                        padrões de qualidade, rigor e profissionalismo.
                        <br /><br />
                        A empresa é liderada pelo <span className="font-bold">Eng. Djamilton Lima</span>, fundador e CEO, cuja visão e experiência orientam o crescimento e a consolidação da empresa no setor da engenharia e construção.
                        <br /><br />
                        Com uma equipa qualificada e experiente, acompanhamos cada projeto desde o
                        planeamento até à execução, garantindo soluções sólidas, eficientes e adaptadas
                        às necessidades de cada cliente.
                        <br /><br />
                        O nosso compromisso é construir com responsabilidade, contribuindo para o
                        crescimento e desenvolvimento sustentável da Boa Vista e de Cabo Verde.
                    </p>
                </div>
            </div>

            {/* Avatar e card-group */}
            <div className="container-about max-w-7xl w-full rounded-3xl p-6 lg:p-10 mt-10 flex flex-col items-center">
                <h4>Menos promessas</h4>
                <div className="row">
                    <h4>mais resultados</h4>
                    <div className="avatar-group">
                        <img src={avatar1} className="avatar" />
                        <img src={avatar2} className="avatar" />
                        <img src={avatar3} className="avatar" />
                    </div>
                    <h4>com a EUMA</h4>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 my-6 w-full mx-auto">
                    <div className="card bg-white rounded-xl shadow-sm p-2 w-full flex flex-col items-center ">
                        <h3 className="text-4xl">120+</h3>
                        <p className="card-text">Orçamentos Aprovados</p>
                    </div>
                    <div className="card bg-white rounded-xl shadow-md p-2 w-full flex flex-col items-center">
                        <h3 className="text-4xl">145+</h3>
                        <p className="card-text">Clientes Satisfeitos</p>
                    </div>
                    <div className="card bg-white rounded-xl shadow-md p-2 w-full flex flex-col items-center">
                        <h3 className="text-4xl">350+</h3>
                        <p className="card-text">Projetos Concluídos</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;