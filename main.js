import { Infobip, AuthType } from "@infobip-api/sdk";

let infobip = new Infobip({
  baseUrl: "https://jdv2pv.api.infobip.com",
  apiKey: "",
  authType: AuthType.ApiKey,
});

let response = await infobip.channels.whatsapp.send({
  type: "text",
  from: "447860099299",
  to: "918754747960",
  content: {
    text: "Hello World",
  },
});

console.log(response);
