import './Input.css';

export default function Input({ type = 'text', value, onChangeHandler, icon, ...rest }) {

	return (
		<labeL className="input-container">
			<img className='input-icon' src={icon} alt="" />
			<input
				className={"input".concat(icon ? ' withIcon' : '')}
				type={type}
				onChange={(e) => onChangeHandler(e)}
				value={value}
				{...rest}
			/>
		</labeL>
	);
}
