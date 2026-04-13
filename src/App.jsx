import SearchSection from './components/Search/Search/SearchSection.jsx';
import './App.css';
import Header from './components/Header/Header.jsx';

export default function App() {
	return (
		<div className="app-container">
			<Header />
			<SearchSection />
		</div>
	);
}
