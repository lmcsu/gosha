# Gosha

Gosha is a Telegram bot that generates crude meme-style captions for uploaded images. It uses OpenAI models, Telegram Bot API, and Puppeteer/Sharp-based image processing to react to screenshots and photos with short, chaotic, internet-style responses.

## Features

- accepts image messages in Telegram
- generates a caption in Russian, Ukrainian, or English
- describes the image to help produce more context-aware captions
- caches generated captions by image hash in the `captions/` directory
- supports multiple generation strategies and fallback variants
- includes cooldown and ban-list protection for chat abuse control

## Requirements

- Node.js 18+
- pnpm or npm
- OpenAI API key
- Telegram bot token

## Installation

```bash
pnpm install
```

Then configure the required values in `config.ts`:

```ts
openaiApiKey: 'your-openai-api-key',
botToken: 'your-telegram-bot-token',
botUsername: 'your-bot-username',
```

The project also contains prompt templates and caption-generation rules in `config.ts`, which you can adjust if needed.

## Puppeteer / Chrome dependencies

On Linux, Puppeteer may require additional system packages. Install them with:

```bash
sudo apt install google-chrome ttf-mscorefonts-installer libx11-xcb1 libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0
```

## Run

```bash
pnpm start
```

## Notes

- `index.ts` contains the Telegram bot logic and caption generation pipeline.
- `captions/` stores cached caption data for repeated images.
- `ecosystem.config.cjs` is included for PM2-based process management
