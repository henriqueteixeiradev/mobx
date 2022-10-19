import React, { useEffect, useState } from "react";
import { TodoCard } from "./containers/TodoCard";
import Cookies from "js-cookie";
import { TodoStore } from "./store";

import { observer } from "mobx-react-lite";

import * as S from "./styled";

export const Todo = observer(() => {
  const [store] = useState(() => new TodoStore());

  useEffect(() => {
    store.setTodosItems(JSON.parse(Cookies.get("_todo_") ?? "[]"));
  }, []);

  return (
    <S.Section>
      <S.Todo_Inputs_Wrapper
        onSubmit={(e) => {
          e.preventDefault();
          store.addTodoItem(store.name, store.description);
        }}
      >
        <label htmlFor="nome">
          Nome
          <S.Todo_Input
            name="nome"
            type="text"
            placeholder="Nome"
            value={store.name}
            onChange={(e) => store.setName(e.target.value)}
          />
        </label>

        <label htmlFor="descricao">
          Descrição
          <S.Todo_Input
            name="descricao"
            type="text"
            placeholder="Descrição"
            value={store.description}
            onChange={(e) => store.setDescription(e.target.value)}
          />
        </label>

        <button>Enviar</button>
      </S.Todo_Inputs_Wrapper>

      <S.Content>
        {store.todoItems.map((item) => (
          <TodoCard
            key={item.id}
            name={item.name}
            description={item.description}
            check={item.check}
            id={item.id}
            onDelete={(id) => store.deleteTodo(id)}
            onChange={(id, state) => store.changeTodo(id, state)}
          />
        ))}
      </S.Content>
    </S.Section>
  );
});
