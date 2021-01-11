// instantiating the socket obeject
const socket = io('http://localhost:3000')

// HTML Selectors
const MessageContainer = document.getElementById('message-container')
const UserMessageForm = document.querySelector('.send-container-form')
const UserMessage = document.getElementById('message-input')
const SendButton = document.getElementById('send-button')

// hardcode the username
const username = "Joe Biden"
appendMessage('You joined Chat Room')
socket.emit('New-User', username)

socket.on('chat-message', data => {
    appendMessage(`${data.username}: ${data.message}`)
})

socket.on('User-Connected', username => {
    appendMessage(`${username} Connected`)
})

socket.on('User-Disconnected', username => {
    appendMessage(`${username} Disconnected`)
})

// add event listener to the User form
UserMessageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = UserMessage.value
    appendMessage(`You: ${message}`)
    socket.emit('send-chat-message', message)
    UserMessage.value = ""
})

function appendMessage(message, ){
    const MessageElement = document.createElement('div')
    MessageElement.innerText = message

    if(!message.includes("Joe Biden")){
        MessageElement.style.marginTop = "15px"
        MessageElement.style.marginBottom = "15px"
        MessageElement.style.padding = "15px"
        MessageElement.style.paddingLeft = "-50%"
        MessageElement.style.textAlign = "right"
        MessageElement.style.backgroundColor = "lightgreen"
    }
    else{
        MessageElement.style.marginTop = "15px"
        MessageElement.style.marginBottom = "15px"
        MessageElement.style.padding = "15px"
        MessageElement.style.paddingLeft = "-50%"
        MessageElement.style.backgroundColor = "lightblue"
    }

    MessageContainer.append(MessageElement)
}


















































