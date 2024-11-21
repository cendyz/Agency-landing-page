import { botItems } from "../../data";

const BottomSection = () => {
	return (
		<section className='last-section'>
			<h3 className='last-section-title'>Client testimonials</h3>
			<div className='last-section-container'>
				{botItems.map(({ id, text, name, job, img }) => {
					return (
						<div className='last-section-box' key={id}>
							<img src={img} alt='Profile picture' className='last-img' />
							<p className='last-info'>{text}</p>
							<p className='last-name'>{name}</p>
							<p className='last-job'>{job}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default BottomSection;
