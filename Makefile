start:
	npm start

develop:
	npm run nodemon -- --exec npm run babel-node -- server/bin/slack.js

test:
	npm run test

lint:
	npm run eslint -- server app