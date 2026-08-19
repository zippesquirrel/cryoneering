console.log('awaiting client data!')
// Listen for the custom channel sent from the client
NetworkEvents.dataReceived('my_custom_channel', event => {
    let player = event.player;
    let data = event.data;

    let action = data.getString('action');
    let value = data.getInt('value');
    player.server.runCommandSilent(`veil post_processing remove ${player.name.getString()} pmweather:sky`)
    event.server.schedule('300t', callback => {
        player.server.runCommandSilent(`veil post_processing remove ${player.name.getString()} pmweather:sky`)
        console.info(`Server got ${player.name.getString()} packet! Action: ${action}, Value: ${value}`);
    })
    
    
});
