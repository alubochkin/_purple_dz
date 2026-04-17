import './Input.css';

export default function Input({ type = 'text', value, onChangeHandler, icon, ...rest }) {
	return (
		<div className="input-container">
			<img className="input-icon" src={icon} alt="" />
			<input
				name={rest.name ?? 'input'}
				className={'input'.concat(icon ? ' withIcon' : '')}
				type={type}
				onChange={(e) => onChangeHandler(e)}
				value={value}
				{...rest}
			/>
		</div>
	);
}
