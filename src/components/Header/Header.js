
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <div className="container">
           <nav>
           <Link to='/'><img src={logo} alt="logo" /></Link>
           <div className='menu'>
            <Link to='/'>Shop</Link>
            <Link to='/order'>Order Review</Link>
            <Link to='/inventory'>Manage Inventory</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
           </div>
           </nav>
           </div>
        </div>
    );
};

export default Header;