document.getElementById("send-btn").addEventListener("click", sendMessage);
document
  .getElementById("user-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

function toggleChat() {
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "none" ? "flex" : "none";
}

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const message = inputField.value.trim();
  if (message) {
    addMessageToChat("You", message);
    inputField.value = "";
    setTimeout(() => {
      addMessageToChat("Bot", getBotResponse(message));
    }, 1000);
  }
}

function addMessageToChat(sender, message) {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML += `<div><strong>${sender}:</strong> ${message}</div>`;
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
  // Simple response logic (you can expand this)
  if (userMessage.toLowerCase().includes("hello")) {
    return "Hello! How can I assist you today?";
  } else if (userMessage.toLowerCase().includes("help")) {
    return "Sure! What do you need help with?";
  } else if (
    userMessage
      .toLowerCase()
      .includes("Where is the curriculum?" && "where is the curriculum page")
  ) {
    return "On the navigation bar, click Curriculum";
  } else if (userMessage.toLowerCase().includes("where is robotics")) {
    return "On the main page, there is a robotics section, with a robot picture on it. Click it, Anything else?";
  } else if (userMessage.toLowerCase().includes("thank you")) {
    return "My pleasure, always here to help. Anything more?🥂😁";
  } else if (
    userMessage.toLowerCase().includes("Why should I join this club?")
  ) {
    return "STEAM club is the future. It is a club that encorporates Science, Technology, Engineering, Arts and Mathematics in a spectacular explosion of Innovation.It has various disciplines as seen above in the menu. It is a very interesting club that opens up opportunities. Come and you will witness what no other club has to offer.";
  } else {
    return "Sorry, I didn’t understand that. Can you rephrase?";
  }
}
