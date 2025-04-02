# 💬 Chatbot Frontend (React)

A simple and interactive chatbot UI built with **React** that connects to a Rasa-based backend powered by **GPT-4**, **FastAPI**, and **PostgreSQL**.

> This frontend consumes the backend API to provide seamless chatbot interactions in a clean web interface.

---

## 🚀 Features

- 🔌 Connects to Rasa-powered GPT chatbot backend
- 💬 Real-time chat interface
- 🎨 Custom styling and easy to extend
- ⚡ Fast and responsive UI using React hooks

---

## 🔗 Backend Repository

Make sure to clone and run the backend first:  
👉 [chatbot-backend](https://github.com/mayurpatidar1401/chatbot_backend)

---

## 🛠️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatbot-frontend.git
cd chatbot-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the App
The app will start at http://localhost:3000 by default.
```bash
npm start
```
### 🔧 Configuration
Update your backend API URL directly in App.js:
// Inside App.js
const response = await axios.post("http://127.0.0.1:8000/chat/", {  
  user_id: "123",
  message: input,
}); // Update this to match your FastAPI or Rasa endpoint


### 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.