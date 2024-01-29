// Routing
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// Components
import SearchBar from '../SearchBar/SearchBar';
// Helpers
import PATHROUTES from '../../helpers/PathRoutes.helper';
// Styles
import styles from './NavBar.module.css'
import { useDispatch } from 'react-redux';
import { resetCountries } from '../../redux/actions';


const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleHomeClick = () => {
        navigate('/home');
    }
    return (
        <div className={styles.navMain}>
            <div className={styles.links}>
                <Link to={PATHROUTES.LANDING} className={styles.title}><h1>Countries APP</h1></Link>
                <a className={styles.title} href='/home'><h1>Home</h1></a>
                <Link to={PATHROUTES.FORM} className={styles.title}><h1>Crear Actividades</h1></Link>
            </div>
            <Routes>
                <Route path={PATHROUTES.HOME} element={<SearchBar />} />
            </Routes>
        </div>
    )
}

export default NavBar;