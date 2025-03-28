import React, { useState } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { user: "User", text: input }];
    setMessages(newMessages);

    const response = await axios.post("http://127.0.0.1:8000/chat/", {
      user_id: "123",
      message: input,
    });

    setMessages([...newMessages, { user: "Bot", text: response.data.bot_response }]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Chatbot</h2>
      <div style={{ border: "1px solid gray", padding: "10px", minHeight: "300px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%", padding: "10px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px", marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
}

export default App;
