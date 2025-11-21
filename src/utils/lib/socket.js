export const broadcast = (wss, event, payload) => {
    wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send(JSON.stringify({ event, payload }))
            console.log(event)
            console.log(payload)
        }
    })
}
