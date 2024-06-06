import '../Styles/Destination.css';

export default function Destination() {

    return (
        <div>
            <video controls autoPlay loop className="dashboard">
                <source src="/Media/mixkit-fuel-meter-on-a-car-dashboard-20858-hd-ready.mp4" type="video/mp4"/>
            </video>
            <section className="section1">
                <h1> Sobre nós</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id porta nibh venenatis cras sed. Augue eget arcu dictum varius duis at consectetur. Dui faucibus in ornare quam viverra orci sagittis eu. Morbi non arcu risus quis varius quam quisque. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Enim praesent elementum facilisis leo vel fringilla. Enim sed faucibus turpis in eu mi. Odio aenean sed adipiscing diam donec adipiscing. Scelerisque viverra mauris in aliquam sem. Justo laoreet sit amet cursus sit amet dictum sit. Et magnis dis parturient montes. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ullamcorper malesuada proin libero nunc consequat interdum. Est sit amet facilisis magna etiam tempor orci eu lobortis.</p>
            </section>
            <section className="reviews">
                <div className="review1">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt="" className="profilePicture1"/>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="review2">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt=""className="profilePicture2"/>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="review3">
                    <img src="/Media/404-4042710_circle-profile-picture-png-transparent-png.png" alt=""className="profilePicture3"/>
                    <h2>Name</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </section>
            <section className="section2">
                <div className="left">
                    <h2>Contact-nos</h2>
                    <ul>
                        <li>Email:</li>
                        <li>Telemóvel:</li>
                        <li>Whatsapp:</li>
                        <li>Localização</li>
                    </ul>
                </div>
                <div className="right">
                    <h3>Faça já a sua marcação</h3>
                    <h3><a href='/'>Taxi Privado</a></h3>
                    <h3><a href='/'>Turismo por Sintra</a></h3>
                </div>

            </section>
        </div>
    )


}