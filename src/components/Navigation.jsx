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

const Navigation = () => {
	return (
		<nav className='hidden relative z-50 md:flex md:flex-grow md:basis-0 item-center'>
			<div className=' md:flex md:gap-x-6 md:flex-grow justify-center'>
				{navSettings.map((item) => (
					<a
						key={item.id}
						href={item.link}
						className='transition-colors duration-150 hover:text-zinc-400'
					>
						{item.name}
					</a>
				))}
			</div>
		</nav>
	)
}

export default Navigation
