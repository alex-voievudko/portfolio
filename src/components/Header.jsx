import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ReactComponent as Logo } from '../assets/logo.svg'
import resume from '../assets/Alex-Voievudko-Resume.pdf'
import Button from './Button'
import GithubLink from './GithubLink'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'

const Header = () => {
	const [opacity, setOpacity] = useState(false)
	const [open, setTOpen] = useState(false)

	const handleToggle = () => {
		setTOpen(!open)
		document.body.style.overflow =
			document.body.style.overflow === 'hidden' ? 'visible' : 'hidden'
	}

	useEffect(() => {
		window.onscroll = () => {
			if (window.pageYOffset > 76) {
				setOpacity(true)
			} else {
				setOpacity(false)
			}
		}
		return () => {
			window.onscroll = null
		}
	}, [])

	return (
		<header
			className={`sticky top-0 z-50 flex flex-wrap items-center justify-between px-4 py-5 transition duration-500 sm:px-6 lg:px-8 shadow-none ${
				opacity ? 'bg-black bg-opacity-90' : 'bg-transparent'
			}`}
		>
			<GiHamburgerMenu
				className='lg:hidden w-6 h-6 cursor-pointer'
				onClick={handleToggle}
			/>
			<div className='relativelg:flex flex-grow basis-0 item-center hidden lg:block'>
				<a href='/'>
					<Logo className='block h-9 w-auto' />
				</a>
			</div>
			<Navigation />
			<NavigationMobile isOpen={open} toggle={handleToggle} />
			<div className='relative flex md:flex-grow basis-0 justify-end items-center gap-6 sm:gap-8'>
				<Button variant='primary' size='small' link={resume}>
					Resume
				</Button>
				<GithubLink link='https://github.com/alex-voievudko' />
			</div>
		</header>
	)
}

export default Header
