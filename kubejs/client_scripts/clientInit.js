// This runs immediately when the script loads
console.info("Client script loaded!");

// Function to send data to the server
function sendToServer() {
    // Use Client.player to send a packet to the server side
    console.log('Sent Data!')
    Client.player.sendData('my_custom_channel', { 
        action: 'hello_server', 
        value: 100 
    });
}


ClientEvents.loggedIn(event => {
    sendToServer();
})

if (Client.player) {
    sendToServer();
}