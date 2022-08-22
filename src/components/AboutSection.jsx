import photoSmall from '../assets/photo-small.jpeg'
import BaseSection from './BaseSection'

const AboutSection = () => {
	return (
		<BaseSection
			id='about'
			title='About'
			classes='relative overflow-hidden pt-0 md:pt-20 pb-20'
		>
			<div className='bg-[#1c1c1c] shadow-lg rounded-lg ring-1 ring-black/5 flex flex-col items-center gap-6 py-12 px-5 relative bg-about-img'>
				<img
					src={photoSmall}
					alt=''
					className='relative z-50 w-28 h-28 p-2 border-4 border-indigo-600 rounded-full'
				/>
				<div className='relative z-50font-normal text-base max-w-2xl text-center'>
					Hello! My name is{' '}
					<strong className='text-emerald-300'>Alex Voievudko</strong> and I
					enjoy creating things that live on the internet. My interest in web
					development started back in 2014 when I decided to try editing custom
					Blogger themes — redesigning & modifying blogger themes taught me a
					lot about HTML & CSS!
				</div>
			</div>
		</BaseSection>
	)
}

export default AboutSection
