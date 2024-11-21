import { footerIcons } from "../../data";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
	return (
		<footer className='footer'>
			<img src={logo} alt='Logo icon' className='footer-img' />
			<div className='footer-links'>
				<a href='#' className='footer-link'>
					About
				</a>
				<a href='#' className='footer-link'>
					Services
				</a>
				<a href='#' className='footer-link'>
					Projects
				</a>
			</div>
			<div className='footer-icons'>
				{footerIcons.map(({ id, icon, alt }) => {
					return <img src={icon} alt={alt} className='footer-icon' key={id} />;
				})}
			</div>
		</footer>
	);
};
export default Footer;
