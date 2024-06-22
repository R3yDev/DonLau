import '../Styles/Destination.css';

export default function Destination() {

    return (
        <main id="Destination">
            <video controls autoPlay loop className="dashboard">
                <source src="/Media/mixkit-fuel-meter-on-a-car-dashboard-20858-hd-ready.mp4" type="video/mp4"/>
            </video>
            <section className="section2">
                <h1> Sobre nós</h1>
                <p>Além do comércio de gás, a DonLau&Cia também opera um serviço de táxi privado, proporcionando transporte seguro, confortável e pontual. Ideal tanto para deslocações diárias quanto para viagens turísticas, a empresa oferece uma experiência de viagem personalizada. Os motoristas são profissionais experientes, prontos para proporcionar uma viagem agradável, seja para negócios ou lazer.</p>
            </section>
            <section className="reviews">
                <div className="review1">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt="" className="profilePicture1"/>
                    <h2>Paul Anderson</h2>
                    <img src="/Media/vecteezy_four-stars-rating-png-with-transparent-background_16016805.png" alt="" className='stars'/>
                    <p>The service was amazing.</p>
                </div>
                <div className="review2">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt="" className="profilePicture1"/>
                    <h2>Pedro Sanchez</h2>
                    <img src="/Media/vecteezy_four-stars-rating-png-with-transparent-background_16016805.png" alt="" className='stars'/>
                    <p>Muy bueno, el conductor era agradable.</p>
                </div>
                <div className="review3">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt=""className="profilePicture2"/>
                    <h2>Lucas Fernando</h2>
                    <img src="/Media/vecteezy_four-stars-rating-png-with-transparent-background_16016805.png" alt="" className='stars'/>
                    <p>Adoreiii!! Super recomendo.</p>
                </div>
                <div className="review4">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt=""className="profilePicture3"/>
                    <h2>João Silva</h2>
                    <img src="/Media/vecteezy_four-stars-rating-png-with-transparent-background_16016805.png" alt="" className='stars'/>
                    <p>Gostei muito serviço da DonLau Destination.</p>
                </div>
            </section>
            <section className="section3">
                <div className="card">
                    <img src="/Media/PrivateTaxi.jpg" alt="" className="card-img"/>
                    <div className="card-body">
                        <h2 className="card-title">Taxi Privado</h2>
                        <p className="card-description">Estou aqui para servi-lo</p>
                        <p className="card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo laoreet sit amet cursus sit amet dictum sit amet.</p>
                        <button className="card-btn">Book Driver </button>   
                    </div>
                </div>
                <div className="card">
                    <img src="https://www.loveandoliveoil.com/wp-content/uploads/2019/05/Sintra-Portugal-25-600x898.jpg" alt="" className="card-img"/>
                    <div className="card-body">
                        <h2 className="card-title">Sintra</h2>
                        <p className="card-description">Deixa-nos guiar-te</p>
                        <p className="card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo laoreet sit amet cursus sit amet dictum sit amet.</p>
                        <button className="card-btn">Book Tour</button>   
                    </div>
                </div>
                <div className="card">
                    <img src="https://media.idownloadblog.com/wp-content/uploads/2020/12/Add-New-Contact-iPhone-2048x1379.jpg" alt="" className="card-img"/>
                    <div className="card-body">
                        <h2 className="card-title">Contacto</h2>
                        <dl>
                            <dt>Email:</dt>
                            <dd>machado@gmail.com</dd>
                            <dt>Telemóvel:</dt>
                            <dd>12345678</dd>
                            <dt>Whatsapp:</dt>
                            <dd>1234567890</dd> 
                        </dl>
                    </div>
                </div>    
            </section>
        </main>
    )
}