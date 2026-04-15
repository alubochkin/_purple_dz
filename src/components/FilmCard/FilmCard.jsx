import './FilmCard.css';

import star from '../../assets/img/star.svg';
import bookmark from '../../assets/img/bookmark.svg';
import like from '../../assets/img/like.svg';

export const FilmCard = ({ poster, raiting, title, isFavourites }) => {
	return (
		<div className="film-card">
			<img alt={title} src={poster} className="film-card__poster" />
			<div className="film-card__raiting">
				<img lazy src={star} />
				{raiting}
			</div>
			<div className="film-card__title">{title}</div>
			<div className="film-card__favourites">
				{isFavourites ? (
					<button className="film-card__favourites-added">
						<img lazy src={bookmark} />
						Добавлено
					</button>
				) : (
					<button className="film-card__favourites-not-added">
						<img lazy src={like} />
						Добавить
					</button>
				)}
			</div>
		</div>
	);
};
