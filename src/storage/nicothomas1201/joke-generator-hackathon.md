

 File: .env.example
 API_JOKE='' # API URL for jokes

 File: .eslintignore
 dist
node_modules
.github

 File: .eslintrc.cjs
 module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'eslint-config-standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['unused-imports'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
}


 File: .gitignore
 # build output
dist/

# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# environment variables
.env
.env.production

# macOS-specific files
.DS_Store

# jetbrains setting folder
.idea/


 File: .prettierignore
 dist
node_modules
.github

 File: .prettierrc
 {
  "semi": false,
  "trailingComma": "all",
  "singleQuote": true,
  "arrowParens": "always",
  "jsxSingleQuote": false,
  "printWidth": 120,
  "plugins": ["prettier-plugin-astro"],
  "overrides": [{ "files": "*.astro", "options": { "parser": "astro" } }, {
    "files": ["*.json", "*.md", "*.toml", "*.yml"],
    "options": { "useTabs": false }
  }]
}


 File: astro.config.mjs
 import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false
  },
  integrations: [react()],
  adapter: vercel()
});

 File: Card.astro
 ---
interface Props {
  left?: string
  top?: string
  scale?: string
  rotation?: string
  animation?: { translateX: string; translateY: string }
  animationDelay?: string
}

const { left, rotation, scale, top, animation, animationDelay } = Astro.props
var translateX = animation?.translateX ?? '0%'
var translateY = animation?.translateY ?? '0%'
---

<div
  style={`--top: ${top}; --left: ${left}; --rotate: ${rotation}; --scale: ${scale ?? '100%'}; --translateX: ${translateX}; --translateY: ${translateY}; --delay: ${animationDelay ?? '0s'}`}
  class="card"
>
  <slot />
  <span> lorempin lor lorempin su sum lorem loremiptsum </span>
</div>

<style>
  :root {
    --top: 0;
    --left: 0;
    --rotate: 10deg;
    --scale: 0%;
    --translateX: 0%;
    --translateY: 0%;
    --delay: 0s;
  }

  .card {
    position: absolute;
    top: var(--top);
    left: var(--left);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
    border: none;
    background-color: #212121;
    color: #ffffff6b;
    font: var(--card-ui);
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 10px;
    animation: fadeIn 0.8s ease-out forwards;
    animation-delay: var(--delay);
    overflow: hidden;
    cursor: pointer;
    height: 200px;
    opacity: 0;

    * {
      z-index: 1;
    }

    span {
      max-inline-size: 130px;
      text-align: center;
    }
  }

  .card::before {
    opacity: 0;
    content: '';
    position: absolute;
    height: 250px;
    width: 250px;
    background-image: conic-gradient(var(--yellow) 20deg, transparent 120deg);
  }

  .card:hover::before {
    animation: rotate 1s linear;
  }

  .card::after {
    content: '';
    position: absolute;
    width: 155px;
    height: 195px;
    border-radius: 10px;
    background-color: #212121;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(var(--translateX), var(--translateY)) rotate(var(--rotate)) scale(var(--scale));
    }
    to {
      opacity: 1;
      transform: translate(0, 0) rotate(var(--rotate)) scale(var(--scale));
    }
  }

  @keyframes moveToRight {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      top: 0;
      right: 0;
      transform: translateX(0);
    }
  }

  @keyframes rotate {
    from {
      opacity: 1;
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
      opacity: 0;
    }
  }
</style>


 File: Footer.astro
 ---
import IconRowLeft from '@/icons/IconRowLeft.astro'
import IconRowRight from '@/icons/IconRowRight.astro'
---

<footer class="footer">
  <div class="content">
    <span>designed and developed by</span>
    <div class="names-icons">
      <a href="https://github.com/Ye1der" class="name" target="_blank">Yeider</a>
      <IconRowLeft />
      <IconRowRight />
      <a href="https://github.com/nicothomas1201" class="name" target="_blank">Nicolas</a>
    </div>
  </div>
</footer>

<style>
  .footer {
    z-index: 2;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 16px;
    font: var(--body2);
    color: var(--white);

    .names-icons {
      display: flex;
      gap: 16px;
      align-items: center;

      .name {
        color: var(--yellow);
        text-decoration: none;
        transition: text-shadow 0.3s ease-in-out;

        &:first-of-type {
          transform: rotate(-15deg);
        }

        &:last-of-type {
          transform: rotate(15deg);
        }

        &:hover {
          text-shadow: 1px 1px 10px #fed7888d;
        }
      }
    }
  }
</style>


 File: Header.astro
 ---
import IconEmoji from '@/icons/IconEmoji.astro'
---

<header class="header">
  <IconEmoji />
  <h1 class="header-title">Jokes</h1>
</header>

<style>
  .header {
    inline-size: 100%;
    display: flex;
    align-items: center;
    gap: 2px;
    justify-content: center;
    padding-top: 1rem;
    z-index: 2;
    /* padding-block: 2rem; */

    .header-title {
      margin-block: 0;
      font: var(--headline1);
    }
  }
</style>


 File: index.ts
 interface Config {
  apiUrl: string
}

