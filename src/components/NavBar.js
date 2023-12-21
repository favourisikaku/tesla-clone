import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({cart}) => {
	return (
		<div>
			<nav class="navbar bg-transparent fixed-top">
				<div class="container-fluid">
					<div>
						<Link to='/'>
							<svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" class ="logo" fill="currentColor"></path></svg>
						</Link>					
					</div>
					<div className='middle-navbar color-light'>
						<Link to='/Model3'><h4>Model 3</h4></Link> 
						<Link to='/ModelX'><h4>Model X</h4></Link> 
						<Link to='/ModelY'><h4>Model Y</h4></Link> 
						<Link to='/Shop'><h4>Shop</h4></Link>
					</div>
					<div className='right-navbar'>
				 <Link to='/CartItem'><i className="mx-4 fa fa-cart-shopping"></i></Link>
				 <Link to='/CartItem'><h5 className='cart-count'>{cart.length}</h5>
				 </Link>
				 	
					<button class="navbar-toggler text-light ms-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">Menu
					</button>
					</div>
					<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
						<div class="offcanvas-header">
							<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div class="offcanvas-body">
							<ul class="navbar-nav justify-content-end flex-grow-1 pe-3" data-bs-dismiss="offcanvas">
								<li class="nav-item">
									<Link to='./' class="nav-link">Home</Link>
								</li>
								<li class="nav-item">
									<Link to='./Model3' class="nav-link border-top">Model 3</Link>
								</li>
								<li class="nav-item">
									<Link to='./ModelX' class="nav-link border-top">Model X</Link>
								</li>
								<li class="nav-item">
									<Link to='./ModelY' class="nav-link border-top">Model Y</Link>
								</li>
								<li class="nav-item">
									<Link to='./Shop' class="nav-link border-top">Shop</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
