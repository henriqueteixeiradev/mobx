import React from "react";
import { TodoCardType } from "../types";

import * as S from "../styled";

interface TodoCardProps extends TodoCardType {
  onDelete: (id: string) => void;
  onChange: (id: string, state: boolean) => void;
}

export function TodoCard({
  id,
  name,
  description,
  check,
  onDelete,
  onChange,
}: TodoCardProps) {
  return (
    <S.TodoCard_Card isChecked={check}>
      <input
        type="checkbox"
        checked={check}
        onChange={() => onChange(id!, !check)}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <button
        onClick={(e) => {
          onDelete(id!);
        }}
      >
        Excluir
      </button>
    </S.TodoCard_Card>
  );
}
