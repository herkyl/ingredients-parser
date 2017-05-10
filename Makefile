build: rules-gen.pegjs
	./node_modules/pegjs/bin/pegjs rules-gen.pegjs pegjs-generated.js

rules-gen.pegjs: rules.pegjs unprecise.pegjs
	cat rules.pegjs unprecise.pegjs > rules-gen.pegjs

unprecise.pegjs:
	npm run-script --silent units > unprecise.pegjs

test: build
	node spec | node_modules/.bin/tap-spec

publish: build
	npm publish

clean:
	rm unprecise.pegjs rules-gen.pegjs pegjs-generated.js
