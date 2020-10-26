import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../modules/Login.module.css'


export default () => {
    
    return (
      <div className={`${styles.body} container-fluid h-100`}>
          <LoginForm/>
      </div>
    );
};