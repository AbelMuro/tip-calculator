import React from 'react';
import BillInput from './BillInput';
import styles from './styles.module.css';
import SelectTip from './SelectTip';
import NumberOfPeopleInput from './NumberOfPeopleInput';
import Results from './Results';

function CalculateTip() {
    return(
        <div className={styles.container}>
            <BillInput/>
            <SelectTip/>
            <NumberOfPeopleInput/>
            <Results/>
        </div>
    )
}

export default CalculateTip;