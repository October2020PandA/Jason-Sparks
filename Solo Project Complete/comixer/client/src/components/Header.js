import React from 'react'
import logo from '../assets/logo.png'; // Tell webpack this JS file uses this image
import styles from '../modules/Header.module.css';

export default (props) => {
    const {link } = props;

    return (
        <>
            <div className={`${styles.background} row mb-3 d-flex justify-content-left`}>
                <a href="/main">
                    <img
                    src={logo}
                    alt="logo"
                    className={styles.logo}
                    width={"61px"}
                    />
                </a>
                <h1 className="display-4 d-inline-block">Comixer</h1>
                {link}
            </div>
        </>
    )
}
