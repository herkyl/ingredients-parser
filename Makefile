build: rules
	./node_modules/pegjs/bin/pegjs rules-gen.pegjs pegjs-generated.js

rules: rules.pegjs unprecise.pegjs
	cat rules.pegjs unprecise.pegjs > rules-gen.pegjs

unprecise.pegjs:
	npm run-script --silent units > unprecise.pegjs

test: build
	node spec | node_modules/.bin/tap-spec

publish: build
	npm publish
