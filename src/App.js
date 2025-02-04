import logo from './logo.svg';
//import './App.css';
import stateM from './StateMachine.js';

function App() {
  return (
    <html>
      <head>

        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>ChatBox in iFrame</title>
      </head>
      <body>
        <div id="chat-circle">
          <i class="material-icons">Chatbot</i>
        </div>

        <div class="chat-box">
          <div class="chat-box-header">
            ChatBot
            <span class="chat-box-toggle"><i class="material-icons">close</i></span>
          </div>
          <div class="chat-box-body">
            <div class="chat-logs">
              <div id="message"></div>
              <div id="button" class="buttons"></div>
            </div>
          </div>
        </div>
      </body>
      <script src="StateMachine.js">
      </script>
    </html>
  );
}



export default App;
