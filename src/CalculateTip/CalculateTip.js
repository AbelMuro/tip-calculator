import React from 'react';
import BillInput from './BillInput';
import styles from './styles.module.css';
import SelectTip from './SelectTip';
import NumberOfPeopleInput from './NumberOfPeopleInput'

function CalculateTip() {
    return(
        <div className={styles.container}>
            <BillInput/>
            <SelectTip/>
            <NumberOfPeopleInput/>
        </div>
    )
}

export default CalculateTip;