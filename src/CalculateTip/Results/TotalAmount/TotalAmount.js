import React, {useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';

function TotalAmount() {
    const [total, setTotal] = useState('0.00');
    const dispatch = useDispatch();
    const totalRef = useRef();
    const bill = useSelector(state => state.bill);
    const people = useSelector(state => state.people);
    const tipAmount = useSelector(state => state.tipAmount);

    useEffect(() => {
        if(!bill || !people || tipAmount === '0.00') {
            setTotal('0.00');
           return;  
        }
        let total = bill/people;
        total = total + Number(tipAmount.replaceAll(',', ''));
        setTotal(total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
    }, [bill, people, tipAmount])

    useEffect(() => {
        dispatch({type: 'update total', total});
        if(total.length >= 8 && total.length <= 9)
            totalRef.current.style.fontSize = '2rem';
        else if(total.length >= 10)
            totalRef.current.style.fontSize = '1.5rem';  
        else
            totalRef.current.style.fontSize = '';  
    }, [total])



    return(
        <div className={styles.container}>
            <h1 className={styles.titleOne}>
                Total
            </h1>
            <h2 className={styles.titleTwo}>
                / person
            </h2>
            <p className={styles.total} ref={totalRef}>
                ${total}
            </p>
        </div>
    )
}

export default TotalAmount;