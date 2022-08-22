import { ReactComponent as Logo } from '../assets/logo.svg'
import { MdOutlineClose } from 'react-icons/md'

const navSettings = [
	{
		id: '1',
		name: 'Projects',
		link: '#projects',
	},
	{
		id: '2',
		name: 'About',
		link: '#about',
	},
	{
		id: '3',
		name: 'Skills',
		link: '#skills',
	},
	{
		id: '4',
		name: 'Contacts',
		link: '#contacts',
	},
]

const NavigationMobile = ({ isOpen, toggle }) => {
	return (
		<nav
			className={`w-full h-full fixed left-0 transition duration-500 z-50 p-5 flex justify-center flex-col items-start mobile-nav ${
				isOpen ? 'opacity-100 top-0' : 'opacity-0 -top-full'
			}`}
		>
			<div className='flex justify-between items-center w-full'>
				<Logo className='block h-9 w-auto' />
				<MdOutlineClose className='w-6 h-6 cursor-pointer' onClick={toggle} />
			</div>
			<div className='flex gap-x-6 flex-grow-0 justify-center flex-col mt-14'>
				{navSettings.map((item) => (
					<a
						key={item.id}
						onClick={toggle}
						href={item.link}
						className='transition-colors duration-150 hover:text-zinc-400 mb-5 text-lg'
					>
						{item.name}
					</a>
				))}
			</div>
			<div className='flex-grow'></div>
		</nav>
	)
}

export default NavigationMobile
