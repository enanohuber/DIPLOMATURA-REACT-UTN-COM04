import '../styles/homepage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/banner_1.png" alt="" className="logohome"></img>
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rem quos repellendus alias sed numquam mollitia, veniam nostrum, eos, vitae illum sapiente blanditiis officia ex in libero. Corporis, veritatis enim!
                        Dolorum vitae cum quidem impedit minima labore saepe? Aliquid enim repellendus sint corrupti unde eum, qui molestiae, dolor consequatur, dolore exercitationem quae odit repudiandae est numquam? Praesentium illum quaerat delectus.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rem quos repellendus alias sed numquam mollitia, veniam nostrum, eos, vitae illum sapiente blanditiis officia ex in libero. Corporis, veritatis enim!
                        Dolorum vitae cum quidem impedit minima labore saepe? Aliquid enim repellendus sint corrupti unde eum, qui molestiae, dolor consequatur, dolore exercitationem quae odit repudiandae est numquam? Praesentium illum quaerat delectus.
                    </p>

                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">juan Gomez - Zapatos.com</span>
                    </div>
                </section>
            </div>
        </main>

    );
}

export default HomePage;