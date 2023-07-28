import React, {useRef, useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import styles from './styles.module.css';
import personIcon from './icons/icon-person.svg';
import {useDispatch} from 'react-redux';

const NumberOfPeopleInput = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const [people, setPeople] = useState('');
    const inputRef = useRef();
    const errorMessageRef = useRef();

    const handlePeople = (e) => {
        setPeople(e.target.value);
    }

    const handleBlur = () => {
        if(people === '') return;

        if(Number(people) <= 0){
            errorMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '2px solid #E17052';
        }
        else{
            dispatch({type: 'update people', people});
        }
    }


    useImperativeHandle(ref, () => ({
        resetState() {
            setPeople('');
        }
    }))

    useEffect(() => {
        errorMessageRef.current.style.display = '';
        inputRef.current.style.border = '';
    }, [people])

    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Number of People
            </label>
            <div className={styles.input_container}>
                <input type='number' 
                    value={people}
                    placeholder="0"
                    name='people'
                    onChange={handlePeople}
                    onBlur={handleBlur}
                    className={styles.input} ref={inputRef}/>
                <img src={personIcon} className={styles.personIcon}/>
            </div>
            <p className={styles.errorMessage} ref={errorMessageRef}>
                Can't be zero
            </p>
        </fieldset>
    )
})

export default NumberOfPeopleInput;