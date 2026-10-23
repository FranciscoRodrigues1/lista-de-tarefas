import { useState } from 'react'
import './App.css'
import TarefaLista from './components/TarefaLista'

function App() {
  const [texto, setTexto] = useState('')
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(evento) {
    evento.preventDefault()

    const novaTarefa = texto.trim()

    if (novaTarefa === '') {
      return
    }

    setTarefas([
      ...tarefas,
      {
        id: Date.now(),
        texto: novaTarefa,
        concluida: false,
      },
    ])
    setTexto('')
  }

  function alternarConcluida(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      ),
    )
  }

  function excluirTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <main className="app">
      <h1>Minha Lista de Tarefas</h1>
      <p className="subtitulo">Anote o que precisa estudar ou entregar.</p>

      <form className="formulario" onSubmit={adicionarTarefa}>
        <label htmlFor="tarefa">Nova tarefa</label>
        <div className="linha-formulario">
          <input
            id="tarefa"
            type="text"
            value={texto}
            onChange={(evento) => setTexto(evento.target.value)}
            placeholder="Ex.: estudar matemática"
          />
          <button type="submit">Adicionar</button>
        </div>
      </form>

      <TarefaLista
        tarefas={tarefas}
        onAlternarConcluida={alternarConcluida}
        onExcluirTarefa={excluirTarefa}
      />
    </main>
  )
}

export default App
