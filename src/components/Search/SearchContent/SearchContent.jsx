import { FilmCard } from '../../FilmCard/FilmCard';

import './SearchContent.css';

export const SearchContent = ({ films }) => {
	return (
		<div className="search-content">
			<div className="search-content__films">
				{films?.map((film) => (
					<FilmCard key={film.id} {...film} />
				))}
			</div>
		</div>
	);
};
