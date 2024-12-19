import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generate", {
        text: inputText
      });
      setGeneratedText(response.data.generated_text);
    } catch (error) {
      console.error("Er ging iets mis:", error);
    }
  };

  return (
    <div>
      <h1>Text Generation via Hugging Face GPT-2</h1>
      <textarea
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder="Typ je vraag hier..."
      />
      <button onClick={handleGenerate}>Genereer Tekst</button>
      <p>{generatedText}</p>
    </div>
  );
};

export default App;
