const WebSocket = require("ws");

let token = "TOKEN"; // your personal token
let site = "SITEID"; // your site's ID

let url =
    "wss://dash.iiwari.cloud/api/v1/sites/" +
    site +
    "/stream?filter=kalman&token=" +
    token;

const ws = new WebSocket(url);
ws.on("error", console.error);
ws.on("message", data => console.log(JSON.parse(data)));
