build:
	./node_modules/pegjs/bin/pegjs rules.pegjs pegjs-generated.js

test: build
	node spec | node_modules/.bin/tap-spec

publish: build
	npm publish
