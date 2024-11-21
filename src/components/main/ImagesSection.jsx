import { itemImages } from "../../data";

const ImagesSection = () => {
	return (
		<section className='images'>
			{itemImages.map(({ id, imgDesktop, imgMobile, alt }) => {
				return (
					<picture key={id}>
						<source srcSet={imgDesktop} media='(min-width:992px)' />
						<img src={imgMobile} alt={alt} className='article-photo desktop-article-photo' />
					</picture>
				);
			})}
		</section>
	);
};
export default ImagesSection;
