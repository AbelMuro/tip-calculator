import React, {useState, memo} from 'react';
import styles from './styles.module.css';
import {useDispatch} from 'react-redux';

function CustomInput() {
    const [customTip, setCustomTip] = useState('');
    const dispatch = useDispatch();

    const handleTip = (e) => {
        setCustomTip(e.target.value);
    }

    const handleBlur = () => {
        dispatch({type: 'update tip', tip: customTip});
        dispatch({type: 'disable reset button', disable: true}); 
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