import './styles.css';
import instaIco from '../assets/insta-ico.png';
import whatsIco from '../assets/whatsico.svg';

function Footer() {
 const phoneNumber = import.meta.env.VITE_PHONE;

    return (

        <div className="footer">
            <div className="social-media">
                <h3>Nossas Redes: </h3>
                <ul style={{display: 'flex', flexDirection: 'column',width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <li className='list-medias' ><a href="https://www.instagram.com/fjc.docesgourmet/" target='_blank' >Instagram<img src={instaIco} alt="insta-ico" id='insta-ico' /></a></li>
                    <li className='list-medias' >Facebook</li>
                    <li className='list-medias' ><a href={`https://wa.me/+55${phoneNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp <img src={whatsIco} alt="whats-ico" id='whats-ico-media' /> </a></li>
                </ul>

            </div>


            <div className='localization'>
                <h3>Nosso Endereço: </h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5588.371258274156!2d-39.29923011517457!3d-7.939354049932195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a0f5004b2d68a7%3A0xe813a28f6a1a785d!2sDelicias%20da%20Ana!5e0!3m2!1spt-BR!2sbr!4v1758811302958!5m2!1spt-BR!2sbr"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>


            <div className="contacts" id='contacts'>
                <h3>Envie-nos Uma Messagem!</h3>
                <p>Dê seu feedback!</p>
                <div className="div-form">
                    <form className="form">
                        <label htmlFor="name">Nome: </label>
                        <input type="text" name="name" id="name" placeholder="Digite Seu Nome..." />
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="Exemplo@gmail.com" />
                        <label htmlFor="message">Envie Sua Mensagem: </label>
                        <textarea name="message" id="message" placeholder='Digite aqui...'></textarea>
                        <p style={{display: 'flex',opacity: 0.7, width: '100%', height: '20px', fontSize: '10px', alignItems: 'center'}}>Favor não usar palavras obscenas! Respeite.</p>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer; // add form pro whats