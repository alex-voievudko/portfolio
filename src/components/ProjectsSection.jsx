import { projectList } from '../data/projects'
import BaseSection from './BaseSection'
import Project from './Project'

const ProjectsSection = () => {
	return (
		<BaseSection
			id='projects'
			title='Projects'
			classes='relative overflow-hidden pt-0 md:pt-20 pb-20'
		>
			{projectList.map((project) => (
				<Project key={project.name} project={project} />
			))}
		</BaseSection>
	)
}

export default ProjectsSection
