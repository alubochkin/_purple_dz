import HeadingText from '../../HeadingText/HeadingText';
import Button from '../../Button/Button';
import Paragraph from '../../Paragraph/Paragraph';

import './SearchHeader.css';

export default function SearchHeader() {


	
	return (
		<section className="serach-header">
			<HeadingText>Поиск</HeadingText>
			<Paragraph>
				Введите название фильма, сериала или мультфильма для поиска и добавления в
				избранное.
			</Paragraph>
			<Button>Искать</Button>
		</section>
	);
}
