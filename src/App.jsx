import { useState, useEffect } from "react";

const App = () => {
	return (
		<>
			<nav className='nav-mobile'>
				<img src='src/img/logo.svg' alt='Logo sunny side' className='nav-mobile-logo' />
				<img src='src/img/icon-hamburger.svg' alt='Menu button' className='nav-mobile-btn' />
				<div className='nav-mobile-menu'>
					<ul className='menu-container'>
						<li className='menu-container-item'>
							<a href='#about'>About</a>
						</li>
						<li className='menu-container-item'>
							<a href='#services'>Services</a>
						</li>
						<li className='menu-container-item'>
							<a href='#projects'>Projects</a>
						</li>
						<li className='menu-container-item'>
							<a href='contact'>Contact</a>
						</li>
					</ul>
				</div>
				<div className='nav-mobile-skew'></div>
			</nav>
			<header className='header'>
				<h1 className='header-title'>we are creatives</h1>
				<img src='src/img/icon-arrow-down.svg' alt='Arrow down icon' className='header-arrow' />
				<img src='src/img/mobile/image-header.jpg' alt='Header image' className='header-img' />
			</header>
			<main className='main'>
				<img src='src/img/mobile/image-transform.jpg' alt='Egg on yellow background' className='article-photo' />
				<article className='two article'>
					<h2 className='article-title'>Transform your brand</h2>
					<p className='article-text'>
						We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
						compelling visuals that do most of the marketing for you.
					</p>
					<a href='#' className='article-link'>
						learn more
					</a>
				</article>
				<img src='src/img/mobile/image-stand-out.jpg' alt='Red glass on red background' className='article-photo' />
				<article className='four article'>
					<h2 className='article-title'>Stand out to the right audience</h2>
					<p className='article-text'>
						Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
						we’ll build and extend your brand in digital places.
					</p>
					<a href='#' className='article-link'>
						learn more
					</a>
				</article>
				<article className='article-with-img'>
					<img src='src/img/mobile/image-graphic-design.jpg' alt='Red cherries' className='article-img' />
					<div className='article-box'>
						<h2 className='article-title article-title-box'>Graphic design</h2>
						<p className='article-text article-text-text'>
							Great design makes you memorable. We deliver artwork that underscores your brand message and captures
							potential clients’ attention.
						</p>
					</div>
				</article>
				<article className='article-with-img'>
					<img src='src/img/mobile/image-photography.jpg' alt='Red cherries' className='article-img' />
					<div className='article-box'>
						<h2 className='article-title article-title-box article-title-box'>Photography</h2>
						<p className='article-text article-text-text'>
							Increase your credibility by getting the most stunning, high-quality photos that improve your business
							image.
						</p>
					</div>
				</article>
				<section className='last-section'>
					<h3 className='last-section-title'>Client testimonials</h3>
					<div className='last-section-box'>
						<img src='src/img/image-emily.jpg' alt='Profile picture' className='last-img' />
						<p className='last-info'>
							We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
							hit.
						</p>
						<p className='last-name'>Emily R.</p>
						<p className='last-job'>Marketing Director</p>
					</div>
					<div className='last-section-box'>
						<img src='src/img/image-thomas.jpg' alt='Profile picture' className='last-img' />
						<p className='last-info'>
							Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and
							enjoyable experience.
						</p>
						<p className='last-name'>Thomas S.</p>
						<p className='last-job'>Chief Operating Officer</p>
					</div>
					<div className='last-section-box'>
						<img src='src/img/image-jennie.jpg' alt='Profile picture' className='last-img' />
						<p className='last-info'>
							Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
						</p>
						<p className='last-name'>Jennie F.</p>
						<p className='last-job'>Business Owner</p>
					</div>
				</section>
				<div className='images'>
					<img src='src/img/mobile/image-gallery-milkbottles.jpg' alt='Milk bottless' className='article-photo' />
					<img src='src/img/mobile/image-gallery-orange.jpg' alt='Orange on the plate' className='article-photo' />
					<img src='src/img/mobile/image-gallery-cone.jpg' alt='Cone' className='article-photo' />
					<img src='src/img/mobile/image-gallery-sugar-cubes.jpg' alt='Sugar cubes' className='article-photo' />
				</div>
			</main>
		</>
	);
};
export default App;

//

//   Learn more

//

//

//   Learn more

//   Graphic design
//

//
//

//

//
//   Emily R.
//

//
//
//

//
//
//

//   About
//   Services
//   Projects
//   Contact
