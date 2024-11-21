import { topItems } from "../../data";

const TopSection = () => {
	return (
		<>
			{topItems.map(({ id, imgMobile, imgDesktop, alt, title, text, position }) => {
				return (
					<section className={`section ${position}`} key={id}>
						<picture>
							<source srcSet={imgDesktop} media='(min-width:992px)' />
							<img src={imgMobile} alt={alt} className='article-photo' />
						</picture>
						<article className='article'>
							<h2 className='article-title'>{title}</h2>
							<p className='article-text'>{text}</p>
							<a href='#' className='article-link'>
								learn more
							</a>
						</article>
					</section>
				);
			})}
		</>
	);
};
export default TopSection;
