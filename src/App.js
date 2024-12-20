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
      setGeneratedText(response.data[0].generated_text);
    } catch (error) {
      console.error("Er ging iets mis:", error);
    }
  };

  return (
    <div>
      <h1>Text generation with AWS bedrock and huggingface</h1>
      <textarea
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder="Typ je vraag hier..."
      />
      <div className="container-buttons">
        <button onClick={handleGenerate}>AWS bedrock </button>
        <button onClick={handleGenerateHuggingface}>
          huggingface and python
        </button>
      </div>
      <p>{generatedText}</p>
    </div>
  );
};

export default App;
