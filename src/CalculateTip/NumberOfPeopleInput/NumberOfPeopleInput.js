import React from 'react';
import styles from './styles.module.css';
import personIcon from './icons/icon-person.svg';

//this is where i left off, i will need to create an error message

function NumberOfPeopleInput(){
    return(
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Number of People
            </label>
            <div className={styles.input_container}>
                <input type='number' className={styles.input}/>
                <img src={personIcon} className={styles.personIcon}/>
            </div>
        </fieldset>
    )
}

export default NumberOfPeopleInput;