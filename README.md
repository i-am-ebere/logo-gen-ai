## React Native Logo AI Generator with Open AI

### Launch Backend
- Sign up at openai.com.
- After registration:
  - [Obtain OPENAI_API_KEY](https://platform.openai.com/api-keys)
  - [Retrieve OPENAI_ORG](https://platform.openai.com/account/organization) 
- Navigate to the backend directory, create a .env file, and include the following variables:
```dotenv
PORT=4001
OPENAI_API_KEY=<YOUR_API_KEY>
OPENAI_ORG=<YOUR_ORG_KEY>
```
- Open your shell (terminal) in the backend directory.
- Once the .env file is set up, execute yarn install or npm install.
- Upon successful installation, run yarn dev or npm dev to start the backend. A successful startup will display Node app running on 4001 in your terminal.

### Launch React Native App
In the logo-ai directory, create a `.env` file at the root and add the following code:
For hosting the backend locally, consider using [ngrok](https://ngrok.io) to obtain a live URL, as the app does not accept localhost URLs.
```dotenv
EXPO_PUBLIC_API_URL=<ADD_LIVE_BACKEND_URL_HERE>
```
- Once the setup is complete, run `yarn install && yarn start` or `npm install && npm start`.
- If you are on the same network as your machine, scan the QR code on the terminal with your Expo app:  [iOS](https://apps.apple.com/us/app/expo-go/id982107779) [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US).
### IMPORTANT
Due to OpenAI costs, there is a rate limiter of 2 requests per minute for the backend.
