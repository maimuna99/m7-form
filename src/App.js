import { useState } from "react";
import IdeaForm from "./components/IdeaForm";
import "./styles.css";

export default function App() {
  const [ideas, setIdeas] = useState([]);

  // 1. Create state for the form
  // 2. Add the combined state to the idea array on submit
  // 3. Show the list of ideas below the form

  return (
    <div className="App">
      <IdeaForm />
    </div>
  );
}
