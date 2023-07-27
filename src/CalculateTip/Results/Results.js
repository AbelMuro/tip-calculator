import React from 'react';
import TipAmount from './TipAmount';
import TotalAmount from './TotalAmount';
import styles from './styles.module.css';

//this is where i left off, i will need to work on the responsiveness

function Results() {
    return(
        <section className={styles.container}>
            <TipAmount/>
            <TotalAmount/>
        </section>
    )
}

export default Results;