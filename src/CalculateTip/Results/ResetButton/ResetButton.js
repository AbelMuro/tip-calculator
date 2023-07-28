import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {useDispatch, useSelector} from 'react-redux';


function ResetButton() {
    const dispatch = useDispatch();
    const resetButton = useRef();
    const bill = useSelector(state => state.bill);
    const tip = useSelector(state => state.tip);
    const people = useSelector(state => state.people);

    const handleReset = (e) => {
        dispatch({type: 'update bill', bill: ''});
        dispatch({type: 'update tip', tip: ''});
        dispatch({type: 'update people', people: ''});
        const form = e.currentTarget.form;
        form.reset();
    }

    useEffect(() => {
        if(bill || tip || people)
            resetButton.current.disabled = false;
        else
            resetButton.current.disabled = true;
    }, [bill, tip, people])

    return(
        <input type='reset' value='RESET' className={styles.reset} onClick={handleReset} ref={resetButton}/>
    )
}

export default ResetButton;