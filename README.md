# Tic-Tac-Toe (React + Vite)

A small Tic-Tac-Toe game built with React and Vite. This repo demonstrates a compact component structure, simple game logic, and a deploy-ready setup for GitHub Pages.

Demo: https://tic-tac-toe-nu-lilac.vercel.app/

## Features

- Two-player Tic-Tac-Toe board
- Turn log
- Game over detection and rematch
- Editable player names

## Tech

- React (v19)
- Vite

## Quick Start

Prerequisites
- Node.js (Recommended: 18+)
- npm (bundled with Node)

Install dependencies

```powershell
npm install
```

Run development server

```powershell
npm run dev
```

Build for production

```powershell
npm run build
```

Preview production build locally

```powershell
npm run preview
```

```powershell
npm run deploy
```

Notes about deploying with Vite/GitHub Pages

- The site is hosted at `https://<username>.github.io/<repo>/` (for user/organization pages the path differs).
- Vite must know the `base` path so built asset URLs include the repo name. This project sets `base: '/tic-tac-toe/'` in `vite.config.js`. If you rename the repo or change the deployment path, update `vite.config.js` and the `homepage` field in `package.json` accordingly.

## Project structure

```
index.html
package.json
vite.config.js
src/
	App.jsx
	index.jsx
	index.css
	winning-combinations.js
	assets/
	components/
		gameboard/
			GameBoard.jsx
		player/
			player.jsx
		log/
			log.jsx
		gameover/
			gameover.jsx
```


## Contributing

Small fixes and improvements welcome. Open a PR and describe the change.

## License

This project is released under the MIT License. See `LICENSE` if present or add one if you plan to open-source.


## Screenshots

![Gameplay screenshot](./public/Screenshot-1.png)

![Game over screenshot](./public/Screenshot-2.png)