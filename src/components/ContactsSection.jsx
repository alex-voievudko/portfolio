import React from 'react'
import { FaTelegram, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa'

import BaseSection from './BaseSection'

const ContactsSection = () => {
	return (
		<BaseSection
			id='contacts'
			title='Contacts'
			classes='relative overflow-hidden pt-0 md:pt-20 pb-20'
		>
			<div className='m-auto w-40'>
				<div className='grid gap-1 grid-cols-3 content-center'>
					<a
						href='https://www.linkedin.com/in/alex-voievudko/'
						target='_blank'
						rel='noreferrer'
						className='text-center group flex justify-center'
					>
						<FaLinkedin className='h-8 w-8 fill-zinc-200 group-hover:fill-zinc-400 transition duration-150' />
					</a>
					<a
						href='https://t.me/alex_voievudko'
						target='_blank'
						rel='noreferrer'
						className='text-center group flex justify-center'
					>
						<FaTelegram className='h-8 w-8 fill-zinc-200 group-hover:fill-zinc-400 transition duration-150' />
					</a>
					<a
						href='mailto:alex.voievudko@gmail.com'
						target='_blank'
						rel='noreferrer'
						className='text-center group flex justify-center'
					>
						<FaEnvelopeSquare className='h-8 w-8 fill-zinc-200 group-hover:fill-zinc-400 transition duration-150' />
					</a>
				</div>
			</div>
		</BaseSection>
	)
}

export default ContactsSection
