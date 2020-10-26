import React from 'react';
import RegisterForm from '../components/RegisterForm';
import styles from '../modules/Login.module.css'


export default () => {
    
    return (
      <div className={`${styles.body} container-fluid h-100`}>
        <RegisterForm/>
      </div>
    );
};