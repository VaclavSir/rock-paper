const targaryen = require('targaryen');

beforeEach(function() {
	jasmine.addMatchers(targaryen.jasmine.matchers);
	targaryen.setFirebaseData({
		"games": {
			"newly-created": {
				"type": 0,
				"challenger": {
					"name": "Itchy",
					"hand": 2
				}
			},
			"accepted": {
				"type": 0,
				"challenger": {
					"name": "Itchy",
					"hand": 0
				},
				"acceptor": {
					"name": "Scratchy",
					"hand": 2
				}
			}
		}
	});
	targaryen.setFirebaseRules(require('./database.rules.json'));
});

test('New game can be created.', () => {
	expect().canWrite(
		'games/123',
		{
			"type": 0,
			"challenger": {
				"name": "Itchy",
				"hand": 2
			}
		}
	);
});

test('New game cannot change its challenge or type.', () => {
	expect().cannotWrite('games/newly-created/type', 1);
	expect().cannotWrite('games/newly-created/challenger/hand', 1);
	expect().cannotWrite('games/newly-created/challenger/name', "Poochie");
	expect().cannotWrite('games/newly-created', {
		"type": 0,
		"challenger": {
			"name": "Itchy",
			"hand": 2
		}
	});
});

test('Hand of the newly created game is not readable.', () => {
	expect().cannotRead('games/newly-created/challenger/hand');
});

test('New game\'s type and challlenger\'s name are readable.', () => {
	expect().canRead('games/newly-created/type');
	expect().canRead('games/newly-created/challenger/name');
});

test('New game can be accepted.', () => {
	expect().canWrite(
		'games/newly-created/acceptor',
		{
			"name": "Scratchy",
			"hand": 1
		}
	);
});

test('Accepted game cannot be changed.', () => {
	expect().cannotWrite('games/accepted/type', 1);
	expect().cannotWrite('games/accepted/challenger/hand', 1);
	expect().cannotWrite('games/accepted/acceptor/hand', 1);
	expect().cannotWrite('games/accepted/acceptor/name', "Disgruntled Goat");
});

test('Accepted game is readable.', () => {
	expect().canRead('games/accepted');
});
