import '../Styles/DonLau.css';

export default function DonLau() {

    return (
        <main id="Home">
            <section className="section1">
                <img src="/Media/s.JPG" alt="" className="img1" />
                <p>
                    A DonLau&Cia é uma empresa multifacetada, dedicada a oferecer uma ampla gama de serviços para satisfazer as necessidades diárias de seus clientes.
                    É impulsionada por um compromisso com a excelência em todas as suas operações. Com uma equipe dedicada e um foco constante em inovação e melhoria de serviços, a empresa continua a expandir e a melhorar suas ofertas, sempre com o objetivo de superar as expectativas dos clientes.    
                </p>
                </section>
                <section className="section2">
                <p>
                    Fundada com a visão de proporcionar conveniência e qualidade, a DonLau&Cia se destaca em três áreas principais: venda de botijas de gás, serviços de táxi privado e turismo, e entregas ao domicílio. 
                </p>
                <div className="logotipos">
                    <img src="/Media/DonLaU.png" alt="" />
                    <img src="/Media/Destination.png" alt="" />
                    <img src="/Media/Delly.png" alt="" />
                </div>    
            </section>
            <section className="section3">
                <div className="card">
                    <img src="/Media/dl_a00975613.jpg" alt="" className="card-img"/>
                    <div className="card-body">
                        <h2 className="card-title">Encomenda</h2>
                        <p className="card-info">Peça já a sua botija de gás e em 48h terá a mesma na porta da sua casa</p>
                        <button className="card-btn">Pedir</button>   
                    </div>
                </div>
                <div className="card">
                    <img src="/Media/cms-image-000035046.jpg" alt="" className="card-img"/>
                    <div className="card-body">
                        <h2 className="card-title">Gás Mensal</h2>
                        <p className="card-description">A DonLau&Cia tem o prazer de anunciar uma nova e conveniente opção para nossos clientes </p>
                        <p className="card-info">Os clientes podem assinar um plano que lhes permite receber uma botija de gás em sua casa todos os meses, sem a necessidade de fazer pedidos individuais repetidamente, basta escolher o plano que melhor se adapta às suas necessidades e deixar o resto conosco.</p>
                        <button className="card-btn">subscrever</button>   
                    </div>
                </div>
                <div className="card">
                    <img src="https://media.idownloadblog.com/wp-content/uploads/2020/12/Add-New-Contact-iPhone-2048x1379.jpg" alt="" className="card-img"/>
                    <div className="card-body">
                        <h2 className="card-title">Contactos</h2>
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