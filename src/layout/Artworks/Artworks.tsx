import styles from './Artworks.module.css';
import React, {useState} from "react";
import {Slider} from '../../components/Slider/Slider';
import cn from 'classnames';

export const Artworks = () => {

    const [isRare, setIsRare] = useState(true);
    const [isVeryRare, setIsVeryRare] = useState(false);

    const SwitchRare = () => {
        setIsRare(true);
        setIsVeryRare(false);
    }

    const SwitchVeryRare = () => {
        setIsRare(false);
        setIsVeryRare(true);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.buttons}>
                    <button className={styles.primary} onClick={SwitchRare}>Редкие</button>
                    <button className={styles.ghost} onClick={SwitchVeryRare}>Очень редкие</button>
                </div>
                <div className={cn(styles.rare, {
                    [styles.hidden]: isRare === false
                })}>
                    <Slider rare={true}/>
                </div>
                <div className={cn(styles.veryRare, {
                    [styles.hidden]: isVeryRare === false
                })}>
                    <Slider rare={false}/>
                </div>
            </div>
        </div>
    );
}