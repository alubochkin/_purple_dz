import './Menu.css';
import enter from '../../assets/img/inter.svg';
import { MenuItem } from './MenuItem/MenuItem';

export default function Menu() {
	return (
		<menu className="menu">
			<MenuItem className="menu-item" href={null} text="Поиск фильмов" count="" />
			<MenuItem className="menu-item" href={null} text="Мои фильмы" count="4" />
			<MenuItem className="menu-item" href={null} text="Войти" count="">
				<img src={enter} alt="enter" />
			</MenuItem>
		</menu>
	);
}
