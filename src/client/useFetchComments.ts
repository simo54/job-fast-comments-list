import axios from 'axios';
import { IComment } from '../types/comments';
import { COMMENTS_BASE_URL } from '../types/constants';

interface ICommentsMethods {
	findComments: (query: string) => Promise<IComment[]>;
}

export default function useFetchComments(): ICommentsMethods {
	const client = axios.create({
		// Define base url with 20 default entries
		baseURL: COMMENTS_BASE_URL,
	});

	const findComments = async (query: string): Promise<IComment[]> => {
		try {
			const { data } = await client.get(`?q=${query}`);

			return data;
		} catch (error) {
			console.log('❌ Error found - getAllComments', error);
			throw new Error();
		}
	};

	return {
		findComments,
	};
}
