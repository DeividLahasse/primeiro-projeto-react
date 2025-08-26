import React, { useState } from "react";
import { v4 as uuid } from "uuid";


import { Container, TudoLista, Input, Button, ListItem , Trash, Check, Tarefas} from "./styled.js";

function App() {
  const [list, setList] = useState([
    { id: uuid(), task: "aguardando", finished: true },
  ]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function cliqueiNoBtao() {
    
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);

    }
  }

  // Função para finalizar a tarefa
  function finalizarTarefa(id) {
    const novaLista = list.map(item => 
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(novaLista);
  }

  function deletarTarefa(id) {
    const novaLsita = list.filter(item => item.id !== id)
    setList(novaLsita)
  }

  return (
    <Container>
      <TudoLista>
        <Input onChange={inputMudou} value={inputTask} placeholder="tarefas do dia.." />
        <Button onClick={cliqueiNoBtao}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (

          list.map((item) => (
            <ListItem key={item.id} isFinished={item.finished}>
              <Check onClick={() => finalizarTarefa(item.id)} />
              {item.task}
              <Trash onClick={() => deletarTarefa(item.id)} />
            </ListItem>
          ))
        ):(
          <Tarefas src="src/assets/tarefas-3d.png" alt="tarefas" />
        )}
        </ul>
      </TudoLista>
    </Container>
  );
}

export default App;