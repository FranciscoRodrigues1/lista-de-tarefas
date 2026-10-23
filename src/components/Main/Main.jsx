import './Main.css'

function Main({
  texto,
  onTextoChange,
  tarefas,
  onSubmit,
  onAlternarConcluida,
  onExcluirTarefa,
}) {
  return (
    <main className="main-content">
      <section className="main-intro" aria-labelledby="titulo-principal">
        <p className="main-intro__eyebrow">ORGANIZE. CONCLUA. AVANCE.</p>
        <h1 id="titulo-principal">Suas tarefas, em foco.</h1>
        <p className="main-intro__description">
          Anote o que precisa estudar ou entregar e acompanhe seu progresso.
        </p>
      </section>

      <section
        className="task-panel"
        id="nova-tarefa"
        aria-labelledby="titulo-nova-tarefa"
      >
        <form className="task-form" onSubmit={onSubmit}>
          <label className="task-form__label" htmlFor="tarefa">
            <span className="task-form__step" aria-hidden="true">
              01
            </span>
            <span id="titulo-nova-tarefa">Adicione uma tarefa</span>
          </label>
          <div className="task-form__controls">
            <input
              id="tarefa"
              type="text"
              value={texto}
              onChange={onTextoChange}
              placeholder="Ex.: estudar matemática"
            />
            <button type="submit">Adicionar tarefa</button>
          </div>
        </form>

        <section
          className="task-list"
          id="tarefas"
          aria-live="polite"
          aria-labelledby="titulo-lista"
        >
          <div className="task-list__heading">
            <div>
              <p className="task-list__eyebrow">SEU PAINEL</p>
              <h2 id="titulo-lista">Minha lista</h2>
            </div>
          </div>

          {tarefas.length === 0 ? (
            <p className="task-list__empty">
              Nenhuma tarefa ainda. Adicione sua primeira tarefa acima.
            </p>
          ) : (
            <ul className="task-list__items">
              {tarefas.map((tarefa) => (
                <li
                  key={tarefa.id}
                  className={`task-list__item${tarefa.concluida ? ' task-list__item--done' : ''}`}
                >
                  <label className="task-list__task">
                    <input
                      type="checkbox"
                      checked={tarefa.concluida}
                      onChange={() => onAlternarConcluida(tarefa.id)}
                    />
                    <span>{tarefa.texto}</span>
                  </label>
                  <button
                    className="task-list__delete"
                    type="button"
                    aria-label={`Excluir tarefa: ${tarefa.texto}`}
                    onClick={() => onExcluirTarefa(tarefa.id)}
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </main>
  )
}

export default Main
