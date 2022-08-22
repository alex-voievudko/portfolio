const Button = ({ variant, size, link, children }) => {
	const classes = ['btn']

	if (variant === 'primary') {
		classes.push('btn-primary')
	} else if (variant === 'secondary') {
		classes.push('btn-secondary')
	}

	if (size === 'small') {
		classes.push('btn-small')
	}

	return (
		<a
			href={link}
			className={classes.join(' ')}
			target='_blank'
			rel='noreferrer'
		>
			{children}
		</a>
	)
}

export default Button
