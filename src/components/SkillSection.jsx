import { proficient } from '../data/skills'
import BaseSection from './BaseSection'

const SkillSection = () => {
	return (
		<BaseSection
			id='skills'
			title='Skills & Tools'
			classes='relative overflow-hidden pt-0 md:pt-20 pb-20'
		>
			{proficient.length > 0 && (
				<div className='grid gap-6 grid-cols-3 md:grid-cols-6 content-center'>
					{proficient.map((item, index) => (
						<div key={index} className='flex flex-col items-center'>
							<img
								src={item.logo}
								alt=''
								loading='lazy'
								className='w-16 mb-1'
							/>
							{item.skill}
						</div>
					))}
				</div>
			)}
		</BaseSection>
	)
}

export default SkillSection
