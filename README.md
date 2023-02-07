# Houses

pasos, configurar ts con sequelize y express

1- npm init
2- npm i typescript @types/node ts-node ts-node-dev -D
3- npm i express dotenv 
4- npm install --save pg pg-hstore (para postgres)
5- tsc --init 
6- en el archivo tsconfig.json: 
	target: es6
	module: commonjs
	allowJs: true
	outDir: ./build
	exclude: [node_modules]
7- npm i sequelize-cli
8- npx sequelize-cli init
9- npm i --save-dev @types/express
10- poner esto en el package.json: (en scripts)
	    	    "build": "npx tsc", 
    "start": "node build/index.js",
    "dev": "tsnd --respawn index.ts"
11 - correr npm run dev
