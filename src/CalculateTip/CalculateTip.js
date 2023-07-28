import React from 'react';
import BillInput from './BillInput';
import styles from './styles.module.css';
import SelectTip from './SelectTip';
import NumberOfPeopleInput from './NumberOfPeopleInput';
import Results from './Results';


//this is where i left off, i will need to manually access the value for each input and reset it
function CalculateTip() {
    const handleReset = (e) => {
        console.log('im here')
    }

    return(
        <form className={styles.container} onReset={handleReset}>
            <BillInput/>
            <SelectTip/>
            <NumberOfPeopleInput/>
            <Results/>
        </form>
    )
}

export default CalculateTip;