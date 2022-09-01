import React, { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Container, Dropdown, Spinner } from 'react-bootstrap';
import { IComment } from '../types/comments';
import useFetchComments from '../client/useFetchComments';
import MainButton from '../components/button/MainButton';
import CommentsList from '../components/commentsList/CommentsList';
import H6 from '../components/typography/headers/h6/H6';
import { Col } from 'react-bootstrap';
import { transformBody } from '../utils/utils';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './style.scss';

const { Divider } = Dropdown;

const CommentsSection: React.FC = () => {
	const { findComments } = useFetchComments();
	const [options, setOptions] = useState<any>([]);
	const [selected, setSelected] = useState<any[]>();
	const [isInputLoading, setIsInputLoading] = useState(false);
	const [isResultLoading, setIsResultLoading] = useState(false);
	const [resultDetail, setResultDetail] = useState<IComment[]>([]);
	const [freeTextQuery, setFreeText] = useState<string | undefined>();

	const handleSearch = async (query: string) => {
		setIsInputLoading(true);
		setFreeText(query);

		const data = await findComments(query);

		setOptions(data);
		setIsInputLoading(false);
	};

	const searchInput = async () => {
		let customQuery: string;
		setIsResultLoading(true);

		// If we manually selected an item, we focuse on that element
		if (selected && selected?.length > 0) {
			customQuery = selected[0]?.name;
			// If we searched manually but we could not find anything from dropdown
		} else if (freeTextQuery) {
			customQuery = freeTextQuery;
		} else {
			setIsResultLoading(false);
			return alert('Please insert an input');
		}
		const data = await (await findComments(customQuery)).slice(0, 20);

		setResultDetail(data);

		// Cleanup selection so everytime we do a new search we have a clean situation
		setSelected(undefined);
		setIsResultLoading(false);
	};

	return (
		<>
			<Container className={'searchInput-button-wrapper'}>
				<Col sm={8} className={'searchInput-col'}>
					<AsyncTypeahead
						id={'search-comments-input'}
						labelKey="name"
						align="left"
						options={options}
						placeholder={'Try search for "lore"...'}
						onChange={setSelected}
						// minLength triggers the search
						minLength={4}
						highlightOnlyResult={true}
						isLoading={isInputLoading}
						onSearch={handleSearch}
						maxResults={20}
						className={'asynctypeahead'}
						clearButton={true}
						renderMenuItemChildren={(option: any, _, idx: number) => (
							<div className={'dropdown'} key={idx} style={{ width: '600px' }}>
								<H6 label={option.name} />
								<span>{transformBody(option.body)}</span>
								<Divider />
							</div>
						)}
					/>
				</Col>
				<Col sm={4} className={'button-col'}>
					<MainButton content={'Search'} onClick={() => searchInput()} />
				</Col>
			</Container>

			<Container className={'container-result'}>
				{!isResultLoading ? (
					<CommentsList comments={resultDetail} />
				) : (
					<div className={'spinner'}>
						<Spinner animation={'border'} />
					</div>
				)}
			</Container>
		</>
	);
};

export default CommentsSection;
