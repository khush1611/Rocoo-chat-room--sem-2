'use strict'
const socket = io()
//Send a message to say that I've connected
//socket.emit('newuser', {user: `${txt} has logged in`})

const $enterRoomForm = document.getElementById('enterRoom')
const $msgForm = document.getElementById('sendMsg')
const $msgList = document.getElementById('messages')


//Event listener, waiting for an incoming "newuser"
socket.on('newuser', (data) => console.log(`${data.user} has connected!`))
$enterRoomForm.addEventListener('submit', (event) => {
	event.preventDefault()

	socket.emit('chatmsg', {msg: event.currentTarget.login.value})
	event.currentTarget.login.value = ''
})


$msgForm.addEventListener('submit', (event) => {
	event.preventDefault()

	socket.emit('chatmsg', {msg: event.currentTarget.txt.value})
	event.currentTarget.txt.value = ''
})

socket.on('chatmsg', (data) => {
	const newMsg = document.createElement('li')
	$msgList.appendChild(newMsg)

	newMsg.textContent = data.msg
})


//Listen for the 'submit' of a form
//event.preventDefault()  (prevent the form from leaving the page)
//Emit a message using "chatmsg"
//Listen for "chatmsg"
//add a <li> with the chat msg to the <ol>
