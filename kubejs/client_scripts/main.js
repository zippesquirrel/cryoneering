console.info('Client script loaded')

let veilCommandSent = false

PlayerEvents.tick(event => {
  if (!veilCommandSent && event.player.connection) {
    event.player.connection.sendCommand('veil post_processing remove @s pmweather:sky')
    veilCommandSent = true
  }
})