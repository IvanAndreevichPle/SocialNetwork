import './Header.module.css';
import classes from './Header.module.css'
import logo from '../../img/logo.png'


const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div>

            </div>


        </header>

    );
}

export default Header;