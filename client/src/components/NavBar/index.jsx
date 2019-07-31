import React from 'react';
import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

const index = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <ul>
                    <li className={styles.route}>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/counter/">About</Link>
                    </li>
                    <li>
                        <Link to="/stuff/">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default index