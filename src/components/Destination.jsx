import '../Styles/Destination.css';

export default function Destination() {

    return (
        <main id="Destination">
            <video controls autoPlay loop className="dashboard">
                <source src="/Media/mixkit-fuel-meter-on-a-car-dashboard-20858-hd-ready.mp4" type="video/mp4"/>
            </video>
            <section className="section2">
                <h1> Sobre nós</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id porta nibh venenatis cras sed. Augue eget arcu dictum varius duis at consectetur. Dui faucibus in ornare quam viverra orci sagittis eu. Morbi non arcu risus quis varius quam quisque. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Enim praesent elementum facilisis leo vel fringilla. Enim sed faucibus turpis in eu mi. Odio aenean sed adipiscing diam donec adipiscing. Scelerisque viverra mauris in aliquam sem. Justo laoreet sit amet cursus sit amet dictum sit. Et magnis dis parturient montes. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ullamcorper malesuada proin libero nunc consequat interdum. Est sit amet facilisis magna etiam tempor orci eu lobortis.</p>
            </section>
            <section className="reviews">
                <div className="review1">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt="" className="profilePicture1"/>
                    <h2>Paul Anderson</h2>
                    <p>The service was amazing.</p>
                </div>
                <div className="review2">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt="" className="profilePicture1"/>
                    <h2>Pedro Sanchez</h2>
                    <p>Muy bueno, el conductor era agradable.</p>
                </div>
                <div className="review3">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt=""className="profilePicture2"/>
                    <h2>Lucas Fernando</h2>
                    <p>Adoreiii!! Super recomendo.</p>
                </div>
                <div className="review4">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt=""className="profilePicture3"/>
                    <h2>João Silva</h2>
                    <p>Gostei muito serviço da DonLau Destination.</p>
                </div>
            </section>
            <section className="section3">
                <div className="left">
                    <h2>Contact-nos</h2>
                    <dl>
                        <dt>Email:</dt>
                        <dd>machado@gmail.com</dd>
                        <dt>Telemóvel:</dt>
                        <dd>12345678</dd>
                        <dt>Whatsapp:</dt>
                        <dd>1234567890</dd> 
                    </dl>
                </div>
                <div className="right">
                    <form>
                        <label className='h2'>Faça já a sua marcação</label>
                        <input type="email" placeholder="Email"/>
                        <input type="contact" placeholder="Telemóvel"/>
                        <input type="number" placeholder="Pessoas"/>
                        <input type="number" placeholder="Quanto tempo"/>
                        <button className='btn'>Taxi Privado</button>
                        <button className='btn'>Turismo em Sintra</button>
                    </form>
                </div>

            </section>
        </main>
    )
}