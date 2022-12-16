import { Infobip, AuthType } from "@infobip-api/sdk";

let infobip = new Infobip({
  baseUrl: "https://jdv2pv.api.infobip.com",
  apiKey: "77e0a4abfb399978a5f0f879f87055ff-3e64c26d-724c-4f84-831f-fb2b9f1e6a44",
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