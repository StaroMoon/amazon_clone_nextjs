This project is an Amazon clone website with some functions. I created this project with the following stack:

- React (For front end ui)
- NextJS (For routing and server side rendering)
- NextAuth (For user authentication)
- Redux (Global state management)
- TailwindCSS (Utility css for ui)
- Firestore (Store user data)

## Functionality

- Add item to basket and remove in checkout page
- payment checkout with Stripe
- Sign in & Sign out with Google account via Next Auth
- Stripe webhook to store order on Firestore after successful payment and user can check order history.

## Why I built the project this way

- I use NextJS because it provides optimization for website performance such as image optimazation and it also provide routing and api routing.
- For state management, I used Redux because it keeps state management in one place. So, if I want to add more features to the project, it'll be easy to manage states.
- I use TailwindCSS because it helps me build the UI faster and I don't have to worry about naming the CSS classes.

## What would I change if I had more time

- I'll add unit and integrity testing with React Testing Library.
- Store user items in local storage.

## How to run this project

First, you need to clone this project then change the file `.env.example` to `.env.local` and add variables to that file.

### Google key

You can get it from [here](https://console.cloud.google.com/apis/credentials/oauthclient) both `GOOGLE_ID` and `GOOGLE_SECRET`

### Stripe key

You can get `STRIPE_PUBLIC_KEY` and `STRIPE_SECRET_KEY` from [Stripe](https://stripe.com/docs/keys)

`NEXT_PUBLIC_STRIPE_PUBLIC_KEY` is the same as `STRIPE_PUBLIC_KEY`. This is allowed NextJS to use this environment variable on client side.

`STRIPE_SIGNING_SECRET` is the secret key that you can get from running a command in Stripe CLI. Read below how to get this key.
You can ignore this key if you don't want to use Stripe webhook. This will make the order history not working after you successfully complete payment on Stripe.

### Firebase Private Key

You can get this from Firebase console at project settings > service accounts > Firebase admin SDK > generate new private key. This is the same as `STRIPE_SIGNING_SECRET`. If you don't have this key the webhook will not work.

The private key is a json file. Unfortunately, I couldn't find a better way to use json file as enviroment variables than extracting each key and value. However, if you run this locally, you can import that json file and change `serviceAccount` variable in [webhook file](https://github.com/StaroMoon/amazon_clone_nextjs/blob/main/src/pages/api/webhook.ts) to your import.

### Run the server

After you add enviroment variables, you can run the server with following commands in you project:

```
npm i
npm run dev
```

Then you can access the project at [http://localhost:3000](http://localhost:3000)

To run a webhook you need [Stripe CLI](https://stripe.com/docs/stripe-cli). After install Stripe CLI, run this command in separate terminal

```
stripe listen --forward-to localhost:3000/api/webhook
```

Then you'll get `STRIPE_SIGNING_SECRET`
