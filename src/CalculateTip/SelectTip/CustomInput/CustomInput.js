import React, {useState, memo} from 'react';
import styles from './styles.module.css';
import {useDispatch} from 'react-redux';

function CustomInput() {
    const [customTip, setCustomTip] = useState('');
    const dispatch = useDispatch();

    const handleTip = (e) => {
        const tip = e.target.value;
        console.log(tip);
        if(Number(tip) < 0 || Number(tip) > 100) return;
        setCustomTip(e.target.value);
    }

    const handleBlur = () => {
        dispatch({type: 'update tip', tip: customTip});
    }

    return(
            <input type='number' 
                className={styles.custom_input}
                value={customTip}
                onChange={handleTip}
                onBlur={handleBlur}
                placeholder={'Custom'}/>

    )
}

export default memo(CustomInput);