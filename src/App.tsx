import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'

const navigation = [
  { label: 'A escola', href: '#escola' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Notícias', href: '#noticias' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Etec Sales Gomes, início" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-name">ETEC <strong>SALES GOMES</strong></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="navegacao-principal"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`main-nav${menuOpen ? ' is-open' : ''}`}
          id="navegacao-principal"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#cursos" onClick={closeMenu}>
            Encontre seu curso <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Estudantes trabalhando juntos em uma atividade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span /> Educação que abre caminhos</p>
            <h1 id="hero-title">Seu próximo passo começa <em>aqui.</em></h1>
            <p className="hero-copy">
              Conhecimento, prática e novas possibilidades para construir o futuro que você imagina.
            </p>
            <a className="button button-lime" href="#cursos">
              Explore os cursos <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <a className="hero-scroll" href="#escola" aria-label="Continue para conhecer a escola">
            <ArrowDown size={17} aria-hidden="true" />
          </a>
          <p className="hero-caption">Etec Sales Gomes <span>•</span> Ensino técnico</p>
        </section>

        <section className="intro-section" id="escola" aria-labelledby="intro-title">
          <div className="intro-kicker">
            <span className="section-index">01</span>
            <span className="eyebrow">Sobre a escola</span>
          </div>
          <div className="intro-copy">
            <h2 id="intro-title">Aprender fazendo. <span>Escolher com confiança.</span></h2>
            <p>
              A Etec Sales Gomes conecta educação e prática para preparar pessoas para os desafios do mundo do trabalho. Aqui, cada escolha pode ser o começo de um novo caminho.
            </p>
            <a className="text-link" href="#cursos">
              Conheça as opções de curso <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="intro-note" aria-label="Formação técnica">
            <span className="note-symbol" aria-hidden="true">+</span>
            <p>Seu talento<br />em movimento.</p>
          </div>
        </section>

        <section className="courses-section" id="cursos" aria-labelledby="courses-title">
          <div className="courses-topline">
            <span className="section-index">02</span>
            <span className="eyebrow">Formação técnica</span>
          </div>
          <div className="courses-content">
            <div>
              <p className="small-label">O próximo capítulo é seu</p>
              <h2 id="courses-title">Encontre um curso<br />que combina com você.</h2>
            </div>
            <div className="courses-detail">
              <p>
                Estamos organizando as informações do catálogo. Enquanto isso, consulte a oferta atual de cursos técnicos no portal oficial da Etec.
              </p>
              <a
                className="button button-dark"
                href="https://etecsalesgomes.cps.sp.gov.br/ensino-tecnico/"
                target="_blank"
                rel="noreferrer"
              >
                Ver cursos no portal oficial <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="course-ribbon" aria-hidden="true">
            <span>Curiosidade</span><span>Prática</span><span>Possibilidades</span><span>Seu futuro</span>
          </div>
        </section>

        <section className="news-section" id="noticias" aria-labelledby="news-title">
          <div className="news-heading">
            <div className="intro-kicker">
              <span className="section-index">03</span>
              <span className="eyebrow">Acontece na Etec</span>
            </div>
            <h2 id="news-title">Novidades que<br /><span>movem a comunidade.</span></h2>
          </div>
          <div className="news-empty">
            <span className="news-dot" aria-hidden="true" />
            <div>
              <p className="small-label">Notícias</p>
              <p className="news-message">Esta área está sendo preparada. Em breve, novidades da comunidade escolar por aqui.</p>
            </div>
            <ArrowUpRight size={22} aria-hidden="true" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio" aria-label="Voltar ao início">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-name">ETEC <strong>SALES GOMES</strong></span>
        </a>
        <p>Educação técnica. Novos caminhos.</p>
        <a className="footer-top" href="#inicio">Voltar ao topo <ArrowUpRight size={15} aria-hidden="true" /></a>
      </footer>
    </>
  )
}

export default App