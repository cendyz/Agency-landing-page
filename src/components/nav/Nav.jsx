import { menuContainerItems } from "../../data";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import btn from "../../assets/images/icon-hamburger.svg";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='nav-mobile'>
			<img src={logo} alt='Logo sunny side' className='nav-mobile-logo' />
			<button type='button' onClick={() => setIsOpen(!isOpen)}>
				<img src={btn} alt='Menu button' className='nav-mobile-btn' />
			</button>
			{isOpen && (
				<div className='nav-mobile-menu'>
					<ul className='menu-container'>
						{menuContainerItems.map(({ id, text }) => {
							return (
								<li className='menu-container-item' key={id}>
									<a href={`#${text}`}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
			)}
			<div className='nav-desktop-links'>
				<ul className='links-container'>
					{menuContainerItems.map(({ id, text }) => {
						return (
							<a href={`#${text}`} className='desktop-link' key={id}>
								{text}
							</a>
						);
					})}
				</ul>
			</div>
			{isOpen && <div className='nav-mobile-skew'></div>}
		</nav>
	);
};
export default Nav;
