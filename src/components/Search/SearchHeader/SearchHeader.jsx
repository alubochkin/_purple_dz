import { useState } from 'react';
import HeadingText from '../../UI/HeadingText/HeadingText';
import Button from '../../UI/Button/Button';
import Paragraph from '../../UI/Paragraph/Paragraph';
import Input from '../../UI/Input/Input';
import searchIcon from '../../../assets/img/search.svg'

import './SearchHeader.css';

export default function SearchHeader() {
	const [search, setSearch] = useState('');

	const searchHandler = () => {
		console.log('Ищем фильм: ' + search);
	};

	const onChangeHandler = (e) => {
		setSearch(e.target.value);
	};

	return (
		<section className="serach-header">
			<HeadingText>Поиск</HeadingText>
			<Paragraph>
				Введите название фильма, сериала или мультфильма для поиска и добавления в
				избранное.
			</Paragraph>
			<div className="search-field">
				<Input
					onChangeHandler={onChangeHandler}
					value={search}
					type="text"
					placeholder="Введите название фильма"
					icon={searchIcon}
				/>
				<Button onClick={searchHandler}>Искать</Button>
			</div>
		</section>
	);
}
