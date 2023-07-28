import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux'
import useMediaQuery from '../../../Hooks/useMediaQuery';

function TipAmount() {
    const mobile = useMediaQuery('(max-width: 465px)')
    const [amount, setAmount] = useState('0.00');
    const amountRef = useRef();
    const dispatch = useDispatch();
    const tip = useSelector(state => state.tip);
    const persons = useSelector(state => state.people);
    const bill = useSelector(state => state.bill);
    const total = useSelector(state => state.total);

    useEffect(() => {
        if(!tip || !persons || !bill) {
            setAmount('0.00');
            return;
        }
        let formatTip = Number(tip.replace('%', ''));
        formatTip = formatTip/100;
        let result = bill * formatTip;
        result = result/persons;
        setAmount(result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
    }, [tip, persons, bill])

    useEffect(() => {
        dispatch({type: 'update tip amount', tipAmount: amount});        
    }, [amount])

    useEffect(() => {
        if(total.length >= 8 && total.length <= 9)
            amountRef.current.style.fontSize = mobile ? '1.5rem' : '2rem';
        else if(total.length >= 10)
            amountRef.current.style.fontSize = mobile ? '1rem' : '1.5rem';  
        else
            amountRef.current.style.fontSize = '';  
    }, [total, mobile])

    return(
        <div className={styles.container}>
            <h1 className={styles.titleOne}>
                Tip Amount
            </h1>
            <h2 className={styles.titleTwo}>
                / person
            </h2>
            <p className={styles.total} ref={amountRef}>
                ${amount}
            </p>
        </div>
    )
}

export default TipAmount;