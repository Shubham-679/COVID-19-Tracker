import React from 'react';
import styles from './Navigation.module.css';
import {Typography} from '@material-ui/core';
import { NavLink} from 'react-router-dom';

function Navigation() {

    return (
        <div className={styles.root}>
                    <Typography variant="h5" className={styles.title}>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <NavLink className={styles.navLink} aria-current="page" to="/home">Home</NavLink>
                            <NavLink className={styles.navLink} to="/sandp">Precaustions & Symptoms </NavLink>
                            <NavLink className={styles.navLink} to="/articles">Articles</NavLink>
                        </ul>
                    </div>
                        </Typography>
                    
        </div>
    );
}

export default Navigation;
