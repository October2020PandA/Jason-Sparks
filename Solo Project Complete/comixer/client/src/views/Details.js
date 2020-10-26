import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import styles from '../modules/Main.module.css';
import Header from '../components/Header';
import { Paper } from '@material-ui/core';


export default () => {
    
    return (
      <div className="container-fluid">
        <Header/>

        <div className="mt-3">
            <div className={`${styles.detailsWrapper} row mb-3 d-flex justify-content-around`}>
                <img
                className={styles.details}
                src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2258024.jpg"
                alt="thumbnail"
                />

                <Paper elevation={3} className={styles.info}>
                  <h2 className="mb-3 p-5">Details</h2>
                  <ul>
                    <li>Title: </li>
                    <li>Plublisher: </li>
                    <li>Plublication date: </li>
                    <li>Story: </li>
                    <li>Artwork: </li>
                    <li>Letters: </li>
                    <li>Cover: </li>
                  </ul>

                  <button className="btn btn-secondary">Edit</button>

                </Paper>
            </div>


        </div>

      </div>
    );
};