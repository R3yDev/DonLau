import '../Styles/DonLau.css';

export default function DonLau() {

    return (
        <main id="Home">
            <section className="section1">
                <img src="/Media/s.JPG" alt="" className="img1" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id porta nibh venenatis cras sed. Augue eget arcu dictum varius duis at consectetur. Dui faucibus in ornare quam viverra orci sagittis eu. Morbi non arcu risus quis varius quam quisque. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Enim praesent elementum facilisis leo vel fringilla. Enim sed faucibus turpis in eu mi. Odio aenean sed adipiscing diam donec adipiscing. Scelerisque viverra mauris in aliquam sem. Justo laoreet sit amet cursus sit amet dictum sit. Et magnis dis parturient montes. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ullamcorper malesuada proin libero nunc consequat interdum. Est sit amet facilisis magna etiam tempor orci eu lobortis.    
                </p>
                </section>
                <section className="section2">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incamet cursus sit amet dictum sit. Et magnis dis parturient montes. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ullamcorper malesuada proin libero nunc consequat interdum. Est sit amet facilisis magna etiam tempor orci eu lobortis.    
                </p>
                <img src="/Media/dl_a00975613.jpg" alt="" className="img1" />
            </section>
            <section className="section3">
                    <h2>Deixa que nós tratamos do seu jantar</h2>
                    <div className='cards'>
                        <div className='card1'>
                            <div className='left'>
                            <form>
                                <label>Encomenda</label>
                                <input type="adress" placeholder="Endereço"/>
                                <input type="contact" placeholder="Telemóvel"/>
                                <input type="number" placeholder="Quantidade"/>
                                <button className='btn'>Enviar</button>
                            </form>
                            </div>
                            <div className='card2'>
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
                            <div className='card3'>
                                <h2>Brevemente</h2>
                                <p> Subscrição: Vai puder pagar mensalmente um valor e ter uma motija de gás todos os meses no final de cada mês </p>
                            </div>
                        </div>
                    </div>
            </section>   
        </main>
    )
}