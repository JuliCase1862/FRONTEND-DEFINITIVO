import { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <div className="columna left">
                <h2>Contacto Rapido</h2>
                <form action="/contacto" method="post" class="formulario" onSubmit={handleSubmit} >
                    <p>
                        <label for="nombre">Nombre</label>
                        <input className="input" type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input className="input" type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input className="input" type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
            </div>
            <div className="columna right">
                <h2>Otras via de contacto</h2>
                <p>Tambien se puede comunicar con nosotros ....</p>
                <ul>
                    <li>Telefono: 4569-2989</li>
                    <li>Email: Contacto: pepitojuarez@historizate.com</li>
                    <li>Facebook: https://www.facebook.com/julian.historizate/</li>
                </ul>
            </div>
        </main>

    );
}

export default ContactoPage