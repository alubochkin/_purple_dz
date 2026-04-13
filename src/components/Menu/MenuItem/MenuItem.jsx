import './MenuItem.css';

export const MenuItem = ({ children, href, count, text }) => {
	return (
		<a className="menu-item" href={href}>
			{text}
			{children}
			{count && <span className="menu-item-count">{count}</span>}
		</a>
	);
};
