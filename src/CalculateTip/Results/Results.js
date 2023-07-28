import React from 'react';
import TipAmount from './TipAmount';
import TotalAmount from './TotalAmount';
import ResetButton from './ResetButton';
import styles from './styles.module.css';

//this is where i left off, i wil need to ad a reset button

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