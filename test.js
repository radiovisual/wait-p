import test from 'ava';
import fn from './';

test('expects a number', t => {
	t.throws(() => {
		fn('unicorns');
	}, 'wait-p expects a number');
});

test('waits before returns', async t => {
	const start = new Date().getTime();
	fn(123).then(() => {
		const end = new Date().getTime();
		t.is(end - start, 123);
	});
});

test('returns a promise', t => {
	const p = fn(10);
	t.is(typeof p.then, 'function');
});
