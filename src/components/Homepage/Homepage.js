import '../../css/Styles.css';
import { Link } from 'react-router-dom';
export const HomePage = () => {
    return(
        <div className='App-header'>
            <Link to="/Score" className='btn btn-primary' >Get Started</Link>
        </div>
    );
}