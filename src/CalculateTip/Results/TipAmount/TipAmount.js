import React from 'react';
import styles from './styles.module.css';

//this is where i left off, i will need to property align the elements within their grid
function TipAmount() {
    return(
        <div className={styles.container}>
            <h1 className={styles.titleOne}>
                Tip Amount
            </h1>
            <h2 className={styles.titleTwo}>
                / person
            </h2>
            <p className={styles.total}>
                $4.27
            </p>
        </div>
    )
}

export default TipAmount;