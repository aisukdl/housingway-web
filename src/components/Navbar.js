import { Link,useLocation } from 'react-router-dom';
import '../styles/Navbar.css'
import { useState, useEffect } from 'react';
import BookingButton from './BookingButton';
import useAuth from '../hooks/useAuth';

function Navbar (){
    const [activeRoute, setActiveRoute] = useState('');
    const location = useLocation();
    useEffect(() => {
        setActiveRoute(location.pathname);
    }, [location]);
    const{authenticatedUser,logout} = useAuth();
    
    
    return(
        <div className='nav-bar'>
            <div style={{flex:1,fontWeight:'bold'}}><span>{authenticatedUser? `welcome, ${authenticatedUser.username}`: ''}</span> {authenticatedUser? <span onClick={logout}>logout</span>: ''}</div>
            <Link to='/' className={activeRoute === '/' ? 'nav-item link-active' : 'nav-item'}>home</Link>
            <Link to='/info' className={activeRoute === '/info' ? 'nav-item link-active' : 'nav-item'}>info</Link>
            <Link to='/pricing' className={activeRoute === '/pricing' ? 'nav-item link-active' : 'nav-item'}>pricing</Link>
            <Link to='/queue' className={activeRoute === '/queue' ? 'nav-item link-active' : 'nav-item'}>queue</Link>
            <Link to='/contact' className={activeRoute === '/contact' ? 'nav-item link-active' : 'nav-item'}>contact</Link>
            <BookingButton activeRoute = {activeRoute}/>
        </div>
    )
}
export default Navbar;