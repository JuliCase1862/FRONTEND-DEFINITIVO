import '../styles/components/pages/Galeria.css'

const Galeria = (props) => {
return (
<main className="holder">
        <h2>Immagine!</h2>
        <div className="galeria">
            <div className="foto"><img src="Imagenesturcas/yasuke.jpg" alt="yasui" /></div>
            <div className="foto"><img src="Imagenesturcas/imagen.jpg" alt="moron" /></div>
            <div className="foto"><img src="Imagenesturcas/naziiii.jpg" alt="adolfo" /></div>
        </div>
    </main>
);
}

export default Galeria