import { SearchContent } from '../SearchContent/SearchContent';
import SearchHeader from '../SearchHeader/SearchHeader';

import { films } from '../../../entries/films';

import './SearchSection.css';

export default function SearchSection() {
	return (
		<section className="searchSection">
			<SearchHeader />
			<SearchContent films={films} />
		</section>
	);
}
