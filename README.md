# Streaming service

This is a repository for Fullstack Streaming Service: Next.js 14, React 18, Livestreaming, Prisma, Tailwind, Shadcn-ui, Zustand

## Features:

:satellite: Streaming using RTMP / WHIP protocols (LiveKit)
:thought_balloon: Real-time chat using sockets
:closed_lock_with_key: Authentication
:camera: Thumbnail upload
:busts_in_silhouette: Following system
:no_entry_sign: Blocking system
:mag: Search results page

## Requirements

Node version 18.17 or later

## Install packages

```bash
yarn
```

## Setup .env file

```dotenv
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=

DATABASE_URL=

LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

## Setup Prisma

Add MySQL Database (I used PlanetScale)


```bash

yarn generate or (npx prisma generate)
yarn push or (npx prisma db push)

```

## Start the app

```bash
yarn dev
```