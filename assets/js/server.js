document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});


function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    const chatWindow = document.getElementById("chat-window");

    // 用户消息
    const userMessage = document.createElement("div");
    userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
    userMessage.className = "user-message";
    chatWindow.appendChild(userMessage);

    document.getElementById("user-input").value = "";

    // 滚动到最新消息
    chatWindow.scrollTop = chatWindow.scrollHeight;

    fetch("https://chattpy-backend.onrender.com/SihangRobot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
    })
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then((data) => {
            // 机器人消息
            const botMessage = document.createElement("div");
            botMessage.innerHTML = `<strong>SihangRobot:</strong> ${data.response}`;
            botMessage.className = "bot-message";
            chatWindow.appendChild(botMessage);

            // 滚动到最新消息
            chatWindow.scrollTop = chatWindow.scrollHeight;
        })
        .catch((error) => {
            console.error("Error:", error);
            const errorMessage = document.createElement("div");
            errorMessage.innerHTML = `<strong>SihangRobot:</strong> 后端连接错误`;
            errorMessage.className = "bot-message";
            chatWindow.appendChild(errorMessage);

            // 滚动到最新消息
            chatWindow.scrollTop = chatWindow.scrollHeight;
        });
}
