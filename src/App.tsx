import React, { useState } from "react";
import { generate } from "shortid";
import MyForm from "./components/MyForm";
import MyTable from "./components/MyTable";

function App() {
  const [rows, setRows] = useState([
    {
      id: "42",
      firstName: "Max",
      lastName: "Mustermann",
      email: "max@mail.com",
    },
  ]);
  return (
    <div className="wrapper">
      <MyForm
        onSubmit={(data) => {
          setRows((currentRows) => [
            ...currentRows,
            {
              id: generate(),
              ...data,
            },
          ]);
        }}
      />
      <MyTable rows={rows} />
    </div>
  );
}

export default App;
