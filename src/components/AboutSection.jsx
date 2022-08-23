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
					className='relative z-30 w-28 h-28 p-2 border-4 border-indigo-600 rounded-full'
				/>
				<div className='relative z-50font-normal text-base max-w-2xl text-center'>
					Hello everyone! My name is{' '}
					<strong className='text-emerald-300'>Alex Voievudko</strong> I have
					been working as a manager in the game industry for the last 8 years
					but now I decided to change the direction of my carrier. Development
					always has been my passion and hobby for more than 5 years since I
					wrote the first script for my team to automate their work.
					<br />I have spent a lot of time learning JavaScrip and React
					particularly and now I am looking for new opportunities to turn my
					hobby into the real job.
				</div>
			</div>
		</BaseSection>
	)
}

export default AboutSection
