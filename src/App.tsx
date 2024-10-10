import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <ContactList />
      </div>
    </div>
  );
}

export default App;
