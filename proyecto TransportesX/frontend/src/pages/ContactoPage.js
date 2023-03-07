const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <h2>CONTACTO</h2>
            <div>
                <form action="" className="formulario">
                    <table className="">
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
                            <td colSpan="2">
                                <textarea></textarea>
                            </td>   
                        </tr>                        
                        <tr>                            
                            <td colSpan="2">
                                <button className="acciones">Enviar Datos</button>
                            </td>
                        </tr>
                    </table>
                </form>                
            </div>
            <div className="datos">
                <h2>Otas vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 431123122</li>
                    <li>Email: mail@hotmail.com</li>
                    <li>Facebook: </li>
                    <li>Twiter: </li>
                    <li>Skype: </li>
                </ul>
            </div>
    </main>

    );
}

export default ContactoPage;