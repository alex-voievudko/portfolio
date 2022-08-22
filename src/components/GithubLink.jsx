import { FaGithub } from 'react-icons/fa'

const GithubLink = ({ link }) => {
	return (
		<a className='group' href={link}>
			<FaGithub className='h-6 w-6 fill-zinc-200 group-hover:fill-zinc-400 transition duration-150' />
		</a>
	)
}

export default GithubLink
