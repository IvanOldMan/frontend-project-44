install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
brain-even:
	node game/brain-even.js
brain-calc:
	node game/brain-calc.js
brain-jcd:
	node games/brain-gcd.js