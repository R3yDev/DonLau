import '../Styles/Delly.css';

export default function Delly() {

    return (
        <main id="Delly">
            <section className="section3">
                <h1>Faça já o seu pedido</h1>
                <p>
                Entendendo a crescente demanda por conveniência, a DonLau&Cia também oferece serviços de entrega ao domicílio. Seja para a entrega de botijas de gás, compras de supermercado ou outros itens essenciais, a empresa garante um serviço rápido e confiável, facilitando a vida dos seus clientes
                </p>
            </section>
            <div className="logos">
                <div className="logos-slide">
                    <img src="/Media/logo2.png" alt="" />
                    <img src="/Media/logo4.png" alt="" />
                    <img src="/Media/logo3.png" alt="" />
                    <img src="/Media/logo9.png" alt="" />
                    <img src="/Media/logo5.png" alt="" />
                    <img src="/Media/logo1.png" alt="" />
                </div>
            </div>
            <section className="video">
            <video controls autoPlay loop>
                <source src="/Media/mixkit-adding-food-to-a-shopping-cart-14991-hd-ready.mp4" type="video/mp4"/>
            </video>
            </section>
            <div className="logos">
                <div className="logos-slide">
                    <img src="/Media/logo6.png" alt="" />
                    <img src="/Media/logo7.png" alt="" />
                    <img src="/Media/logo8.png" alt="" />
                </div>
            </div>
            <section className="video">
            <video controls autoPlay loop>
                <source src="/Media/mixkit-a-man-lying-on-the-bed-scrolling-food-pictures-on-13169-hd-ready.mp4" type="video/mp4"/>
            </video>
            </section>
        </main>
    )
}