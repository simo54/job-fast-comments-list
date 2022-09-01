import { IComment } from '../types/comments';

export const singleMockedComment = {
	postId: 1,
	id: 1,
	name: 'Test 1',
	email: '1@1',
	body: 'This is a single mocked body',
};

export function createMockedComments(size: number): IComment[] {
	if (size === 0) {
		throw new Error('Canot be 0');
	}

	let newMockedComments: IComment[] = [];

	// Added 1 to size in order to start from 1 and not from 0
	for (let index = 1; index < size + 1; index++) {
		let emptyObject = {} as IComment;
		emptyObject.postId = index;
		emptyObject.id = index;
		emptyObject.name = `Test ${index}`;
		emptyObject.email = `${index}@${index}`;
		emptyObject.body = 'This is a mocked body';

		newMockedComments.push(emptyObject);
	}

	return newMockedComments;
}
