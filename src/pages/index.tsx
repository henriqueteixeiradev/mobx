import React from "react";
import type { NextPage } from "next";

import { Todo } from "components/Todo";

const Home: NextPage = () => {
  return (
    <>
      <Todo />
      <Todo />
      <Todo />
    </>
  );
};

export default Home;
