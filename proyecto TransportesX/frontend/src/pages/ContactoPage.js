import '../styles/contactopage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder">            
            <div className="contacto">
                <div>
                <h2>Contacto Rapido</h2>
                <form action="" className="formulario">
                    <table className="tabla">
                        <tr>
                            <td><label for="mail">Mail</label></td>
                            <td><input type="mail" id="mail" placeholder="ingrese un mail"></input></td>
                        </tr>
                        <tr>
                            <td><label for="nombre">Nombre</label></td>
                            <td><input type="text" id="nombre" placeholder="nombre y apellido"></input></td>
                        </tr>
                        <tr>
                            <td><label for="telefono">Telefono</label></td>
                            <td><input type="text" id="telefono" placeholder="Telefono"></input></td>

                        </tr>
                        <tr>                            
                            <td><label for=""></label></td>
                            <td>
                                <textarea></textarea>
                            </td>   
                        </tr>                        
                        <tr>
                            <td></td>                            
                            <td>
                                <input type="submit" value="Enviar"/>
                            </td>
                        </tr>
                    </table>
                </form>                
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 431123122</li>
                    <li>Email: mail@hotmail.com</li>
                    <li>Facebook: </li>
                    <li>Twiter: </li>
                    <li>Skype: </li>
                </ul>
            </div>

            </div>
    </main>

    );
}

export default ContactoPage;