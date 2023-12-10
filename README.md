## React Native Logo AI Generator with Open AI

### Installation
- Create an account by visiting `openai.com`
- After creating an account: 
  - [Get OPENAI_API_KEY](https://platform.openai.com/api-keys)
  - [Get OPENAI_ORG](https://platform.openai.com/account/organization)
- Change directory to the `backend`  and create a `.env` file and add the following variables to it.
```dotenv
PORT=4001
OPENAI_API_KEY=<>
OPENAI_ORG=<>
```
- Open the backend dir in your shell (terminal)
- After these have been created and added to the `.env` run `yarn install` or `npm install` from the backend dir.
- After successful installation run `yarn dev` or `npm dev` to run the backend. If this successfully starts up you should see `Node app running on 4001` in your terminal

## Run React Native
- Open the `logo-ai` dir and create a `.env` file in the root dir of the `logo-ai` dir and add the code below to it.
- I recommend using [ngrok](https://ngrok.com/) to host the backend locally and get the live url or use other services as the app wont accept a `localhost` url.

```dotenv
EXPO_PUBLIC_API_URL=<ADD URL OF LIVE BACKEND HERE>
```
- After this is completed `yarn install && yarn start` or `npm install && npm start`
- As long as you are on the same network as your machine scan the QR code on the terminal with your expo app [iOS](https://apps.apple.com/us/app/expo-go/id982107779) [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)

### NOTE
- Due to cost of OpenAI, there is a 2 requests per min rate limiter for the backend.

