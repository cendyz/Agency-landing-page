import { middleItems } from "../../data";

const MiddleSection = () => {
	return (
		<>
			{middleItems.map(({ id, title, text, imgMobile, imgDesktop, alt }) => {
				return (
					<section className='article-with-img' key={id}>
						<picture>
							<source srcSet={imgDesktop} media='(min-width:992px)' />
							<img src={imgMobile} alt={alt} className='article-img' />
						</picture>
						<article className='article-box'>
							<h2 className='article-title article-title-box'>{title}</h2>
							<p className='article-text article-text-text'>{text}</p>
						</article>
					</section>
				);
			})}
		</>
	);
};
export default MiddleSection;
