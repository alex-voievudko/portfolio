import Button from './Button'
import Tag from './Tag'

//TODO: Create tag component
const Project = ({ project }) => {
	const { img, title, description, techStack, githubUrl, demoUrl } = project
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 pb-0'>
			<div className='p-1 rounded-md bg-[#1c1c1c]'>
				<img className='rounded h-auto' src={img} alt={title} />
			</div>
			<div className='flex flex-col justify-center items-center md:items-start mt-4'>
				<h3 className='text-2xl font-bold'>{title}</h3>
				<p className='mt-3 mb-4 text-center md:text-left'>{description}</p>
				<div className='flex content-center mb-1'>
					<div className='text-md md:text-xl font-semibold mr-2'>
						Tech Stack:
					</div>
					<div className='flex items-center mb-4'>
						{techStack.map((tech) => (
							<Tag key={tech} name={tech} />
						))}
					</div>
				</div>
				<div className='flex items-center h-16 gap-4 md:gap-6'>
					<Button variant='secondary' link={githubUrl}>
						Github
					</Button>
					<Button variant='primary' link={demoUrl}>
						Demo
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Project
