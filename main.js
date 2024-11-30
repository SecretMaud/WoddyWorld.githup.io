const socket = io();

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim() !== '') {
        socket.emit('chat message', message);
        document.getElementById('message').value = '';
    }
}

socket.on('chat message', function(msg) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Автоскролл к последнему сообщению
});

function toggleChat() {
    const chatBox = document.getElementById('chat');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}

function toggleNav() {
    var nav = document.querySelector('nav');
    var toggleBtn = document.querySelector('.toggle-btn');
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.innerHTML = '&#9658;'; // Изменяет стрелку на вправо
    } else {
        nav.classList.add('open');
        toggleBtn.classList.add('open');
        toggleBtn.innerHTML = '&#9668;'; // Изменяет стрелку на влево
    }
}

function toggleModal() {
    var modal = document.getElementById('myModal');
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        toggleModal();
    }
}
