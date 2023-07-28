import React from 'react';
import TipAmount from './TipAmount';
import TotalAmount from './TotalAmount';
import ResetButton from './ResetButton';
import styles from './styles.module.css';

function Results() {
    return(
        <section className={styles.container}>
            <TipAmount/>
            <TotalAmount/>
            <ResetButton/>
        </section>
    )
}

export default Results;