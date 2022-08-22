import { ReactComponent as Logo } from '../assets/logo.svg'
import Button from './Button'
import GithubLink from './GithubLink'
import Navigation from './Navigation'

const Header = () => {
	return (
		<header className='sticky top-0 z-50 flex flex-wrap items-center justify-between px-4 py-5 transition duration-500 sm:px-6 lg:px-8 bg-transparent shadow-none'>
			{/* <div>Mobile Menu</div> */}
			<div className='relative flex flex-grow basis-0 item-center'>
				<a href='/'>
					<Logo className='hidden md:block h-9 w-auto' />
				</a>
			</div>
			<Navigation />
			<div className='relative flex md:flex-grow basis-0 justify-end items-center gap-6 sm:gap-8'>
				<Button variant='primary' size='small' link='#'>
					Resume
				</Button>
				<GithubLink link='https://github.com/alex-voievudko' />
			</div>
		</header>
	)
}

export default Header
