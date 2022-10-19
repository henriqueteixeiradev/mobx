import { makeAutoObservable, autorun } from "mobx";
import { TodoCardProps, TodoCardType } from "./types";
import Cookies from "js-cookie";

export class TodoStore {
  name = "";
  description = "";
  todoItems: TodoCardType[] = [];

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      }
    );
  }

  setName(name: string) {
    this.name = name;
  }

  setDescription(description: string) {
    this.description = description;
  }

  addTodoItem(name: string, description: string) {
    this.todoItems = [
      ...this.todoItems,
      { id: crypto.randomUUID(), name, description, check: false },
    ];
    Cookies.set("_todo_", JSON.stringify(this.todoItems));
    this.name = "";
    this.description = "";
  }

  deleteTodo(id: string) {
    this.todoItems = this.todoItems.filter((item) => item.id != id);
    Cookies.set("_todo_", JSON.stringify(this.todoItems));
  }

  changeTodo(id: string, check: boolean) {
    this.todoItems = this.todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          check,
        };
      }

      return item;
    });
    Cookies.set("_todo_", JSON.stringify(this.todoItems));
  }

  setTodosItems(todos: TodoCardType[]) {
    this.todoItems = todos;
  }
}


