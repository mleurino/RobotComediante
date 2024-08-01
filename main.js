const jokes = [
    ["¿Cómo organizan una fiesta los robots?",
    "¡Ponen los bits en su lugar!."],
    ["¿Cómo se despiden los robots?",
    "¡Hasta el próximo circuito!"], 
    ["¿Por qué los robots no juegan a las escondidas?",
    "Porque siempre encuentran el lugar adecuado"],
    ["¿Qué hace un robot cuando está cansado?",
    "¡Se pone en modo reposo!"]
];
let jokeIndex = 0;

const chatContent = document.querySelector(".chat-content");
const buttonHidden = document.getElementById("jokeButton");

function appendBotMessage(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";

    const avatar = document.createElement("div");
    avatar.className = "fas fa-robot message-avatar";

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;

    messageDiv.append(avatar);
    chatContent.appendChild(messageDiv);
    messageDiv.appendChild(contentDiv);

    chatContent.scrollTop = chatContent.scrollHeight;
}
function appendUserMessage(){
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user-message";

    const avatar = document.createElement("div");
    avatar.className = "fas fa-smile message-avatar";

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = "Contame un chiste!";

    messageDiv.append(avatar);
    chatContent.appendChild(messageDiv);
    messageDiv.appendChild(contentDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}

appendBotMessage("Hola! Digamos que soy un robot comediante, ¡estoy aqui para hacerte reir!. ¡Hazme pensar un chiste!.");
function requestJoke(){
    appendUserMessage();
    if (jokeIndex >= jokes.length){
        appendBotMessage("Perdoname, me quede sin chistes :(");
        return;
    } 
    jokeButton.style.display = "none";
   setTimeout(function() {
    appendBotMessage("Ok, ahi va uno");
    }, 1000);
    setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][0]);
    }, 1500);
    setTimeout(function() {
        appendBotMessage(jokes[jokeIndex][1]);
        jokeIndex++;
        jokeButton.style.display = "inline-block";
    }, 4000); 
    
    
}
