build:
	./node_modules/pegjs/bin/pegjs -o pegjs-generated.js rules.pegjs

test: build
	node spec | node_modules/.bin/tap-spec

publish: build
	npm publish
