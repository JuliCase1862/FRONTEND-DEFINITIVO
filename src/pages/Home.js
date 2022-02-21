import '../styles/components/pages/Home.css'

const Home = (props) => {
return (
<main className="holder">
        <div className="homeimg">
            <img src="Imagenesturcas/parthenon-facts-5.jpg" alt="ruinasgriegras" />
        </div>
        <div className="columnas">
            <div className="Benvenuti left">
                <h2> Benvenuti a tutti! </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat esse ab ducimus dolor vero sit,
                    veniam sequi
                    nesciunt perferendis laborum, nihil autem nam inventore similique magni quasi. Cum, sequi atque?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos debitis modi vero voluptates. Vero, et
                    enim
                    excepturi consequatur expedita sunt assumenda quas, debitis repellat ratione blanditiis, maiores
                    reprehenderit numquam soluta.</p>
            </div>
            <div className="Testimonianza right">
                <h2>Testimonianza</h2>
                <div className="testimonianza">
                    <span className="cita">Molto buono!</span>
                    <span className="autor">Antonio Salvatore - RaiItalia.com</span>
                </div>
            </div>
        </div>
    </main>


);
}

export default Home; 