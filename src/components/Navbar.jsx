import '../styles/navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/view">View All</Link></li>
                <li><Link to="/Create">Create</Link></li>
                <li><Link to="/Update">Update</Link></li>
                <li><Link to='/delete'>Delete</Link></li>
            </ul>

        </div>
    )
}


export default Navbar;