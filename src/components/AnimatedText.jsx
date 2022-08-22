import { TypeAnimation } from 'react-type-animation'

const AnimatedText = () => {
	return (
		<TypeAnimation
			className=' text-2xl font-medium text-emerald-300 mb-3 text-center md:text-left'
			sequence={[
				'Frontend Developer',
				1000,
				'JavaScript Developer',
				1000,
				'React Developer',
				1000,
				'Fullstack Developer',
				1000,
			]}
			speed={45}
			wrapper='h2'
			repeat={Infinity}
		/>
	)
}
export default AnimatedText
