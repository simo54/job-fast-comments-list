import React from 'react';
import { transformBody } from './utils';

describe('SearchInput', () => {
	test('transformBody', () => {
		const element = transformBody('test', 1);
		expect(element).toStrictEqual('t...');
	});
});
