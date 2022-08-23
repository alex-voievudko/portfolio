import { motion } from 'framer-motion'
import photo from '../assets/photo-1.jpeg'
import resume from '../assets/Alex-Voievudko-Resume.pdf'
import BaseSection from './BaseSection'
import Button from './Button'
import AnimatedText from './AnimatedText'

const HeroSection = () => {
	return (
		<BaseSection classes='relative overflow-hidden pt-20 pb-20'>
			<motion.div
				initial={{ opacity: 0, y: 400 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className='flex flex-col md:flex-row'>
					<div className='flex flex-1 flex-col justify-center items-center md:items-start'>
						<h1 className='text-4xl md:text-5xl font-bold mb-5 mt-0 text-center md:text-left'>
							Hi, my name is Alex Voievudko
						</h1>
						<AnimatedText />

						<p className='mb-8 font-normal text-center md:text-left'>
							I design and code beautifully simple things, and I love what I do.
						</p>
						<div className='flex flex-row justify-center md:justify-start gap-4 md:gap-6'>
							<Button variant='primary' link={resume} traget='_blank'>
								Resume
							</Button>
							<Button
								variant='secondary'
								link='https://github.com/alex-voievudko'
							>
								View on Github
							</Button>
						</div>
					</div>
					<div className='flex flex-1 justify-center'>
						<div className='hidden md:block p-1 rounded-md bg-[#1c1c1c] shadow-lg'>
							<img className='max-h-[25rem] rounded-md' src={photo} alt='' />
						</div>
					</div>
				</div>
			</motion.div>
		</BaseSection>
	)
}

export default HeroSection
