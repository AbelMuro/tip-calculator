import React, {useRef} from 'react';
import BillInput from './BillInput';
import styles from './styles.module.css';
import SelectTip from './SelectTip';
import NumberOfPeopleInput from './NumberOfPeopleInput';
import Results from './Results';


function CalculateTip() {
    const bill = useRef();
    const people = useRef();

    const handleReset = () => {
        bill.current.resetState();
        people.current.resetState();
    }

    return(
        <form className={styles.container} onReset={handleReset}>
            <BillInput ref={bill}/>
            <SelectTip/>
            <NumberOfPeopleInput ref={people}/>
            <Results/>
        </form>
    )
}

export default CalculateTip;