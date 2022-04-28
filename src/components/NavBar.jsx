import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  const routes = [
    {
      label: 'Offers',
      path: '/offers',
      icon: (
        <OfferIcon
          fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
          width='36px'
          height='36px'
        />
      ),
    },
    {
      label: 'Explore',
      path: '/',
      icon: (
        <ExploreIcon
          fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
          width='36px'
          height='36px'
        />
      ),
    },
    {
      label: 'Profile',
      path: '/profile',
      icon: (
        <PersonOutlineIcon
          fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
          width='36px'
          height='36px'
        />
      ),
    },
  ];

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          {routes.map((route, index) => (
            <li
              key={index}
              className='navbarListItem'
              onClick={() => navigate(route.path)}>
              {route.icon}
              <p
                className={
                  pathMatchRoute(route.path)
                    ? 'navBarListItemNameActive'
                    : 'navBarListItemName'
                }>
                {route.label}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default NavBar;
