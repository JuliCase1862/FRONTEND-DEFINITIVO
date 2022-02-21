import '../styles/components/pages/Nosotros.css'

const Nosotros = (props) => {
return (
<section className="holder">
        <div className="storia">
            <h2>Storia</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem a sunt eveniet non dignissimos
                suscipit esse inventore molestiae ab, necessitatibus quas et quasi, quod dolorum dolorem sint alias
                vero.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit corporis doloribus placeat, dicta modi
                minima. Voluptate iste ipsum, maxime natus nesciunt corporis minus blanditiis commodi qui iure,
                distinctio excepturi? Iste.</p>
        </div>
        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="Imagenesturcas/perfil.jpg" alt="Julián Casella" />
                    <h5>Julián Casella</h5>
                    <h6>Admin</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nulla modi, iusto perspiciatis
                        voluptatibus quis sunt at. Repudiandae atque enim expedita quas deserunt, eaque et quisquam
                        omnis recusandae ut rem?</p>
                </div>
            </div>
        </div>
</section>

);
}

export default Nosotros