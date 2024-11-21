import arrowIcon from '../../assets/images/icon-arrow-down.svg'
import headerDesktop from "../../assets/images/desktop/image-header.jpg";
import headerMobile from "../../assets/images/mobile/image-header.jpg";

const Header = () => {
  return (
		<header className='header'>
			<h1 className='header-title'>we are creatives</h1>
			<img src={arrowIcon} alt='Arrow down icon' className='header-arrow' />
			<picture>
				<source srcSet={headerDesktop} media='(min-width:992px)' />
				<img src={headerMobile} alt='Header image' className='header-img' />
			</picture>
		</header>
	);
}
export default Header