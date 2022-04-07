import Bubble from './img/bubble.png';
import Group1 from './img/group_1.png';
import Group2 from './img/group_2.png';
import Group3 from './img/group_3.png';
import Group4 from './img/group_4.png';
import styles from './Bubbles.module.css'

export const Bubbles = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.group}>
                    <img className={styles.one} src={Group1} alt="bubble"/>
                </div>
                <div className={styles.group}>
                    <img className={styles.two} src={Group2} alt="bubble"/>
                </div>
                <div className={styles.group}>
                    <img className={styles.six} src={Group3} alt="bubble"/>
                </div>
                <div className={styles.group}>
                    <img className={styles.eight} src={Group4} alt="bubble"/>
                </div>
            </div>
        </div>
    )
}