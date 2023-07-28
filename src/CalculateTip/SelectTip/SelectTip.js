import React, {useEffect} from 'react';
import styles from './styles.module.css';
import CustomInput from './CustomInput';
import {useDispatch, useSelector} from 'react-redux';

function SelectTip(){
    const tip = useSelector(state => state.tip);
    const dispatch = useDispatch();

    const handleTip = (e) => {
        if(!e.target.matches('.' + styles.tip_box)) return;
        const newTip = e.target.getAttribute('data-id');
        dispatch({type: 'update tip', tip: newTip});    
    }

    useEffect(() => {
        const allTips = document.querySelectorAll('.' + styles.tip_box);
        allTips.forEach((tip) => {
            tip.style.backgroundColor = '';
            tip.style.color = '';
        })
    }, [tip])

    useEffect(() => {
        const allTips = document.querySelectorAll('.' + styles.tip_box);
        allTips.forEach((currentTip) => {
            if(currentTip.getAttribute('data-id') === tip){
                currentTip.style.backgroundColor = '#26C2AE';
                currentTip.style.color = '#00474B';
            }
        })
    }, [tip])


    return(
        <section className={styles.container} onClick={handleTip}>
            <h1 className={styles.title}>
                Select Tip %
            </h1>
            <div className={styles.tip_box} data-id='5%'>
                5%
            </div>
            <div className={styles.tip_box} data-id='10%'>
                10%
            </div>
            <div className={styles.tip_box} data-id='15%'>
                15%
            </div>
            <div className={styles.tip_box} data-id='20%'>
                25%
            </div>
            <div className={styles.tip_box} data-id='50%'>
                50%
            </div>
            <CustomInput/>
        </section>
    )
}

export default SelectTip;