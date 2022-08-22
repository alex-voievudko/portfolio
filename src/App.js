import { Fragment } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillSection'
import ContactsSection from './components/ContactsSection'

function App() {
	return (
		<Fragment>
			<Header />
			<main>
				<HeroSection />
				<ProjectsSection />
				<AboutSection />
				<SkillSection />
				<ContactsSection />
			</main>
		</Fragment>
	)
}

export default App
