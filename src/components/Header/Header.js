
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, logOut}= useContext(AuthContext)

    const handeLogout =()=>{
        logOut()
        .then(() => {})
        .catch((error) => {
            console.log(error)
          });
    }
    return (
        <div className='header'>
           <div className="container">
           <nav>
           <Link to='/'><img src={logo} alt="logo" /></Link>
           <div className='menu'>
            <Link to='/'>Shop</Link>
            <Link to='/order'>Order Review</Link>
            <Link to='/inventory'>Manage Inventory</Link>
            {user ? <><Link>{user.email}</Link> <button onClick={handeLogout}>Logout</button></>:<Link to='/login'>Login</Link>}
            {!user && <Link to='/signup'>Signup</Link>} 
           </div>
           </nav>
           </div>
        </div>
    );
};

export default Header;