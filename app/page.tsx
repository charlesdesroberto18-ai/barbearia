const whatsappUrl =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Top";

const services = [
  {
    number: "01",
    title: "Corte Top",
    description: "Corte clássico ou moderno, finalizado no seu estilo.",
    price: "R$ 55",
  },
  {
    number: "02",
    title: "Barba Completa",
    description: "Toalha quente, desenho e acabamento preciso.",
    price: "R$ 45",
  },
  {
    number: "03",
    title: "Combo da Casa",
    description: "Cabelo e barba com atendimento completo.",
    price: "R$ 90",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=85",
    alt: "Barbeiro finalizando um corte masculino",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85",
    alt: "Interior elegante de uma barbearia",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
    alt: "Atendimento profissional em uma barbearia",
  },
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Barbearia Top — início">
      <span className="brand-mark" aria-hidden="true">
        <span>BT</span>
      </span>
      <span className="brand-copy">
        <strong>Barbearia</strong>
        <b>Top</b>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="inicio">
      <div className="announcement">
        <span>Atendimento com hora marcada</span>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp: (11) 99999-9999
        </a>
      </div>

      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">A barbearia</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Agendar horário
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu">Menu</summary>
          <nav aria-label="Navegação móvel">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">A barbearia</a>
            <a href="#contato">Contato</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow light">Tradição • Estilo • Atitude</span>
          <h1 id="hero-title">Barbearia Top</h1>
          <p>
            Estilo raiz, conforto moderno e um atendimento feito para você sair na
            sua melhor versão.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Agende pelo WhatsApp
            </a>
            <a className="text-link" href="#servicos">
              Conheça os serviços <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span>Ter–Sex</span> 09h–20h <span>Sáb</span> 09h–18h
        </div>
      </section>

      <section className="intro section" id="sobre">
        <div className="section-label">
          <span>01</span>
          <p>Bem-vindo</p>
        </div>
        <div className="intro-copy">
          <span className="eyebrow">Muito além de um corte</span>
          <h2>Onde o estilo clássico encontra a sua identidade.</h2>
          <p>
            A Barbearia Top nasceu para unir técnica, conversa boa e um ambiente
            confortável. Atendemos adultos e crianças, dos cortes tradicionais aos
            visuais mais atuais.
          </p>
          <a className="underlined-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Reserve seu horário
          </a>
        </div>
        <div className="intro-image">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=88"
            alt="Cadeira de barbeiro em ambiente clássico e moderno"
          />
          <span className="image-stamp">Desde 2018</span>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="services-heading">
          <div className="section-label inverse">
            <span>02</span>
            <p>Serviços</p>
          </div>
          <div>
            <span className="eyebrow light">Cuidados essenciais</span>
            <h2>Escolha seu momento Top.</h2>
          </div>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <strong>{service.price}</strong>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Agendar ${service.title}`}>
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="difference section">
        <div className="difference-photo" role="img" aria-label="Ferramentas e atendimento de barbearia" />
        <div className="difference-copy">
          <span className="eyebrow">Nosso diferencial</span>
          <h2>Precisão nos detalhes. Leveza no atendimento.</h2>
          <p>
            Profissionais experientes, ambiente climatizado, produtos selecionados
            e estacionamento gratuito para você aproveitar cada minuto.
          </p>
          <ul>
            <li>Atendimento para adultos e crianças</li>
            <li>Agendamento rápido pelo WhatsApp</li>
            <li>Wi‑Fi e estacionamento no local</li>
          </ul>
        </div>
      </section>

      <section className="location section" id="contato">
        <div className="location-heading">
          <div className="section-label">
            <span>03</span>
            <p>Onde estamos</p>
          </div>
          <div>
            <span className="eyebrow">Venha conhecer</span>
            <h2>Seu novo ponto de estilo na cidade.</h2>
          </div>
        </div>
        <div className="info-grid">
          <article>
            <span>Endereço</span>
            <h3>Rua Exemplo, 123</h3>
            <p>Centro — São Paulo, SP<br />CEP 01000-000</p>
          </article>
          <article>
            <span>Horários</span>
            <h3>Terça a sexta</h3>
            <p>09h às 20h<br />Sábado, 09h às 18h</p>
          </article>
          <article>
            <span>Contato</span>
            <h3>(11) 99999-9999</h3>
            <p>contato@barbeariatop.com.br<br />Atendimento via WhatsApp</p>
          </article>
        </div>
      </section>

      <section className="gallery section" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <span className="eyebrow">Galeria</span>
          <h2 id="gallery-title">Estilo que fala por si.</h2>
          <a href="https://instagram.com/barbeariatop.exemplo" target="_blank" rel="noreferrer">
            @barbeariatop.exemplo ↗
          </a>
        </div>
        <div className="gallery-grid">
          {gallery.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
          ))}
        </div>
      </section>

      <section className="final-cta">
        <span className="eyebrow light">Seu horário, seu estilo</span>
        <h2>Pronto para ficar no topo?</h2>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
          Agendar agora
        </a>
      </section>

      <footer className="footer">
        <Brand />
        <div className="footer-social">
          <span>Siga a Barbearia Top</span>
          <a href="https://instagram.com/barbeariatop.exemplo" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com/barbeariatop.exemplo" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://tiktok.com/@barbeariatop.exemplo" target="_blank" rel="noreferrer">TikTok</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Barbearia Top. Todos os direitos reservados.</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Barbearia Top pelo WhatsApp">
        <span aria-hidden="true">WA</span>
      </a>
    </main>
  );
}
