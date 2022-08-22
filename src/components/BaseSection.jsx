const BaseSection = ({ id, title, classes, children }) => {
	return (
		<section id={id} className={classes}>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
				{title && <h2 className='text-3xl font-bold mb-12'>{title}</h2>}
				{children}
			</div>
		</section>
	)
}

export default BaseSection
