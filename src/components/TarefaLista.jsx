function TarefaLista({ tarefas, onAlternarConcluida, onExcluirTarefa }) {
  return (
    <section className="lista" aria-live="polite">
      <h2>Tarefas</h2>

      {tarefas.length === 0 ? (
        <p className="vazia">
          Nenhuma tarefa ainda. Digite uma e clique em Adicionar.
        </p>
      ) : (
        <ul>
          {tarefas.map((tarefa) => (
            <li
              key={tarefa.id}
              className={tarefa.concluida ? 'concluida' : ''}
            >
              <label>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => onAlternarConcluida(tarefa.id)}
                />
                <span>{tarefa.texto}</span>
              </label>
              <button
                type="button"
                onClick={() => onExcluirTarefa(tarefa.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default TarefaLista
