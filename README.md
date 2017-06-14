# nequip - Remote online EQUIP-like GUI for QuarkNet Detectors

* Split into client/server later on
* Use websockets
* Use golang for remote side

Absolutely random notes:

remote sensor system:
all the hardware communicates over one serial channel with a small headless linux board (rpi or something)

server system:
communicates with headless linux board over the internet and creates a terminal(edited)

client side:
connects to server from web interface and does serial stuff

both the remote sensor system and the server system log the entirety of the serial thing BUT the server doesn't have to log the serial output in realtime always (only while client is connected/client needs to be able to download whole file)