export const config: Config = {
  apiUrl: import.meta.env.API_JOKE,
}


 File: env.d.ts
 /// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_JOKE: string
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


 File: IconEmoji.astro
 <svg width="135" height="135" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="67.1279" cy="67.1279" r="49.141" transform="rotate(-30 67.1279 67.1279)" fill="#FED688"></circle>
  <path
    d="M36.308 69.2969C31.56 61.0732 46.3626 52.527 51.1105 60.7506"
    stroke="#212121"
    stroke-width="8"
    stroke-linecap="round"></path>
  <path
    d="M69.6137 50.0678C64.8658 41.8442 79.6683 33.2979 84.4162 41.5215"
    stroke="#212121"
    stroke-width="8"
    stroke-linecap="round"></path>
  <g clip-path="url(#clip0_6_95)">
    <path
      d="M45.0955 91.2224C44.2731 89.798 44.7611 87.9766 46.1856 87.1542L95.301 58.7974C96.7255 57.975 98.5469 58.463 99.3693 59.8874C107.593 74.1319 102.713 92.3461 88.4684 100.57L85.7782 102.123C71.5338 110.347 53.3195 105.467 45.0955 91.2224Z"
      fill="white"></path>
    <path
      d="M45.0955 91.2225C44.2731 89.798 44.7611 87.9766 46.1856 87.1541L95.3032 58.7961C96.7277 57.9737 98.5491 58.4617 99.3716 59.8862C107.596 74.1309 102.715 92.3456 88.4704 100.57L85.7791 102.124C71.5343 110.348 53.3197 105.467 45.0955 91.2225Z"
      fill="#212121"></path>
    <path
      d="M101.802 91.259C102.259 92.0391 101.996 93.0414 101.216 93.4977L72.1027 110.525C71.3226 110.982 70.3203 110.719 69.864 109.939C65.3014 102.138 67.9267 92.115 75.7278 87.5524L79.416 85.3953C87.2171 80.8327 97.2398 83.458 101.802 91.259Z"
      fill="#FF6363"></path>
  </g>
  <defs>
    <clipPath id="clip0_6_95">
      <path
        d="M45.0955 91.2224C44.2731 89.798 44.7611 87.9766 46.1856 87.1542L95.301 58.7974C96.7255 57.975 98.5469 58.463 99.3693 59.8874C107.593 74.1319 102.713 92.3461 88.4684 100.57L85.7782 102.123C71.5338 110.347 53.3195 105.467 45.0955 91.2224Z"
        fill="white"></path>
    </clipPath>
  </defs>
</svg>


 File: IconQuestion.astro
 <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M19.0412 22.3973C19.0187 21.2597 19.3968 20.1504 20.1094 19.2633C20.8219 18.3762 21.8236 17.7678 22.9392 17.5443C24.0549 17.3209 25.2136 17.4967 26.2128 18.041C27.212 18.5853 27.9881 19.4635 28.4055 20.522C29.5685 23.5401 25.6228 26.7937 25.6228 26.7937"
    stroke="white"
    stroke-opacity="0.5"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"></path>
  <path
    d="M28.0696 32.7835L28.0848 32.7777"
    stroke="white"
    stroke-opacity="0.5"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"></path>
</svg>


 File: IconRowLeft.astro
 <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_6_81)">
    <path
      d="M20.7536 45.0629L14.976 36.2954L23.7435 30.5178"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
    <path
      d="M37.4268 13.1176C39.7253 16.6055 40.544 20.8637 39.703 24.9553C38.8619 29.0469 36.4299 32.6368 32.9419 34.9352C29.7032 37.0647 25.7931 37.9252 21.9596 37.3519L14.976 36.2953"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </g>
  <defs>
    <clipPath id="clip0_6_81">
      <rect width="42" height="42" fill="white" transform="translate(58.1804 35.0701) rotate(146.616)"></rect>
    </clipPath>
  </defs>
</svg>


 File: IconRowRight.astro
 <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_6_75)">
    <path
      d="M37.9514 44.1392L43.2014 35.046L34.1081 29.796"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
    <path
      d="M19.4216 13.2338C17.333 16.8513 16.7671 21.1504 17.8482 25.1852C18.9293 29.22 21.569 32.6601 25.1865 34.7487C28.5452 36.6833 32.4994 37.3115 36.2923 36.513L43.2014 35.046"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"></path>
  </g>
  <defs>
    <clipPath id="clip0_6_75">
      <rect width="42" height="42" fill="white" transform="translate(36.373 57.373) rotate(-150)"></rect>
    </clipPath>
  </defs>
</svg>


 File: Layout.astro
 ---
import Header from '@/components/Header.astro'
import Footer from '@/components/Footer.astro'

interface Props {
  title: string
}

const { title } = Astro.props
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Astro description" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Sarina&family=Acme&family=Pacifico&family=Poppins:wght@600&display=swap"
      rel="stylesheet"
    />
    <title>{title}</title>
  </head>
  <body>
    <div class="layout">
      <Header />
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </body>
</html>
<style is:global>
  :root {
    --black: #171717;
    --white: #ffffff;
    --orange: #ff6b00;
    --yellow: #fed688;
    --green: #d5ef9a;
    --headline1: 400 5rem / normal Pacifico;
    --body2: 400 1.25rem / normal Acme;
    --body1-semibold: 600 1.5rem / normal Poppins;
    --button-semibold: 600 1.125rem / normal Poppins;
    --card-ui: 400 1rem / normal Sarina;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    background-color: var(--black);
    color: var(--white);
  }
</style>
<style>
  .layout {
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    overflow: hidden;

    main {
      z-index: 2;
    }
  }
</style>
