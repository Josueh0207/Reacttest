export default function Chatbot() {
    return (
        <div>
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
        </div>
    )
}