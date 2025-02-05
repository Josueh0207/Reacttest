import logo from './logo.svg';
import './App.css';
import './StateMachine.js';
import './Chatbot';

function App() {
  return (
    <html>
      <head>

        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>ChatBox in iFrame</title>
      </head>
      <body>
        <ChatBot />
      </body>
    </html>
  );
}



export default App;
