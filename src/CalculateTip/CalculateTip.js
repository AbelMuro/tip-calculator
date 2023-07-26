import React from 'react';
import BillInput from './BillInput';
import styles from './styles.module.css';

function CalculateTip() {
    return(
        <div className={styles.container}>
            <BillInput/>
        </div>
    )
}

export default CalculateTip;