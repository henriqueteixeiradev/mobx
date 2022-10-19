export type TodoCardType = {
  id?: string;
  name: string;
  description: string;
  check: boolean;
};

export interface TodoCardProps {
  todo_cards: TodoCardType[];
}
