import React from 'react';
import TipAmount from './TipAmount';
import TotalAmount from './TotalAmount';
import styles from './styles.module.css';

function Results() {
    return(
        <section className={styles.container}>
            <TipAmount/>
            <TotalAmount/>
        </section>
    )
}

export default Results;