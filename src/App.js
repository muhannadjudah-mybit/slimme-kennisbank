import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerate = async () => {
    const url_2 = "http://localhost:5000/ask";

    try {
      const response = await axios.post(url_2, {
        question: inputText
      });
      console.log("Response from ask:", response);
      setGeneratedText(response.data.answer);
    } catch (error) {
      console.error("Er ging iets mis:", error);
    }
  };

  const handleGenerateHuggingface = async () => {
    const url = "http://localhost:5000/generate";

    try {
      const response = await axios.post(url, {
        text: inputText
      });
      console.log("Response from ask:", response);
      setGeneratedText(response.data[0].generated_text);
    } catch (error) {
      console.error("Er ging iets mis:", error);
    }
  };

  return (
    <div>
      <h1>Text Generation via AWS bedrock and huggingface</h1>
      <textarea
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder="Typ je vraag hier..."
      />
      <button onClick={handleGenerate}>Genereer Tekst</button>
      <button onClick={handleGenerateHuggingface}>
        Genereer Tekst with python and huggingface
      </button>
      <p>{generatedText}</p>
    </div>
  );
};

export default App;
