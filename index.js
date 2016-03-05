'use strict';
require('native-promise-only');

module.exports = function (ms) {
	if (typeof ms !== 'number') {
		throw new TypeError('wait-p expects a number');
	}

	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve();
		}, ms);
	});
};
