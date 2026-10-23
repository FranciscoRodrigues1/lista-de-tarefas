import './Header.css'

function Header() {
  return (
    <header className="site-header" id="inicio">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#inicio">
          <span className="site-header__brand-mark" aria-hidden="true">
            {'</>'}
          </span>
          <span>TaskFlow</span>
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          <a href="#nova-tarefa">Nova tarefa</a>
          <a href="#tarefas">Minha lista</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
