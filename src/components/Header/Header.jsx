import React from 'react'
import { Link }  from 'react-router-dom'
import './Header.css'

const Header = () => {
	return (
		<div className='header'>
			<div className="container">
					<Link to="/" className="header_link-item">Logo</Link>
					<div className="header_link">
						<Link to="about" className="header_link-item">About</Link>
						<Link to="mans" className="header_link-item">Mans</Link>
						<Link to="womans" className="header_link-item">Womans</Link>
					</div>
			</div>
		</div>
	)
}

export default Header