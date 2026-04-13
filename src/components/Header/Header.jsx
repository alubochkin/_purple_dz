import Menu from '../Menu/Menu';

import logo from '../../assets/img/logo.svg';

import './Header.css';

export default function Header() {
	return (
		<header className="header">
			<img src={logo} className="header-logo" />
			<Menu />
		</header>
	);
}
