import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import dollarIcon from './icons/icon-dollar.svg';
import {useDispatch} from 'react-redux';


function BillInput() {
    const dispatch = useDispatch();
    const [bill, setBill] = useState('');
    const inputRef = useRef();
    const emptyMessageRef = useRef();
    const zeroMessageRef = useRef();

    const handleBill = (e) => {
        e.target.setCustomValidity('');
        const userInput = e.target.value;
        const checkInput = userInput.replaceAll('.', '').replaceAll(',', '');                  
        if(!checkInput.match(/\d/g) && checkInput != '') return;                  //will not accept any non-digit character
        setBill(userInput);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        if(isEmpty){
            emptyMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '2px solid #E17052';
            return;
        }
        else if(bill === '0'){
            e.target.setCustomValidity(' ');
            zeroMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '2px solid #E17052';
            return;
        }
        else{
            let newBill = bill.replaceAll(',', '');
            newBill = Number(newBill);
            const formatBill = newBill.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
            setBill(formatBill);
            dispatch({type: 'update bill', bill: newBill});       
        }
    }

    useEffect(() => {
        zeroMessageRef.current.style.display = '';
        emptyMessageRef.current.style.display = '';
        inputRef.current.style.border = ''
    }, [bill])

    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Bill
            </label>
            <div className={styles.input_container}>
                <img src={dollarIcon} className={styles.dollarIcon}/>
                <input type='text' 
                    className={styles.input} 
                    placeholder={'0'}
                    value={bill}
                    onChange={handleBill}
                    onBlur={handleBlur}
                    ref={inputRef}
                    required/>
            </div>
            <p className={styles.errorMessage} ref={emptyMessageRef}>
                Can't be empty
            </p>
            <p className={styles.errorMessage} ref={zeroMessageRef}>
                Can't be zero
            </p>
        </fieldset>
    )
}

export default BillInput;